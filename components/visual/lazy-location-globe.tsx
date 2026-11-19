"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/use-locale";
const Globe = dynamic(
  () => import("./location-globe").then((module) => module.LocationGlobe),
  { ssr: false },
);
export function LazyLocationGlobe() {
  const [ready, setReady] = useState(false);
  const { locale } = useLocale();
  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 350);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <div className="location-globe-mount">
      {ready ? (
        <Globe />
      ) : (
        <div
          className="globe-loading"
          aria-label={
            locale === "en"
              ? "Loading region globe"
              : "Đang tải hình cầu khu vực"
          }
        >
          <div />
          <p>
            {locale === "en"
              ? "Explore countries & regions"
              : "Khám phá quốc gia và khu vực"}
          </p>
        </div>
      )}
    </div>
  );
}
