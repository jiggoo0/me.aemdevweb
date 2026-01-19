#!/bin/bash

# ===============================
# === CONFIG / METADATA =========
# ===============================
OUTPUT_FILE="project-structure.md"
PRE_DEPLOY_REPORT="pre-deploy-report.md"
MDX_COMPONENTS_FILE="mdx-components.tsx"
NEXT_CONFIG_FILE="next.config.ts"

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

echo "🚀 Scanning project structure with metadata & content analysis..."

{
  # ===============================
  # === FRONT MATTER METADATA ====
  # ===============================
  echo "---"
  echo "title: \"Project Structure Report\""
  echo "description: \"Extended scan of project folders, configuration, content, MDX, Next.js config, and pre-deploy analysis\""
  echo "author: \"$AUTHOR\""
  echo "site: \"$SITE_URL\""
  echo "projectType: \"$PROJECT_TYPE\""
  echo "environment: \"$ENVIRONMENT\""
  echo "buildId: \"$BUILD_ID\""
  echo "contentType: \"documentation\""
  echo "generatedAt: \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\""
  echo "tags:"
  echo "  - project-structure"
  echo "  - nextjs"
  echo "  - mdx"
  echo "  - pre-deploy"
  echo "  - aem"
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
  # === MDX COMPONENTS ===========
  # ===============================
  echo ""
  echo "## 🧩 MDX Components Analysis"

  if [ -f "$MDX_COMPONENTS_FILE" ]; then
    echo ""
    echo "### 📄 File: \`$MDX_COMPONENTS_FILE\`"
    echo ""
    echo "#### 🔍 Purpose"
    echo "- Central MDX component mapping for content rendering"
    echo "- Controls headings, links, images, code blocks, and custom UI"
    echo "- Critical for SEO, Accessibility, and Headless CMS (AEM) compatibility"
    echo ""

    echo "#### 🧠 Structural Overview"
    echo "- React components exposed to MDX provider"
    echo "- Overrides default HTML tags (h1–h6, p, a, img, code, pre)"
    echo "- Used by Next.js App Router MDX pipeline"
    echo ""

    echo "#### 🧩 Source Code"
    echo '```typescript'
    cat "$MDX_COMPONENTS_FILE"
    echo '```'

    echo "#### ⚠️ Review Checklist"
    echo "- [ ] Heading hierarchy (h1–h6) is semantic"
    echo "- [ ] External links use rel=\"noopener noreferrer\""
    echo "- [ ] Images optimized (next/image preferred)"
    echo "- [ ] Code blocks support syntax highlighting"
    echo "- [ ] No inline scripts or unsafe HTML"
    echo "- [ ] Compatible with AEM / Headless rendering"
  else
    echo "⚠️ \`$MDX_COMPONENTS_FILE\` not found — MDX rendering may be incomplete"
  fi

  # ===============================
  # === NEXT.CONFIG.TS ===========
  # ===============================
  echo ""
  echo "## ⚙️ Next.js Configuration Analysis"

  if [ -f "$NEXT_CONFIG_FILE" ]; then
    echo ""
    echo "### 📄 File: \`$NEXT_CONFIG_FILE\`"
    echo ""
    echo "#### 🔍 Purpose"
    echo "- Core Next.js runtime and build configuration"
    echo "- Controls routing behavior, images, security headers, and optimizations"
    echo "- Critical for performance, SEO, and production deployment"
    echo ""

    echo "#### 🧠 Configuration Review Focus"
    echo "- App Router / experimental flags"
    echo "- Image domains and optimization"
    echo "- Headers (security, CSP, caching)"
    echo "- Output mode (standalone / export)"
    echo "- AEM / Headless compatibility"
    echo ""

    echo "#### ⚙️ Source Code"
    echo '```typescript'
    cat "$NEXT_CONFIG_FILE"
    echo '```'

    echo "#### ⚠️ Review Checklist"
    echo "- [ ] output mode correctly set (standalone/export)"
    echo "- [ ] images.domains explicitly defined"
    echo "- [ ] security headers configured (CSP, X-Frame, etc.)"
    echo "- [ ] experimental flags reviewed"
    echo "- [ ] basePath / assetPrefix correct (if used)"
    echo "- [ ] Compatible with CDN / AEM Dispatcher"
  else
    echo "⚠️ \`$NEXT_CONFIG_FILE\` not found — using Next.js defaults"
  fi

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
      echo '```text'
      sed -n '/### 📊 Route Statistics/,/---/p' "$PRE_DEPLOY_REPORT" | \
        grep -v "###" | \
        grep -v -- "---" | \
        sed '/^$/d'
      echo '```'
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

  # ===============================
  # === FINAL STATUS =============
  # ===============================
  echo ""
  echo "---"
  echo "Status: Scan completed successfully."
  echo "Scope: Architecture • Content • MDX • Next.js Config • Pre-deploy"
  echo "Target: AEM / Headless / AI Context Ready"

} > "$OUTPUT_FILE"

echo "✅ Scan completed → $OUTPUT_FILE"
echo "🌐 Ready for ingestion at → https://me.aemdevweb.com/"