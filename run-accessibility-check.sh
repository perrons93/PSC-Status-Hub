#!/bin/bash
# Script to run the Accessibility Check locally
# Constants to add colour to text
BLUE='\033[0;34m'
NC='\033[0m' # No Color
# Build docker (can comment out if already built)
docker-compose build
printf "*** ${BLUE}Begin Accessibility Check${NC} ***\n"
pa11y localhost --config ./pa11y.json --include-notices --include-warnings --reporter html > reports/accessibility_check.html
printf "Accessibility report saved at reports/accessibility_check.html\n"
printf "*** Complete Accessibility Check ***\n"
