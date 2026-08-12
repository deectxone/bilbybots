#!/usr/bin/env bash
# Copy the local .env values into Vercel as project environment variables.
#
# Usage:
#   1. npm i -g vercel  (or npx vercel)
#   2. vercel login
#   3. From the repo root: vercel link   (first time — points this dir at a project)
#   4. bash apps/mobile/scripts/vercel-env.sh
#
# This reads every EXPO_PUBLIC_* var from apps/mobile/.env and adds it to
# Vercel for the production + preview + development scopes. Vercel injects
# them at build time, and Metro inlines them into the web bundle (they are
# client-safe — no service_role / secrets are ever passed).
set -euo pipefail

# Resolve the repo root (one level up from this script's directory).
REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"

ENV_FILE="$REPO_ROOT/apps/mobile/.env"
if [ ! -f "$ENV_FILE" ]; then
  echo "error: $ENV_FILE not found. cp .env.example .env and fill it in first." >&2
  exit 1
fi

VERCEL="${VERCEL:-vercel}"
if ! command -v "$VERCEL" >/dev/null 2>&1; then
  echo "error: vercel CLI not found. Run: npm i -g vercel" >&2
  exit 1
fi

grep -E '^EXPO_PUBLIC_[A-Z_]+=.' "$ENV_FILE" | while IFS='=' read -r key value; do
  echo "== $key =="
  # stdin-pipe the value so vercel doesn't prompt interactively
  printf '%s' "$value" | "$VERCEL" env add "$key" production
  printf '%s' "$value" | "$VERCEL" env add "$key" preview
  printf '%s' "$value" | "$VERCEL" env add "$key" development
done

echo
echo "Done. Deploy with: vercel --prod"
