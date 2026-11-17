import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-seo";
export const metadata: Metadata = {
  title: "Hosting miễn phí đã chuyển địa chỉ | STA Cloud",
  alternates: { canonical: `${siteUrl}/free/` },
  robots: { index: false, follow: true },
};
export default function LegacyFreePage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${siteUrl}/free/`} />
      <div className="page-container">
        <h1>Hosting miễn phí đã chuyển sang /free/</h1>
        <a className="action-link" href={`${siteUrl}/free/`}>
          Mở hai gói Free Forever →
        </a>
      </div>
    </>
  );
}
