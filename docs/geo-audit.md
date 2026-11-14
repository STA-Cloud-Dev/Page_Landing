# GEO / AI search review — 2026-11-14

## Scope and evidence

- Public canonical domain: https://stacloud.eu.cc/. Existing HTML contains Organization, WebSite, WebPage and Service structured data. These were already useful SEO/GEO foundations before this update.
- Added `/about/`: visible, server-rendered brand identity, official links, service definitions, hosting versus VPS distinction, region/slot limitations, FREE plans and Dev comparison table. Source dates are stated separately: owner updates 2026-11-12; Oracle pricing snapshot 2026-11-09; region snapshot 2026-11-11. The page review date is 2026-11-14, not a claim that external prices were fetched again.
- Added optional `/llms.txt` built from the same factual summaries and canonical public links. It is a convenience index, not an AI indexing requirement or a ranking guarantee; no private server/account links are listed.
- Added Service/OfferCatalog markup to `/vps-hosting/`, generated from the same plan data as the visible 19 VPS cards. Monthly VND prices explicitly exclude VAT; no invented availability, reviews, ratings, partnership claims, certifications, address or corporate registration details.
- Homepage and shared footer link the new factual page. Sitemap contains 13 HTML pages; plain text index is not included as a web page.
- `seo:check` verifies indexability, canonical URLs, visible schema offers/prices, monthly units, VAT flag, AboutPage identity and the text index.
- Live audit on 2026-11-14: robots.txt returned 200 with no X-Robots-Tag; Cloudflare managed content had returned (`search=yes,ai-train=no`) with Disallow for GPTBot/ClaudeBot/Google-Extended and other named crawlers. Googlebot, OAI-SearchBot, ChatGPT-User and PerplexityBot were not named in those restrictions and inherit `User-agent: * / Allow: /`. This is a robots policy observation, not proof of real verified-bot firewall access. No Cloudflare/privacy setting was changed as part of this content update.

## Official guidance used

- https://developers.google.com/search/docs/appearance/ai-features — normal SEO remains applicable; no special AI schema or text file is required for AI Overviews/AI Mode. Structured data should match visible text. Googlebot access controls Google Search AI feature crawling; Google-Extended serves a different purpose.
- https://developers.openai.com/api/docs/bots — OAI-SearchBot is used for search discovery, GPTBot for training, ChatGPT-User for user-triggered access. A browser or spoofed User-Agent success does not verify the identity or future access of the real bot.

## Honest limits and follow-up

PageSpeed SEO 100 is a technical audit result, not proof of AI citations or Google indexing. No AI recommendation, rich result or position is guaranteed. Keep dates/prices aligned when plans change. Monitor branded and service queries, Search Console indexing/canonical choices, actual AI referrals if analytics is available, and verified crawler events. No automated messages, fabricated mentions or paid promotion were created in this work.

The region map uses simulated ping and illustrative city coordinates. Published Oracle regions do not assert that STA Cloud has stock everywhere. Linux Egg/container hosting does not imply root access to the host or a full VPS.

## Performance gate

No new client library, analytics script, remote font or animation was introduced. The new About page is a server-rendered document; the homepage addition is a short explanation and internal link. Existing inline CSS performance optimization is retained. Run production build, `npm run seo:check`, `npm audit`, and a fresh mobile PageSpeed measurement after deployment. Record measured results rather than assuming the previous 100 score is permanent.
