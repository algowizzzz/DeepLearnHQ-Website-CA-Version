/** @type {import('next').NextConfig} */
const nextConfig = {
  // Found by testing locally, not assumed: Next's default trailing-slash
  // behavior auto-redirects (308) BEFORE any rewrite rule gets a chance to
  // match. A blanket `trailingSlash: true` would fix /blogs/ and /tools/ but
  // break /bootcamp (and every other no-slash app route) by forcing an
  // identical redirect hop on them instead — exactly the kind of hop the
  // migration plan flags as costly for ad traffic. skipTrailingSlashRedirect
  // disables Next's automatic normalization entirely, so the explicit
  // trailing-slash rewrites below can match /blogs/<slug>/ and
  // /tools/<slug>/ directly while every other route (including /bootcamp)
  // keeps working with no slash and no redirect, exactly as defined.
  skipTrailingSlashRedirect: true,
  // vercel.json keeps the CSP/HSTS headers and the 43 legacy redirects —
  // Vercel honors both vercel.json and Next's own config, and headers/
  // redirects aren't duplicated here to avoid two sources of truth.
  //
  // These rewrites exist because the clean-URL pattern /blogs/<slug>/ and
  // /tools/<slug>/ -> .../index.html is a Vercel *static-hosting* directory
  // convention, not something Next's public/ folder does on its own. Without
  // these, all 46 blog posts and 3 /tools/ pages (both real, cross-linked
  // SEO surface) would 404 once Next.js owns routing. Verified against a
  // live Preview deployment, not just `next dev` — see migration plan.
  async rewrites() {
    return [
      { source: "/blogs", destination: "/blogs/index.html" },
      { source: "/blogs/", destination: "/blogs/index.html" },
      { source: "/blogs/:slug/", destination: "/blogs/:slug/index.html" },
      { source: "/tools/:slug/", destination: "/tools/:slug/index.html" },
    ];
  },
};

module.exports = nextConfig;
