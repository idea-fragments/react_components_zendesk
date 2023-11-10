#!/bin/sh

echo "============================"
echo "PRECOMMIT - RUNNING PRETTIER"

FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g')
echo "MODIFIED FILES: ${FILES}"

[ -z "$FILES" ] && exit 0

# Prettify all selected files
echo "$FILES" | xargs ./node_modules/.bin/prettier --ignore-unknown --write

# Add back the modified/prettified files to staging
echo "$FILES" | xargs git add
echo "PRECOMMIT - RUNNING PRETTIER COMPLETE"
echo "============================"
exit 0

