import {
  DocumentLayout,
  baseMetadata,
} from "@/components/shared/document-layout";
export const metadata = baseMetadata;
export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocumentLayout locale="vi">{children}</DocumentLayout>;
}
