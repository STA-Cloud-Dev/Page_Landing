# Site structure update — 2026-11-16

- `/`: hero, service categories, featured hosting, short benefits, links to region/free pages and five native FAQ disclosures. No full pricing catalog or world map is mounted on the homepage. Mobile emphasizes Dev 3; desktop shows Free DEV, Dev 3 and Game Servers 1. No bestseller claim is made.
- `/pricing/`: own STA Cloud plans, filters and a collapsible comparison table. Render all plans in initial HTML; client filters refine the view. Oracle products do not belong to this catalog.
- `/free-server/`: existing canonical URL retained; focuses on Node Test, Free DEV, Free Gamming + AI, OpenClaw and free-service rules. Old `#plans`, `#free-hosting`, `#openclaw` and `#service-rules` anchors remain useful.
- `/network/`: existing region map, filters, clusters, separately listed Hanoi/HCMC and random simulated latency. Region names are present in initial HTML through the lightweight catalog.
- `/vps/`: ICS referral products grouped into Tiêu chuẩn (Starter), Cao cấp (Professional), Doanh nghiệp (Enterprise) and AI/GPU. ICS remains the provider; customers can buy directly from ICS or contact STA Cloud. `/vps-hosting/` is a legacy static redirect fallback with canonical to `/vps/` and noindex; an edge 301 is preferred when available.
- `/about/`, `/history/`, `/egg/`, policy pages and 404 remain at their existing URLs. Reduced-motion and mobile static effects remain respected.

Main navigation, footer, legal page back links, Egg pricing links and mobile dock now point to the dedicated pricing/network routes. Existing homepage fragments (`#plans`, `#network`, `#free-hosting`, `#openclaw`, `#benefits`, `#faq`, `#policies`) remain present as summaries so old backlinks are not broken. No catch-all redirect was added. Native bottom-sheet mobile menu keeps Escape, focus trap and focus restoration plus Discord/Zalo/Messenger.

Sitemap XML and plain text are generated from the same 15 canonical URLs. `llms.txt` and About page links follow the new route purposes. Checks include canonical/indexability for all 15 pages, current Dev 3 specs, own-plan versus ICS separation, crawlable region names and legacy home anchors. A local HTML link audit found no unresolved internal page or fragment targets in exported pages.

Mobile 390px verified without horizontal overflow; Dev filter returns five current plans; bottom sheet opened and closed. Browser automation later encountered an extension UI blocker; do not claim unperformed device/browser checks. Production deployment, PageSpeed and Search Console results must be reported from observed results.
