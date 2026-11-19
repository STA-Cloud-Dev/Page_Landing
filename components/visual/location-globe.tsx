"use client";
import { useId, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Globe2 } from "lucide-react";
import { allDatacenterLocations } from "./network-regions";
import { localizedLocations } from "@/lib/i18n/network";
import { useLocale } from "@/lib/i18n/use-locale";
import { localizedPath } from "@/lib/i18n/config";
import land from "./globe-land.json";
const rad = Math.PI / 180;
function project(lat: number, lng: number, longitude: number) {
  const phi = lat * rad,
    delta = (lng - longitude) * rad,
    tilt = 18 * rad;
  const x = Math.cos(phi) * Math.sin(delta),
    z = Math.cos(phi) * Math.cos(delta),
    y = Math.sin(phi);
  return {
    x: 200 + x * 166,
    y: 200 - (y * Math.cos(tilt) - z * Math.sin(tilt)) * 166,
    z: y * Math.sin(tilt) + z * Math.cos(tilt),
  };
}
export function LocationGlobe() {
  const { locale } = useLocale();
  const en = locale === "en";
  const uid = useId().replaceAll(":", "");
  const locations = useMemo(
    () => localizedLocations(allDatacenterLocations, locale),
    [locale],
  );
  const countries = useMemo(
    () =>
      Array.from(
        new Map(
          locations.map((p) => [
            p.countryCode,
            {
              ...p,
              regions: locations.filter((r) => r.countryCode === p.countryCode),
            },
          ]),
        ).values(),
      ),
    [locations],
  );
  const [selected, setSelected] = useState("VNM");
  const [longitude, setLongitude] = useState(110);
  const drag = useRef<{ x: number; longitude: number } | null>(null);
  const country =
    countries.find((p) => p.countryCode === selected) || countries[0];
  const choose = (code: string) => {
    const next = countries.find((p) => p.countryCode === code);
    if (next) {
      setSelected(code);
      setLongitude(next.lng);
    }
  };
  const dots = useMemo(
    () =>
      land
        .map(([lat, lng]) => project(lat, lng, longitude))
        .filter((p) => p.z > 0),
    [longitude],
  );
  return (
    <section
      className="location-globe"
      aria-label={
        en
          ? "Explore hosting countries"
          : "Khám phá quốc gia và khu vực hosting"
      }
    >
      <div className="globe-toolbar">
        <span>
          <Globe2 size={15} />
          {en ? "EXPLORE REGIONS" : "KHÁM PHÁ KHU VỰC"}
        </span>
        <div>
          <button
            type="button"
            onClick={() => setLongitude((v) => v - 40)}
            aria-label={en ? "Rotate globe west" : "Xoay cầu về phía tây"}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => setLongitude((v) => v + 40)}
            aria-label={en ? "Rotate globe east" : "Xoay cầu về phía đông"}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div
        className="globe-surface"
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          drag.current = { x: event.clientX, longitude };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (drag.current)
            setLongitude(
              drag.current.longitude - (event.clientX - drag.current.x) * 0.45,
            );
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <svg viewBox="0 0 400 400" aria-hidden="true" className="globe-art">
          <defs>
            <radialGradient id={`${uid}-sea`} cx="34%" cy="28%">
              <stop stopColor="#164e6b" />
              <stop offset=".72" stopColor="#062941" />
              <stop offset="1" stopColor="#031b30" />
            </radialGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="166"
            fill={`url(#${uid}-sea)`}
            stroke="#67e8f9"
            strokeOpacity=".35"
          />
          {[-60, -30, 0, 30, 60].map((lat) => (
            <path
              key={`lat-${lat}`}
              d={Array.from({ length: 121 }, (_, i) =>
                project(lat, longitude - 90 + i * 1.5, longitude),
              )
                .map(
                  (p, i) =>
                    `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`,
                )
                .join(" ")}
              fill="none"
              stroke="#67e8f9"
              strokeOpacity=".1"
            />
          ))}
          {[-60, -30, 0, 30, 60].map((lng) => (
            <path
              key={`lng-${lng}`}
              d={Array.from({ length: 61 }, (_, i) =>
                project(-90 + i * 3, longitude + lng, longitude),
              )
                .map(
                  (p, i) =>
                    `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`,
                )
                .join(" ")}
              fill="none"
              stroke="#67e8f9"
              strokeOpacity=".1"
            />
          ))}
          {dots.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={1.1 + p.z * 0.65}
              fill="#a5f3fc"
              opacity={0.24 + p.z * 0.66}
            />
          ))}
          {countries.map((p) => {
            const pos = project(p.lat, p.lng, longitude);
            return pos.z > 0.08 ? (
              <circle
                key={p.countryCode}
                cx={pos.x}
                cy={pos.y}
                r={p.countryCode === selected ? 11 : 7}
                fill="#67e8f9"
                opacity=".18"
              />
            ) : null;
          })}
        </svg>
        {countries.map((p) => {
          const pos = project(p.lat, p.lng, longitude);
          if (pos.z <= 0.08) return null;
          return (
            <button
              type="button"
              className={`globe-location ${selected === p.countryCode ? "globe-location-selected" : ""}`}
              key={p.countryCode}
              style={{ left: `${pos.x / 4}%`, top: `${pos.y / 4}%` }}
              onClick={() => choose(p.countryCode)}
              aria-label={`${p.country} · ${p.regions.length} ${en ? "regions" : "khu vực"}`}
              aria-pressed={selected === p.countryCode}
            >
              <span className="globe-beacon" />
              <img src={p.flagSrc} width="20" height="14" alt="" />
              <span className="sr-only">{p.country}</span>
            </button>
          );
        })}
      </div>
      <div className="globe-country-panel">
        <label className="sr-only" htmlFor={`${uid}-country`}>
          {en ? "Choose a country" : "Chọn quốc gia"}
        </label>
        <div className="globe-country-heading">
          <img
            src={country.flagSrc}
            width="30"
            height="20"
            alt={en ? `${country.country} flag` : `Cờ ${country.country}`}
          />
          <select
            id={`${uid}-country`}
            value={selected}
            onChange={(e) => choose(e.target.value)}
          >
            {countries.map((p) => (
              <option key={p.countryCode} value={p.countryCode}>
                {p.country}
              </option>
            ))}
          </select>
        </div>
        <p className="globe-availability">
          {en
            ? "Region directory · confirm availability before ordering."
            : "Danh mục khu vực · cần xác nhận slot trước khi đăng ký."}
        </p>
        <ul>
          {country.regions.map((p) => (
            <li key={p.id}>
              <span>{p.name}</span>
              <span className="globe-status">
                {p.status === "planned"
                  ? en
                    ? "Planned"
                    : "Sắp mở"
                  : p.status === "paused"
                    ? en
                      ? "No slots"
                      : "Hết slot"
                    : p.countryCode === "VNM"
                      ? en
                        ? "STA Cloud · confirm slots"
                        : "STA Cloud · xác nhận slot"
                      : en
                        ? "ICS / Oracle · confirm slots"
                        : "ICS / Oracle · xác nhận slot"}
              </span>
            </li>
          ))}
        </ul>
        <a href={localizedPath("/network/", locale)}>
          {en
            ? "Open full map & region details →"
            : "Xem bản đồ và chi tiết khu vực →"}
        </a>
      </div>
    </section>
  );
}
