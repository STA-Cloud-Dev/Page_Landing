import { notFound } from "next/navigation";
import { EnglishPage } from "@/components/shared/english-page";
import { englishMetadata } from "@/lib/i18n/metadata";
import { publicPages, type PublicPage } from "@/lib/i18n/config";
export const dynamicParams = false;
export function generateStaticParams() {
  return publicPages.filter(Boolean).map((page) => ({ page }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  if (!publicPages.includes(page as PublicPage)) notFound();
  return englishMetadata(page as PublicPage);
}
export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  if (!publicPages.includes(page as PublicPage)) notFound();
  return <EnglishPage page={page as PublicPage} />;
}
