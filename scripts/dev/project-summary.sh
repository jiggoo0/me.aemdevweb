#!/bin/bash

# ==============================================================================
# 🚀 me.aemdevweb.com : Full Context & Code Analysis Script (Production Enhanced)
# ==============================================================================
# Description: Compiles architectural structure and critical source code into
# a single markdown file for AI context, AEM ingestion, technical audits,
# documentation portal, and security review.
# Domain: https://me.aemdevweb.com
# ==============================================================================

# ⚙️ CONFIGURATION
OUTPUT_FILE="aemdevweb-summary-with-code.md"
REPORT_FILE="pre-deploy-report.md"

PROJECT_DOMAIN="me.aemdevweb.com"
PROJECT_URL="https://me.aemdevweb.com"
PROJECT_NAME="AEM DevWeb Platform"
AUTHOR="Internal Automation Bot"
ENVIRONMENT="production"
CONTENT_TYPE="documentation"
BUILD_ID=$(git rev-parse --short HEAD 2>/dev/null || echo "local")

# Comprehensive Whitelist for Next.js 15 Enterprise Structure
WHITELIST_DIRS=(
  "app"
  "actions"
  "components"
  "lib"
  "hooks"
  "types"
  "scripts"
  "public"
  "data"
  "constants"
  "providers"
  "content"
  "styles"
  "services"
  "config"
)

# Critical files for AI / AEM / Context Analysis
SCAN_FILES=(
  "ai-context.md"
  "$REPORT_FILE"
  "app/globals.css"
  "app/layout.tsx"
  "app/page.tsx"
  "app/about/page.mdx"
  "app/contact/page.mdx"
  "app/projects/page.mdx"
  "app/services/page.mdx"
  "app/services/aem-dev/page.mdx"
  "app/services/unlink-th/page.mdx"
  "app/blog/[slug]/page.tsx"
  "app/blog/page.tsx"
  "components/profile/Schema.tsx"
  "mdx-components.tsx"
  "tsconfig.json"
  "tailwind.config.ts"
  "package.json"
  "types/index.ts"
  "next.config.ts"
  "components.json"
  "lib/blog.ts"
  ".env"
)

# ===============================
# ✅ INITIALIZATION
# ===============================
rm -f "$OUTPUT_FILE"
echo "🚀 Initiating Full Context Scan for $PROJECT_DOMAIN ..."

{
  # ===============================
  # 🔹 FRONT MATTER METADATA (AEM / CMS READY)
  # ===============================
  echo "---"
  echo "title: \"Project Context Summary\""
  echo "description: \"Full context, architecture and code analysis for AEM DevWeb Platform\""
  echo "author: \"$AUTHOR\""
  echo "site: \"$PROJECT_URL\""
  echo "domain: \"$PROJECT_DOMAIN\""
  echo "projectName: \"$PROJECT_NAME\""
  echo "environment: \"$ENVIRONMENT\""
  echo "contentType: \"$CONTENT_TYPE\""
  echo "buildId: \"$BUILD_ID\""
  echo "generatedAt: \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\""
  echo "tags:"
  echo "  - aem"
  echo "  - headless"
  echo "  - ai-context"
  echo "  - documentation"
  echo "  - security"
  echo "  - audit"
  echo "  - production"
  echo "---"
  echo ""

  echo "# 📑 Project Context Summary (Full Scan)"
  echo ""
  echo "> **Project:** $PROJECT_NAME"
  echo "> **Domain:** $PROJECT_DOMAIN"
  echo "> **URL:** $PROJECT_URL"
  echo "> **Environment:** $ENVIRONMENT"
  echo "> **Build:** $BUILD_ID"
  echo "> **Type:** Full System Context | AI Ready | AEM Ready | Security Focus"
  echo ""
  echo "_Generated on: **$(date '+%Y-%m-%d %H:%M:%S')**_"
  echo ""

  # ===============================
  # 🔴 1. PROJECT HEALTH
  # ===============================
  echo "## 🔴 1. Project Health & Deployment Readiness"

  if [ -f "$REPORT_FILE" ]; then
    if grep -q "### ✅ READY FOR DEPLOY" "$REPORT_FILE"; then
      echo "✅ **READY FOR DEPLOY** — Production standards satisfied."
    else
      echo "❌ **FIX REQUIRED** — Issues detected. Review Issues Highlight."
    fi
    echo ""

    if grep -q "### 📊 Route Statistics" "$REPORT_FILE"; then
      echo "### 📍 Production Route Map"
      echo '```text'
      sed -n '/### 📊 Route Statistics/,/---/p' "$REPORT_FILE" | \
        grep -v "###" | grep -v -- "---" | sed '/^$/d'
      echo '```'
    fi
  else
    echo "⚠️ \`$REPORT_FILE\` not found — run \`pre-deploy-check.sh\`"
  fi
  echo ""

  # ===============================
  # 📊 2. FILE STATISTICS
  # ===============================
  echo "## 📊 2. File Statistics by Extension"
  echo '```text'
  find "${WHITELIST_DIRS[@]}" -type f 2>/dev/null \
    | sed 's/.*\.//' | sort | uniq -c | sort -nr
  echo '```'
  echo ""

  # ===============================
  # 📁 3. ARCHITECTURE TREE
  # ===============================
  echo "## 📁 3. Directory Structure (Enterprise Architecture Tree)"
  echo '```text'
  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo "📂 $dir/"
      find "$dir" -maxdepth 5 -not -path '*/.*' | while read -r path; do
        depth=$(temp="${path//[^\/]/}"; echo "${#temp}")
        indent=$(printf '%*s' $((depth * 2)) "")
        name=$(basename "$path")
        if [ -d "$path" ]; then
          [[ "$path" != "$dir" ]] && echo "${indent}📂 $name/"
        else
          echo "${indent}📄 $name"
        fi
      done
    fi
  done
  echo '```'
  echo ""

  # ===============================
  # 📄 4. SOURCE CODE CONTEXT
  # ===============================
  echo "## 📄 4. Critical Code Analysis & Environment Context"

  for file in "${SCAN_FILES[@]}"; do
    if [ -f "$file" ]; then
      echo "#### 🔍 Path: \`$file\`"

      ext="${file##*.}"
      lang="text"
      case "$ext" in
        ts|tsx) lang="typescript" ;;
        js|mjs) lang="javascript" ;;
        json) lang="json" ;;
        md) lang="markdown" ;;
        css) lang="css" ;;
        sql) lang="sql" ;;
      esac

      echo '```'"$lang"
      if [[ "$file" == *".env"* ]]; then
        sed 's/=.*/= "********"/' "$file"
      elif [ "$file" = "package.json" ] && command -v jq >/dev/null 2>&1; then
        jq '{name, version, scripts, dependencies, devDependencies}' package.json
      else
        cat "$file"
      fi
      echo '```'
      echo "---"
      echo ""
    fi
  done

  # ===============================
  # 📝 SUMMARY
  # ===============================
  echo "## 📝 Summary"
  echo "- Full architecture and code context compiled"
  echo "- AEM ingestion ready"
  echo "- AI context ready"
  echo "- Documentation portal ready"
  echo "- Security & privacy focused"
  echo "- Production environment compliant"
  echo ""
  echo "_Report generated by $PROJECT_NAME Automation System_"
  echo "_Domain: $PROJECT_DOMAIN_"

} > "$OUTPUT_FILE"

echo "✅ Full Scan Complete!"
echo "📄 Report saved to → $OUTPUT_FILE"
echo "🌐 Ready for ingestion at → https://me.aemdevweb.com"