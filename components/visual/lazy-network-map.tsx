"use client";
import { useLocale } from "@/lib/i18n/use-locale";
import { localizedLocations, networkText } from "@/lib/i18n/network";

import dynamic from "next/dynamic";
import { useState } from "react";
import { allDatacenterLocations as rawLocations } from "./network-regions";

function MapPlaceholder() {
  const { locale } = useLocale();
  const nt = (text: string) => networkText(text, locale);
  const allDatacenterLocations = localizedLocations(rawLocations, locale);
  return (
    <div className="rounded-3xl border border-cyan-300/30 bg-[#153e5c] p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-white">
        {" "}
        {nt("Mạng lưới hạ tầng toàn cầu")}{" "}
      </h2>
      <p className="mt-3 text-sky-100">
        {" "}
        {nt(
          "Danh mục các khu vực trên sơ đồ minh họa: các region thương mại Oracle Cloud, Hà Nội, TP. Hồ Chí Minh và Hong Kong. Ping trên bản đồ là mô phỏng ngẫu nhiên theo khu vực.",
        )}{" "}
      </p>
      <details className="group/regions mt-5">
        <summary className="cursor-pointer rounded-xl border border-cyan-300/30 px-4 py-3 font-semibold text-cyan-100">
          {" "}
          {nt("Danh mục các khu vực trên sơ đồ minh họa")}{" "}
          <span className="ml-2 text-xs group-open/regions:hidden">
            {" "}
            {nt("Bấm để mở")} {allDatacenterLocations.length}{" "}
            {nt("khu vực")}{" "}
          </span>
          <span className="ml-2 hidden text-xs group-open/regions:inline">
            {" "}
            {nt("Bấm để thu gọn")}{" "}
          </span>
        </summary>
        <ul className="mt-4 grid max-h-80 overflow-y-auto gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allDatacenterLocations.map((location) => (
            <li
              key={location.id}
              className="rounded-2xl border border-cyan-200/20 bg-white/5 px-5 py-4 text-sky-100"
            >
              {location.name}
              {location.status === "planned"
                ? locale === "en"
                  ? " · Planned"
                  : " • Sắp mở"
                : ""}
            </li>
          ))}
        </ul>
      </details>
      <p className="mt-5 text-sm text-sky-100/80">
        {" "}
        {nt(
          "Liên hệ hỗ trợ để xác nhận khu vực và tình trạng slot cho gói bạn chọn.",
        )}{" "}
      </p>
    </div>
  );
}

const NetworkMap = dynamic(
  () =>
    import("./network-map-vector").then((module) => module.NetworkMapVector),
  { ssr: false, loading: MapPlaceholder },
);

export function LazyNetworkMap() {
  const { locale } = useLocale();
  const nt = (text: string) => networkText(text, locale);
  const [requestedMap, setRequestedMap] = useState(false);
  return (
    <div>
      {requestedMap ? (
        <NetworkMap />
      ) : (
        <>
          <MapPlaceholder />
          <button
            type="button"
            onClick={() => setRequestedMap(true)}
            className="button-secondary mt-4"
          >
            {nt("Mở bản đồ tương tác & ping mô phỏng")}
          </button>
        </>
      )}
    </div>
  );
}
