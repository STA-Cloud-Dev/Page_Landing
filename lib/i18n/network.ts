import texts from "./dictionaries/network-en.json";
import type { Locale } from "./config";
import type { DatacenterLocation } from "@/components/visual/network-regions";
export function networkText(text: string, locale: Locale) {
  return locale === "en" ? texts[text as keyof typeof texts] || text : text;
}
export function localizedLocations(
  locations: DatacenterLocation[],
  locale: Locale,
) {
  if (locale === "vi") return locations;
  return locations.map((p) => ({
    ...p,
    name: p.name
      .replace("Việt Nam", "Vietnam")
      .replace("TP. Hồ Chí Minh", "Ho Chi Minh City")
      .replace("Hà Nội", "Hanoi"),
    city: p.city
      .replace("TP. Hồ Chí Minh", "Ho Chi Minh City")
      .replace("Hà Nội", "Hanoi")
      .replace("Thành phố chưa công bố", "City not announced"),
    country: p.country.replace("Việt Nam", "Vietnam"),
    speed: p.speed.replace("Theo cấu hình VPS", "Depends on VPS configuration"),
    shield: p.shield.replace(
      "Bảo vệ mạng theo dịch vụ",
      "Network protection depends on the service",
    ),
    availability: p.availability
      .replace("Oracle công bố: Sắp mở", "Oracle announced: planned")
      .replace(
        "Oracle đang hoạt động • Xác nhận slot qua ticket",
        "Oracle active · confirm availability via ticket",
      )
      .replace("Only Paid (Nội Địa)", "Paid services only (Vietnam)")
      .replace("Proxy Paused (Hết slot)", "Proxy paused (no slots)"),
    description: p.id.startsWith("vn-")
      ? `Hosting in ${p.id === "vn-han" ? "Hanoi" : "Ho Chi Minh City"}, Vietnam. Confirm configuration and availability through a ticket. Ping is simulated; actual latency depends on the user location and ISP.`
      : p.id === "hk-01"
        ? "Hong Kong routing proxy with separate Shield AntiDDoS traffic. New registrations are currently unavailable."
        : `${p.name} is an Oracle commercial region. ${p.status === "planned" ? "Planned region; VPS orders are not currently accepted here." : "Confirm availability, configuration and pricing for your request."} Markers indicate illustrative city/region positions, not datacenter addresses.`,
  }));
}
