#!/usr/bin/env bash
#
# giant_markdown.sh
#
# Usage:
#   sh giant_markdown.sh . 
#   sh giant_markdown.sh path/to/codebase
#
# Description:
#   Creates a single Markdown file (GiantCodebase.md) that contains the contents of all
#   frontend code files in the provided directory (which should be a Git repository).
#   Only includes .ts, .tsx, .js, .jsx, .css, and .html files.

# Use the first argument as the target directory, default to current directory if not provided.
TARGET_DIR="${1:-.}"

# Check if the directory exists.
if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Directory '$TARGET_DIR' does not exist."
    exit 1
fi

# Change to the target directory.
cd "$TARGET_DIR" || { echo "Error: Unable to change directory to '$TARGET_DIR'."; exit 1; }

OUTPUT_FILE="GiantCodebase.md"

# Start fresh: create/overwrite the output file.
echo "# Giant Codebase" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Find all relevant files, excluding node_modules and common ignored paths
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.css" -o -name "*.html" \) \
    -not -path "*/node_modules/*" \
    -not -path "*/venv/*" \
    -not -path "*/.env*" \
    -not -path "*/nohup.out" \
    -not -path "*/package.json" \
    -not -path "*/package-lock.json" \
    -not -path "*/dist/*" \
    -not -path "*/build/*" \
    -not -path "*/.next/*" \
    -not -path "*/.cache/*" \
    -not -path "*/coverage/*" | while read -r FILE; do
    
    # Add the file name as a section heading.
    echo "## $FILE" >> "$OUTPUT_FILE"
    echo '```' >> "$OUTPUT_FILE"
    
    # Append the file contents.
    cat "$FILE" >> "$OUTPUT_FILE"
    
    echo '```' >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
done

echo "Done! Created $OUTPUT_FILE containing frontend code in $(pwd)."
