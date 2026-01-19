#!/bin/bash

# ===============================
# === CONFIG / METADATA =========
# ===============================
REPORT_FILE="pre-deploy-report.md"
TIMESTAMP_UTC=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
TIMESTAMP_LOCAL=$(date '+%Y-%m-%d %H:%M:%S')

SITE_URL="https://me.aemdevweb.com"
AUTHOR="Auto Pre-deploy Inspector"
PROJECT_NAME="UnlinkTH"
PROJECT_TYPE="Web Application"
ENVIRONMENT="pre-deploy"
BUILD_ID=$(git rev-parse --short HEAD 2>/dev/null || echo "local")
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "N/A")

# ===============================
# === CLEAN OLD REPORT ==========
# ===============================
if [ -f "$REPORT_FILE" ]; then
    rm "$REPORT_FILE"
    echo "🗑️  Old report removed."
fi

echo "🔍 Starting $PROJECT_NAME Pre-deploy Inspection..."

# ===============================
# === FRONT MATTER METADATA =====
# ===============================
{
echo "---"
echo "title: \"Pre-deploy Inspection Report\""
echo "project: \"$PROJECT_NAME\""
echo "projectType: \"$PROJECT_TYPE\""
echo "environment: \"$ENVIRONMENT\""
echo "site: \"$SITE_URL\""
echo "author: \"$AUTHOR\""
echo "branch: \"$BRANCH\""
echo "buildId: \"$BUILD_ID\""
echo "generatedAt: \"$TIMESTAMP_UTC\""
echo "contentType: \"pre-deploy-report\""
echo "tags:"
echo "  - pre-deploy"
echo "  - nextjs"
echo "  - aem"
echo "  - headless"
echo "  - automation"
echo "---"
echo ""
echo "# 🚀 Pre-deploy Inspection Report"
echo ""
echo "- **Generated:** $TIMESTAMP_LOCAL"
echo "- **Branch:** $BRANCH"
echo "- **Build ID:** $BUILD_ID"
echo "- **Target Site:** $SITE_URL"
echo ""
} > "$REPORT_FILE"

# ===============================
# === AUTO FIX ==================
# ===============================
echo "🛠️  Attempting to Auto-fix Linting issues..."
echo "## 🛠️  1. Auto-Fix Procedure" >> $REPORT_FILE

pnpm lint --fix > fix_output.txt 2>&1
FIX_EXIT_CODE=$?

if [ $FIX_EXIT_CODE -eq 0 ]; then
    echo "✅ Status: Auto-fix completed or no issues found." >> $REPORT_FILE
else
    echo "⚠️  Note: Some issues could not be fixed automatically." >> $REPORT_FILE
fi
rm fix_output.txt

# ===============================
# === LINT CHECK ================
# ===============================
echo "🧹 Running Final Linting Check..."
echo "## 🧹 2. Code Linting (ESLint)" >> $REPORT_FILE

pnpm lint > lint_output.txt 2>&1
LINT_EXIT_CODE=$?

if [ $LINT_EXIT_CODE -eq 0 ]; then
    echo "✅ Status: Linting passed." >> $REPORT_FILE
else
    echo "❌ Status: Linting failed." | tee -a $REPORT_FILE
    echo "### 🔍 Remaining Linting Errors:" >> $REPORT_FILE
    echo "\`\`\`bash" >> $REPORT_FILE
    cat lint_output.txt >> $REPORT_FILE
    echo "\`\`\`" >> $REPORT_FILE
fi
rm lint_output.txt

# ===============================
# === TYPE CHECK ================
# ===============================
echo "⌨️ Checking Types..."
echo "## ⌨️ 3. Type Safety Check" >> $REPORT_FILE

pnpm type-check > type_output.txt 2>&1
TYPE_EXIT_CODE=$?

if [ $TYPE_EXIT_CODE -eq 0 ]; then
    echo "✅ Status: TypeScript verified." >> $REPORT_FILE
else
    echo "❌ Status: Type errors detected!" | tee -a $REPORT_FILE
    echo "### 🔍 TypeScript Errors:" >> $REPORT_FILE
    echo "\`\`\`bash" >> $REPORT_FILE
    cat type_output.txt >> $REPORT_FILE
    echo "\`\`\`" >> $REPORT_FILE
fi
rm type_output.txt

# ===============================
# === BUILD CHECK ===============
# ===============================
echo "🏗️  Executing Production Build..."
echo "## 🏗️  4. Production Build Test" >> $REPORT_FILE

pnpm run build 2>&1 | tee build_output.txt
BUILD_EXIT_CODE=${PIPESTATUS[0]}

if [ $BUILD_EXIT_CODE -eq 0 ]; then
    echo "✅ Status: Build successfully optimized." >> $REPORT_FILE
    echo "### 📊 Route Statistics & Bundle Size" >> $REPORT_FILE
    echo "\`\`\`text" >> $REPORT_FILE
    sed -n '/Route (app)/,$p' build_output.txt >> $REPORT_FILE
    echo "\`\`\`" >> $REPORT_FILE
else
    echo "❌ Status: Build failed!" | tee -a $REPORT_FILE
    echo "### 🔍 Build Logs (Failure Analysis):" >> $REPORT_FILE
    echo "\`\`\`bash" >> $REPORT_FILE
    tail -n 50 build_output.txt >> $REPORT_FILE
    echo "\`\`\`" >> $REPORT_FILE
fi
rm build_output.txt

# ===============================
# === FINAL SUMMARY =============
# ===============================
echo "" >> $REPORT_FILE
echo "---" >> $REPORT_FILE
echo "## 🏆 Summary Result" >> $REPORT_FILE

if [ $LINT_EXIT_CODE -eq 0 ] && [ $TYPE_EXIT_CODE -eq 0 ] && [ $BUILD_EXIT_CODE -eq 0 ]; then
    echo "### ✅ READY FOR DEPLOY" >> $REPORT_FILE
    echo "All protocols verified: Lint passed, Types safe, and Build successful." >> $REPORT_FILE
    echo "Deployment is approved for **$SITE_URL**." >> $REPORT_FILE
else
    echo "### 🚫 FIX REQUIRED BEFORE DEPLOY" >> $REPORT_FILE
    echo "Please resolve the errors in the failed stages above." >> $REPORT_FILE
fi

echo "🚀 Inspection complete. Full report generated → $REPORT_FILE"
echo "🌐 Target Site → $SITE_URL"