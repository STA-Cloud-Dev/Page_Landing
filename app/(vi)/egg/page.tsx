import { vietnameseOpenGraph } from '@/lib/site-seo';
import { localizedAlternates } from "@/lib/site-seo";
import type { Metadata } from "next";
import { EggPage } from "@/components/egg/page";

export const metadata: Metadata = {
  alternates: { canonical: "https://stacloud.eu.cc/egg" },
  title: "STACloud Egg Catalog | Supported Eggs",
  description:
    "Danh sách egg STACloud cho Website Egg (WordPress, PHPweb, Laravel, phpMyAdmin), AI, Code Languages, Linux, Windows Coming Soon, Minecraft, Proxy và Voice Servers.",
};

metadata.alternates = localizedAlternates("/egg/");

metadata.openGraph = vietnameseOpenGraph(metadata, '/egg/');

export default function EggRoute() {
  return <EggPage />;
}
