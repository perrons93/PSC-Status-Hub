#!/bin/bash
# Script to run the Accessibility Check locally
# Constants to add colour to text
BLUE='\033[0;34m'
NC='\033[0m' # No Color
# Build docker (can comment out if already built)
docker-compose build
# Test the backened
printf "*** ${BLUE}Begin Accessibility Check${NC} ***\n"
pa11y localhost --config ./pa11y.json --include-notices --include-warnings --reporter html > accessibility_check_report.html
printf "\n"
printf " ==> A report called 'accessibility_check_report.html' has been created under './project-thundercat/' <==\n\n"
printf "*** Complete Accessibility Check ***\n"
