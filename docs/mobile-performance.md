# Mobile performance follow-up

Source report: https://pagespeed.web.dev/analysis/https-stacloud-eu-cc/8ad8yef3i6?form_factor=mobile

The 30 October 2026 report scores Performance 92, Accessibility 100, Best Practices
100 and SEO 100. LCP is the `#hero-title` text, with 2,350 ms element render delay;
FCP 1.7 s, LCP 2.9 s, Speed Index 4.3 s, TBT 10 ms, CLS 0.

## Repository changes

- Replace the two full TTF files (246,456 bytes combined) with WOFF2 (74,292
  bytes). Both font weights retain all 459 original Unicode mappings, including
  Vietnamese. The existing OFL license remains with the assets.
- Keep the Hero heading rendered in HTML. Load its decorative particle module
  only when its container enters the viewport, after two paint opportunities and
  an idle callback. Reserve the same dimensions while loading.
- Remove the unused WebGL fallback CSS. The site currently renders particles
  with Canvas 2D and needs no WebGL runtime.
- Mount the 17 detailed homepage cards on the first opening of the native
  details control. The three featured plans remain in the initial HTML; a normal
  link leads to `/free-server/#plans`, whose full catalog remains server-rendered
  and works without JavaScript.

## Hosting cache warning

PageSpeed observed a 10-minute browser TTL for versioned Next.js assets. The local
Node server already sends a one-year immutable cache header for `/_next/static/`.
GitHub Pages does not apply the repository's `public/_headers` file; changing that
file will not fix the live site's browser cache.

In the domain's Cloudflare dashboard, review Cache Rules / Browser Cache TTL and
any response-header rules. A rule restricted to versioned assets can use:

```text
Host: stacloud.eu.cc
Path starts with: /_next/static/
Browser TTL: 1 year
Edge TTL: 1 year
```

Keep HTML, sitemap and robots outside that long-lived rule so a deployment can
publish updated content immediately. Confirm the actual response's Cache-Control
header after applying the rule. No Cloudflare configuration was changed in this
repository update.

## Validation

Local Chromium comparison, cache disabled, 412 x 823 mobile emulation, CPU 4x
slowdown, network latency 150 ms and download 200,000 bytes/s:

| Metric | Before | After |
| --- | ---: | ---: |
| LCP (`#hero-title`) | 4,036 ms | 3,580 ms |
| Initial DOM elements | 1,167 | 677 |
| Encoded font bytes on the uncompressed local server | 246,456 | 74,292 |

These are individual local samples, not Lighthouse scores or production field
data. The local server transfers assets without the production CDN's compression.
Verified production build/TypeScript, mobile menu, expansion of all 17 plans,
Dev filter returning three plans, no horizontal overflow at 375px, and no captured
browser console errors.

Run `npm run build`, check mobile and desktop layout, verify the font resources
end in `.woff2`, and rerun PageSpeed on the deployed commit. A localhost test is
useful for before/after comparisons but is not a replacement for a new PageSpeed
report on the public URL. Lighthouse SEO 100 verifies basic technical audits;
it does not guarantee search ranking or successful indexing.

## Follow-up to the 95-point report

Report: https://pagespeed.web.dev/analysis/https-stacloud-eu-cc/z6xthuefsq?form_factor=mobile

This run reports FCP 1.7 s, LCP 2.7 s, TBT 30 ms, CLS 0 and Speed Index 2.9 s.
The LCP remains the Hero heading, with 1,330 ms element render delay.

Further changes:

- Use `font-display: optional` without font preloads. Slow connections keep the
  adjusted fallback font for that visit rather than delaying or repainting the
  heading. Cached or promptly available brand fonts still render normally.
- Move 10,557 characters of Free Server illustration CSS out of the root CSS
  into the Free Server route, retaining mobile and reduced-motion overrides.
- Enable Next.js `experimental.inlineCss` for the static export. This removes
  the render-blocking stylesheet request. It is an experimental Next.js option:
  recheck the static export after framework upgrades. Styles now travel with each
  HTML document instead of benefiting from a separately cached stylesheet. Next
  also duplicates styles in the RSC payload; the homepage HTML is about 76 KB
  gzipped. This is a deliberate first-render versus repeat-navigation tradeoff.

In the same local mobile setup described above, optional fonts and CSS splitting
gave LCP 3,204 ms; additionally inlining CSS gave FCP 736 ms and LCP 756 ms, with
CLS 0.000045 (rounds to 0 at report precision). These are individual local
samples, not a verified new PageSpeed score. Verified mobile menu, 375px and
1280px layouts without horizontal overflow, Free Server illustration styles,
404 heading, all exported routes' inline styles, H1 and canonical markup, and
no captured browser errors. Build and TypeScript pass.
