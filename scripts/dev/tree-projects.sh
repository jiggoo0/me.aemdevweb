#!/bin/bash

# ===============================
# === CONFIG / METADATA =========
# ===============================
OUTPUT_FILE="project-structure.md"
PRE_DEPLOY_REPORT="pre-deploy-report.md"

SITE_URL="https://me.aemdevweb.com/"
AUTHOR="Auto Generated Script"
PROJECT_TYPE="Web Application"
ENVIRONMENT="pre-deploy"
BUILD_ID=$(git rev-parse --short HEAD 2>/dev/null || echo "local")

WHITELIST_DIRS=(
  "config"
  "app"
  "components"
  "lib"
  "hooks"
  "constants"
  "content"
  "types"
  "public"
  "providers"
)

# ===============================
# === CLEAN OLD OUTPUT ==========
# ===============================
rm -f "$OUTPUT_FILE"

echo "🚀 Scanning project structure with config & metadata..."

{
  # ===============================
  # === FRONT MATTER METADATA ====
  # ===============================
  echo "---"
  echo "title: \"Project Structure Report\""
  echo "description: \"Extended scan of project folders, configuration, and pre-deploy analysis\""
  echo "author: \"$AUTHOR\""
  echo "site: \"$SITE_URL\""
  echo "projectType: \"$PROJECT_TYPE\""
  echo "environment: \"$ENVIRONMENT\""
  echo "buildId: \"$BUILD_ID\""
  echo "generatedAt: \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\""
  echo "contentType: \"documentation\""
  echo "tags:"
  echo "  - project-structure"
  echo "  - pre-deploy"
  echo "  - config-scan"
  echo "  - automation"
  echo "---"
  echo ""

  echo "# 📁 Project Structure Report (Extended Scan)"
  echo "_Generated: $(date)_"
  echo ""

  # ===============================
  # === FOLDER STRUCTURE =========
  # ===============================
  echo "## 🌳 Folder Structure"

  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo ""
      echo "📂 $dir"

      find "$dir" -maxdepth 10 -mindepth 1 \
        -path "*/node_modules" -prune -o \
        -path "*/.*" -prune -o \
        -print | sort | while read -r path; do

          depth=$(echo "$path" | tr -cd '/' | wc -c)
          indent=$(printf '%*s' $((depth * 2)) "")
          name=$(basename "$path")

          if [ -d "$path" ]; then
            echo "${indent}📂 $name"
          else
            echo "${indent}📄 $name"
          fi
        done
    else
      echo ""
      echo "⚠️ Skipped (not found): $dir"
    fi
  done

  # ===============================
  # === PACKAGE.JSON ============
  # ===============================
  echo ""
  echo "## 📦 package.json Overview"
  echo '```json'

  if [ -f "package.json" ]; then
    if command -v jq >/dev/null 2>&1; then
      jq '{name, version, scripts, dependencies, devDependencies}' package.json
    else
      cat package.json
    fi
  else
    echo "package.json not found"
  fi

  echo '```'

  # ===============================
  # === PRE-DEPLOY ANALYSIS ======
  # ===============================
  echo ""
  echo "## 📝 Pre-Deploy Analysis"
  echo "________"

  if [ -f "$PRE_DEPLOY_REPORT" ]; then
    echo "🔍 Latest pre-deploy report detected"
    echo ""

    if grep -qi "READY FOR DEPLOY" "$PRE_DEPLOY_REPORT"; then
      echo "✅ Status: **READY FOR DEPLOY**"
    else
      echo "❌ Status: **FIX REQUIRED**"
    fi

    echo ""

    if grep -q "### 📊 Route Statistics" "$PRE_DEPLOY_REPORT"; then
      echo "### 📍 Production Route Map"
      echo "\`\`\`text"
      sed -n '/### 📊 Route Statistics/,/---/p' "$PRE_DEPLOY_REPORT" | \
        grep -v "###" | \
        grep -v -- "---" | \
        sed '/^$/d'
      echo "\`\`\`"
    fi

    echo ""
    echo "### ⚠️ Issues Highlight"

    ISSUES=$(grep -E -- "❌|⚠️|error|warning|failed" "$PRE_DEPLOY_REPORT")
    if [ -z "$ISSUES" ]; then
      echo "✅ No critical issues detected"
    else
      echo "$ISSUES"
    fi
  else
    echo "⚠️ pre-deploy-report.md not found"
    echo "Run pre-deploy-check.sh to generate the report"
  fi

  echo ""
  echo "---"
  echo "Status: Scan completed successfully."

} > "$OUTPUT_FILE"

echo "✅ Scan completed → $OUTPUT_FILE"