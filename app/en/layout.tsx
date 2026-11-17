import {
  DocumentLayout,
  baseMetadata,
} from "@/components/shared/document-layout";
export const metadata = {
  ...baseMetadata,
  title: "STA Cloud | Vietnam & Singapore Hosting, Oracle VPS",
  description:
    "STA Cloud hosting for websites, Discord bots and game servers in Vietnam and Singapore. Free Forever plans, Dev hosting and ICS Oracle Cloud VPS/GPU.",
  openGraph: { ...baseMetadata.openGraph, locale: "en_US" },
};
export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocumentLayout locale="en">{children}</DocumentLayout>;
}
