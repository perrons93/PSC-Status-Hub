#!/bin/bash
# Script to run the Accessibility Check locally
# Constants to add colour to text
BLUE='\033[0;34m'
NC='\033[0m' # No Color
# Build docker (can comment out if already built)
# docker-compose build
printf "*** ${BLUE}Begin Accessibility Check${NC} ***\n"
# printf "Home Page Report:\n"
# pa11y localhost --config ./pa11y.json --include-notices --include-warnings --reporter html > reports/home_page_accessibility_check.html
# printf "Accessibility reports saved at reports/home_page_accessibility_check.html\n"
# printf "Prototype Page Report:\n"
# pa11y localhost/prototype --config ./pa11y.json --include-notices --include-warnings --reporter html > reports/prototype_page_accessibility_check.html
# printf "Accessibility reports saved at reports/prototype_page_accessibility_check.html\n"
# printf "Status Page Report:\n"
# pa11y localhost/status --config ./pa11y.json --include-notices --include-warnings --reporter html > reports/status_page_accessibility_check.html
# printf "Accessibility reports saved at reports/status_page_accessibility_check.html\n"
printf "eMIB Sample Test Page Report:\n"
pa11y localhost/emib-sample --config ./pa11y.json --include-notices --include-warnings --reporter html > reports/emib-sample_page_accessibility_check.html
printf "Accessibility reports saved at reports/emib-sample_page_accessibility_check.html\n"
printf "*** Complete Accessibility Check ***\n"
