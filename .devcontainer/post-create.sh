#!/usr/bin/env bash
set -euo pipefail

cd /workspace/thex-score

corepack pnpm install --frozen-lockfile --ignore-scripts --force 
corepack pnpm exec nuxt prepare

gpgconf --kill all || true
