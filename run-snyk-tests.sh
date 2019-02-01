#!/bin/bash
# Constants to add colour to text
BLUE='\033[0;34m'
NC='\033[0m' # No Color
# Build docker (can comment out if already built)
docker build -t backend_snyk_test backend/
docker build -t frontend_snyk_test frontend/
# Test the backened
printf "**** ${BLUE}Begin backend snyk tests${NC} ***\n"
snyk test --docker backend_snyk_test --file=backend/Dockerfile
printf "**** Complete backend snyk tests ***\n"
# Test the frontend
printf "**** ${BLUE}Begin frontend snyk tests${NC} ***\n"
snyk test --docker frontend_snyk_test --file=frontend/Dockerfile
printf "**** Complete frontend snyk tests ***\n"
