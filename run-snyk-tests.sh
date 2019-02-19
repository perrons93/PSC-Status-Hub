#!/bin/bash
# Script to run Snyk locally
# Constants to add colour to text
BLUE='\033[0;34m'
NC='\033[0m' # No Color
# Build docker (can comment out if already built)
docker-compose build
# Test the backened
printf "**** ${BLUE}Begin backend snyk tests${NC} ***\n"
cd backend/
pip install -r requirements.txt
cd .. 
snyk test backend/ --json | snyk-to-html -o reports/snyk_results_backend.html
printf "**** Complete backend snyk tests ***\n"
# Test the frontend
printf "**** ${BLUE}Begin frontend snyk tests${NC} ***\n"
snyk test frontend/ --json | snyk-to-html -o reports/snyk_results_frontend.html
printf "**** Complete frontend snyk tests ***\n"
