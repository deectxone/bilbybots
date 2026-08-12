#!/usr/bin/env node
/**
 * Post-build SEO injection for the static web export.
 *
 * Expo's static export writes a minimal `dist/index.html` (title + favicon
 * only). This script injects the full SEO head — title, description, OG,
 * Twitter, canonical, theme-color, favicon + JSON-LD structured data — and
 * verifies the `public/` assets (robots.txt, sitemap.xml, og-image) made it
 * into the output.
 *
 * Run after `expo export --platform web` (wired into `build:web`).
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const indexHtml = join(dist, 'index.html');

const SITE = 'https://bilbybots.com';

const meta = `
  <meta name="description" content="BilbyBots gives Australian students in Years 1–10 a smarter weekly learning plan aligned to the Australian Curriculum, with NAPLAN-style practice. Sign in with Google to get started." />
  <link rel="canonical" href="${SITE}/" />
  <meta name="theme-color" content="#5B21B6" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="BilbyBots" />
  <meta property="og:title" content="BilbyBots — A smarter weekly learning plan for Australian kids" />
  <meta property="og:description" content="Weekly learning plans for Years 1–10 aligned to the Australian Curriculum, plus original NAPLAN-style practice tests. Parent-managed and safe for kids." />
  <meta property="og:url" content="${SITE}/" />
  <meta property="og:image" content="${SITE}/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_AU" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BilbyBots — A smarter weekly learning plan for Australian kids" />
  <meta name="twitter:description" content="Weekly learning plans for Years 1–10 aligned to the Australian Curriculum, plus original NAPLAN-style practice tests." />
  <meta name="twitter:image" content="${SITE}/og-image.jpg" />

  <!-- Structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BilbyBots",
    "url": "${SITE}/",
    "description": "A smarter weekly learning plan for Australian students in Years 1–10, aligned to the Australian Curriculum with NAPLAN-style practice.",
    "inLanguage": "en-AU",
    "publisher": { "@type": "Organization", "name": "BilbyBots" }
  }
  </script>
`;

function fail(msg) {
  console.error(`[seo] ERROR: ${msg}`);
  process.exitCode = 1;
}

if (!existsSync(indexHtml)) {
  fail(`dist/index.html not found at ${indexHtml} — run 'expo export --platform web' first.`);
} else {
  let html = readFileSync(indexHtml, 'utf8');

  // Ensure <title> is set and meaningful.
  html = html.replace(/<title>[^<]*<\/title>/, '<title>BilbyBots — A smarter weekly learning plan for Australian kids</title>');

  // Insert meta block right after the opening <head>.
  if (!html.includes('og:title')) {
    html = html.replace('<head>', '<head>\n' + meta);
  }

  writeFileSync(indexHtml, html);
  console.log('[seo] injected SEO head into dist/index.html');
}

// Verify public/ assets landed in dist/.
for (const asset of ['robots.txt', 'sitemap.xml', 'og-image.jpg']) {
  const p = join(dist, asset);
  console.log(`[seo] ${existsSync(p) ? 'OK  ' : 'MISS'} ${asset}`);
  if (!existsSync(p)) fail(`${asset} missing from dist/ — did Expo copy the public/ folder?`);
}

if (!process.exitCode) console.log('[seo] done.');
