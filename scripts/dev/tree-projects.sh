#!/bin/bash

# ==============================================================================
# PROJECT: me.aemdevweb.com (Authority Domain)
# PURPOSE: Personal Brand Context, Architecture & Deployment Readiness Compilation
# VERSION: 2.2.1 (2026-01-23)
# IDENTITY: Alongkorl Yomkerd (นายเอ็มซ่ามากส์)
# ==============================================================================

# CONFIGURATION
OUTPUT_FILE="project-structure.md"
PRE_DEPLOY_REPORT="pre-deploy-report.md"

# Next.js 16 System File Conventions
MDX_FILES=("mdx-components.tsx" "mdx-components.js")
CONFIG_FILES=("next.config.ts" "next.config.mjs" "next.config.js")
EDGE_FILES=("proxy.ts" "middleware.ts" "instrumentation.ts")

SITE_URL="https://me.aemdevweb.com/"
AUTHOR="Alongkorl Yomkerd"
PROJECT_TYPE="Personal Brand & Knowledge Base (Authority)"
ENVIRONMENT="pre-deploy"
BUILD_ID=$(git rev-parse --short HEAD 2>/dev/null || echo "local")
GENERATED_AT=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

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

# INITIALIZATION
rm -f "$OUTPUT_FILE"
echo "[INFO] Scanning project architecture for $SITE_URL..."

{
  # YAML FRONT MATTER (Optimized for Machine Learning & Documentation)
  cat <<EOF
---
title: "Project Structure Report (Authority Domain)"
description: "Architecture, MDX mapping, and pre-deploy status for personal branding network"
author: "$AUTHOR"
site: "$SITE_URL"
projectType: "$PROJECT_TYPE"
environment: "$ENVIRONMENT"
buildId: "$BUILD_ID"
generatedAt: "$GENERATED_AT"
contentType: "documentation"
tags:
  - project-structure
  - nextjs-16
  - authority-domain
  - eeat-strategy
---

# Project Structure Report (Extended Scan)
Generated: $(date)

> Site: $SITE_URL
> Identity: นายเอ็มซ่ามากส์ (Person Entity)
> Purpose: Knowledge Base & Trust Foundation
> Build ID: $BUILD_ID

EOF

  # 1. DIRECTORY ARCHITECTURE (Tree Representation)
  echo "## 1. Directory Architecture"
  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo ""
      echo "dir: $dir/"
      find "$dir" -maxdepth 5 -not -path '*/.*' | sed -e 's/[^-][^\/]*\//  |/g' -e 's/|  /   /g'
    else
      echo ""
      echo "[WARN] Directory not found: $dir"
    fi
  done

  # 2. PACKAGE AND DEPENDENCY OVERVIEW
  echo ""
  echo "## 2. Dependencies and Scripts (package.json)"
  echo '```json'
  if [ -f "package.json" ]; then
    if command -v jq >/dev/null 2>&1; then
      jq '{name, version, scripts, dependencies, devDependencies}' package.json
    else
      cat package.json
    fi
  else
    echo "{\"error\": \"package.json not found\"}"
  fi
  echo '```'

  # 3. MDX AND RENDERING ANALYSIS
  echo ""
  echo "## 3. MDX Rendering Logic"
  FOUND_MDX=false
  for f in "${MDX_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "File found: $f"
      echo '```typescript'
      cat "$f"
      echo '```'
      FOUND_MDX=true
      break
    fi
  done
  [ "$FOUND_MDX" = false ] && echo "Status: mdx-components file not found (Check mdx-components.tsx)"

  # 4. RUNTIME AND EDGE CONFIGURATION (Next.js 16)
  echo ""
  echo "## 4. Next.js Runtime and Edge Configuration"
  
  # Scan Core Config
  for f in "${CONFIG_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "Status: Core configuration detected ($f)"
      echo '```typescript'
      cat "$f"
      echo '```'
      break
    fi
  done

  # Scan Edge/Startup Files
  for f in "${EDGE_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "Status: Edge/Startup logic detected ($f)"
      echo '```typescript'
      cat "$f"
      echo '```'
    fi
  done

  # 5. PRE-DEPLOY INTEGRITY ANALYSIS
  echo ""
  echo "## 5. Pre-Deploy Integrity Analysis"
  echo "---"
  if [ -f "$PRE_DEPLOY_REPORT" ]; then
    if grep -qi "READY FOR DEPLOY" "$PRE_DEPLOY_REPORT"; then
      echo "Verdict: READY FOR DEPLOY"
    else
      echo "Verdict: FIX REQUIRED (Manual intervention needed)"
    fi

    if grep -q "###.*Route" "$PRE_DEPLOY_REPORT"; then
      echo "### Production Route Map (From Report)"
      echo '```text'
      sed -n '/###.*Route/,/---/p' "$PRE_DEPLOY_REPORT" | grep -vE "###|---" | sed '/^$/d'
      echo '```'
    fi

    echo "### Critical Issues Highlight"
    ISSUES=$(grep -E "ERR|FAIL|WARN|error|warning|failed" "$PRE_DEPLOY_REPORT" | grep -v "dir:")
    if [ -z "$ISSUES" ]; then
      echo "Status: No critical impediments detected in the latest audit."
    else
      echo "$ISSUES"
    fi
  else
    echo "[WARN] pre-deploy-report.md not found. Architecture scan completed without health metrics."
  fi

  echo ""
  echo "---"
  echo "Status: Scan completed successfully."
  echo "Scope: Personal Authority Domain Architecture Audit"

} > "$OUTPUT_FILE"

echo "[SUCCESS] Scan completed -> $OUTPUT_FILE"
