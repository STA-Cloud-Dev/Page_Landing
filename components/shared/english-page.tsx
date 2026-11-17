import { SiteShell } from "./site-shell";
import { ImmersiveHero } from "@/components/home/immersive-hero";
import { PricingCatalog } from "@/components/pricing/catalog";
import { OracleCatalog } from "./oracle-catalog";
import { FreeHosting } from "./free-hosting";
import { EggPage } from "@/components/egg/page";
import { LegalPage } from "@/components/legal/legal-page";
import { ContactLinks } from "./contact-links";
import { LazyNetworkMap } from "@/components/visual/lazy-network-map";
import { hostingPlans } from "@/lib/i18n/plans";
import { freePlans } from "./free-plans";
import { paidPlans } from "./paid-plans";
import { siteUrl } from "@/lib/site-seo";
import { localizedPath, type PublicPage } from "@/lib/i18n/config";
import legal from "@/lib/i18n/dictionaries/legal-en.json";
const href = (path: string) => localizedPath(path, "en");
function EnglishHome() {
  const plans = hostingPlans("en").filter((p) =>
    ["free-dev", "dev-3", "game-servers-1"].includes(p.id),
  );
  return (
    <SiteShell home>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: "STACloud",
                alternateName: ["STA Cloud", "STA Cloud Hosting"],
                url: `${siteUrl}/`,
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/en/#website`,
                url: `${siteUrl}/en/`,
                name: "STACloud",
                inLanguage: "en",
                publisher: { "@id": `${siteUrl}/#organization` },
              },
              {
                "@type": "WebPage",
                "@id": `${siteUrl}/en/#webpage`,
                url: `${siteUrl}/en/`,
                name: "STA Cloud Hosting & VPS",
                inLanguage: "en",
                isPartOf: { "@id": `${siteUrl}/en/#website` },
              },
              ...freePlans
                .filter((p) => p.credit === 0)
                .map((p) => ({
                  "@type": "Service",
                  "@id": `${siteUrl}/en/#${p.id}`,
                  name: p.name,
                  provider: { "@id": `${siteUrl}/#organization` },
                  description: `Free Forever. ${p.cpu}% CPU, ${p.ram} MB RAM, ${p.disk} MB disk. No charges, free renewals, 5-day management cycle. Resources may change.`,
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "VND",
                    url: `${siteUrl}/en/free/`,
                  },
                })),
            ],
          }).replace(/</g, "\u003c"),
        }}
      />
      <ImmersiveHero locale="en" />
      <div className="page-container">
        <section id="free-hosting" className="scroll-mt-28 py-8">
          <h2 className="section-heading">
            Choose a service for your workload.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7">
            Hosting, Free Forever and game servers are STA Cloud services.
            Oracle Cloud VPS/GPU products are supplied by ICS and introduced by
            STA Cloud.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Hosting & development",
                "Website and Discord bot hosting with published CPU, memory, disk and renewal limits.",
                "/pricing/",
              ],
              [
                "Oracle VPS & GPU",
                "ICS Starter, Professional, Enterprise and AI/GPU products. Buy directly from ICS or ask us for advice.",
                "/vps/",
              ],
              [
                "Game server environments",
                "Minecraft, Linux, website and bot runtimes in the supported Egg catalog.",
                "/egg/",
              ],
            ].map(([name, desc, path]) => (
              <article className="service-card p-5" key={name}>
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="my-3 text-sm leading-7">{desc}</p>
                <a href={href(path)} className="action-link mt-auto">
                  Explore →
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="plans" className="scroll-mt-28 py-8">
          <h2 className="section-heading">Three ways to get started.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => (
              <article className="service-card p-5" key={p.id}>
                <p className="eyebrow">{p.badge}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{p.name}</h3>
                <p className="plan-price mt-4">{p.price}</p>
                <p className="text-sm">/ {p.period}</p>
                <ul className="my-4 space-y-2 text-sm">
                  {p.specs.slice(0, 3).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <a
                  className="button-primary mt-auto"
                  href={`${href("/pricing/")}#${p.id}`}
                >
                  View plan & conditions
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="benefits" className="scroll-mt-28 py-8">
          <h2 className="section-heading">Know what you are choosing.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="service-card p-5">
              <h3 className="font-bold text-white">Published resources</h3>
              <p className="mt-3 text-sm leading-7">
                Compare CPU, RAM and storage. Check renewal limits, availability
                and backup conditions before registering.
              </p>
            </article>
            <article className="service-card p-5">
              <h3 className="font-bold text-white">
                Official support channels
              </h3>
              <p className="mt-3 text-sm leading-7">
                Use our Portal and official Discord tickets. Zalo and Messenger
                are also available for advice.
              </p>
            </article>
          </div>
        </section>
        <section id="network" className="scroll-mt-28 py-8">
          <h2 className="section-heading">Closer to your users.</h2>
          <p className="mt-3 text-sm leading-7">
            Hanoi and Ho Chi Minh City are listed separately. Explore Singapore,
            Hong Kong and the Oracle region directory. Map ping is simulated;
            confirm actual availability.
          </p>
          <a className="action-link" href={href("/network/")}>
            Explore regions →
          </a>
        </section>
        <section id="openclaw" className="scroll-mt-28 py-8">
          <h2 className="section-heading">
            Free Forever hosting & OpenClaw Beta.
          </h2>
          <p className="mt-3 text-sm leading-7">
            Free DEV and Free Gamming + AI have no charge and free renewals.
            Resources may change. OpenClaw is a separate free beta with no
            personal domain required.
          </p>
          <a className="action-link" href={href("/free/")}>
            Free hosting & registration →
          </a>
        </section>
        <section id="faq" className="scroll-mt-28 py-8">
          <h2 className="section-heading">Before choosing a plan.</h2>
          <div className="mt-4 space-y-3">
            {[
              [
                "Is Free Forever really free?",
                "Free DEV and Free Gamming + AI cost 0 Credit with free renewals. The 5-day cycle is for management and renewal, not a paid trial. Verified accounts and available slots are required. Resources may change.",
              ],
              [
                "Is a Linux Egg a VPS?",
                "Linux Egg hosting runs in a container with plan limits. It does not automatically include administration of the host. Oracle VPS/GPU products are supplied separately by ICS.",
              ],
              [
                "Are all listed regions available?",
                "No. The map is an illustrative directory, not an inventory guarantee. Confirm the selected service, region and current availability before ordering.",
              ],
              [
                "Are backups included?",
                "FREE hosting has no backups or data recovery. Paid services have only their explicitly published backup benefits. Always maintain independent copies.",
              ],
              [
                "Where do I buy Oracle VPS/GPU?",
                "Buy directly at oci.ics.vn/cloud/pricing or contact STA Cloud for advice. ICS supplies those products and confirms availability, VAT and total cost.",
              ],
            ].map(([q, a]) => (
              <details
                className="rounded-xl border border-cyan-300/25 p-4"
                key={q}
              >
                <summary className="flex min-h-12 cursor-pointer items-center font-semibold text-white">
                  {q}
                </summary>
                <p className="mt-3 text-sm leading-7">{a}</p>
              </details>
            ))}
          </div>
        </section>
        <div id="policies" className="scroll-mt-28 py-6">
          <a className="action-link" href={href("/about/")}>
            Official STA Cloud facts →
          </a>
          <div className="mt-2 flex flex-wrap gap-5">
            {[
              ["terms", "Terms"],
              ["sla", "SLA"],
              ["security", "Security & backups"],
            ].map(([path, label]) => (
              <a className="action-link" key={path} href={href(path)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
function EnglishAbout() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/en/about/#webpage`,
        url: `${siteUrl}/en/about/`,
        name: "About STA Cloud",
        inLanguage: "en",
        mainEntity: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="page-container">
        <header className="page-heading">
          <p className="eyebrow">Official information</p>
          <h1>STA Cloud. Hosting for your next project.</h1>
          <p>
            STA Cloud, also known as STACloud and STA Cloud Hosting, provides
            website, Discord bot and game server hosting. Free Forever and Dev
            hosting are our own services. We introduce Oracle Cloud VPS/GPU
            products supplied by ICS.
          </p>
          <ContactLinks />
        </header>
        <section className="py-8">
          <h2 className="section-heading">Official links</h2>
          <p className="mt-4 text-sm leading-7">
            Website: https://stacloud.eu.cc/ · Service Portal:
            https://portal.stacloud.eu.cc/ · Support email:
            stacloud.dev@gmail.com. Use official Discord tickets to confirm
            resources, regions, availability and provisioning.
          </p>
        </section>
        <section className="py-8">
          <h2 className="section-heading">Free Forever plans</h2>
          <p className="mt-4 text-sm leading-7">
            No charges, 0 Credit and free renewals. The management cycle is 5
            days. Resources may change in the future. Verified accounts are
            required; no backups or data recovery are included.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {freePlans
              .filter((p) => p.credit === 0)
              .map((p) => (
                <article className="service-card p-5" key={p.id}>
                  <h3 className="font-bold text-white">{p.name}</h3>
                  <p className="mt-3 text-sm leading-7">
                    {p.cpu}% CPU · {p.ram} MB RAM · {p.disk} MB disk
                    <br />
                    {p.ports} port · 0 backups · 0 databases
                  </p>
                </article>
              ))}
          </div>
        </section>
        <section className="py-8">
          <h2 className="section-heading">Dev hosting resources</h2>
          <div className="table-scroll mt-5">
            <table className="comparison-table">
              <thead>
                <tr>
                  {["Plan", "CPU", "RAM", "Disk", "Credit / 28 days"].map(
                    (s) => (
                      <th key={s} scope="col">
                        {s}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {paidPlans
                  .filter((p) => p.name.startsWith("Dev "))
                  .map((p) => (
                    <tr key={p.name}>
                      <th scope="row">{p.name}</th>
                      <td>{p.cpu}%</td>
                      <td>{p.ram} MB</td>
                      <td>{p.disk} MB</td>
                      <td>{p.credit.toLocaleString("en-US")}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="py-8">
          <h2 className="section-heading">Regions and service boundaries</h2>
          <p className="mt-4 text-sm leading-7">
            Vietnam hosting lists Hanoi and Ho Chi Minh City separately.
            Singapore and other locations depend on the plan and confirmed
            availability. The Oracle region map is a directory of published
            regions, not a guarantee that every configuration is in stock. Ping
            values are random simulations, not network measurements. Linux Egg
            containers do not automatically provide host-level administration.
          </p>
          <a className="action-link" href={href("/network/")}>
            Regions & map →
          </a>
        </section>
        <a className="action-link" href={href("/pricing/")}>
          All current hosting plans →
        </a>
      </div>
    </SiteShell>
  );
}
export function EnglishPage({ page }: { page: PublicPage }) {
  if (page === "") return <EnglishHome />;
  if (page === "egg") return <EggPage />;
  if (page === "about") return <EnglishAbout />;
  if (page in legal) {
    const data = legal[page as keyof typeof legal];
    return (
      <LegalPage
        locale="en"
        eyebrow="STA Cloud policies"
        title={data.title}
        intro={data.intro}
        lastUpdated="17/11/2026"
        sections={data.sections}
      />
    );
  }
  if (page === "free")
    return (
      <SiteShell>
        <FreeHosting locale="en" />
      </SiteShell>
    );
  if (page === "vps")
    return (
      <SiteShell>
        <OracleCatalog locale="en" />
      </SiteShell>
    );
  if (page === "network")
    return (
      <SiteShell>
        <div className="page-container">
          <header className="page-heading">
            <p className="eyebrow">Locations & connectivity</p>
            <h1>Find the right region.</h1>
            <p>
              Choose by your users and workload. Oracle commercial regions are a
              published directory. VPS/GPU products are supplied by ICS. Ping
              values are random simulations, not measurements or latency
              guarantees.
            </p>
          </header>
          <div className="mt-8">
            <LazyNetworkMap />
          </div>
        </div>
      </SiteShell>
    );
  if (page === "history")
    return (
      <SiteShell>
        <div className="page-container">
          <header className="page-heading">
            <p className="eyebrow">Since 2018</p>
            <h1>Three milestones. One journey.</h1>
            <p>
              The names that mark our journey from TACPVN through VietNodes to
              STA Cloud.
            </p>
          </header>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["2018–2019", "TACPVN"],
              ["2019–2023", "VietNodes"],
              ["2023–present", "STA Cloud"],
            ].map(([date, name], i) => (
              <li className="service-card p-7" key={name}>
                <p className="eyebrow">
                  0{i + 1} / {date}
                </p>
                <h2 className="mt-8 text-3xl font-bold text-white">{name}</h2>
              </li>
            ))}
          </ol>
        </div>
      </SiteShell>
    );
  return (
    <SiteShell>
      <div className="page-container">
        <header className="page-heading">
          <p className="eyebrow">STA Cloud hosting</p>
          <h1>Resources for your next project.</h1>
          <p>
            Compare our Free Forever, Dev, Linux Egg and Game Servers plans.
            Confirm availability and conditions on the Portal before
            registering. Oracle Cloud VPS/GPU products supplied by ICS have a
            separate catalog.
          </p>
        </header>
        <PricingCatalog />
      </div>
    </SiteShell>
  );
}
