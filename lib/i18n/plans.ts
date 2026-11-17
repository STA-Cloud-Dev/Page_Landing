import { allServicePlans } from "@/components/home/content";
import type { Locale } from "./config";
const phrases: [string, string][] = [
  ["MB ổ đĩa", "MB disk"],
  ["vị trí sao lưu thủ công", "manual backup slots"],
  ["bản sao lưu", "backups"],
  ["cơ sở dữ liệu", "databases"],
  ["suất server tối đa", "maximum servers"],
  ["Gia hạn tối đa", "Renewal limit:"],
  ["ngày", "days"],
  ["cổng", "ports"],
  ["Không giới hạn số lần mua", "Unlimited purchases"],
  ["Dành cho người trả phí", "Paid service"],
  [
    "Cấu hình có thể điều chỉnh trong tương lai",
    "Resources may change in the future",
  ],
  ["Gia hạn 0đ", "Free renewals"],
  ["Host Free", "Free hosting"],
  ["Trả phí", "Paid"],
  ["Hoàn 100%", "100% Credit refund"],
  ["Tạm Ngưng", "Unavailable"],
  ["Miễn Phí Beta", "Free beta"],
  ["Không cần domain riêng", "No domain required"],
  ["Băng thông cao Singapore / VN", "Vietnam / Singapore bandwidth"],
  ["Tối ưu Web & AI App", "Web & AI applications"],
  ["SSL Tunneling tự động", "Automatic SSL tunneling"],
];
export function englishSpec(text: string) {
  return phrases.reduce((value, [vi, en]) => value.replaceAll(vi, en), text);
}
export function hostingPlans(locale: Locale) {
  return allServicePlans
    .filter((plan) => plan.category !== "vps")
    .map((plan) => {
      if (locale === "vi") return plan;
      const free = ["free-dev", "free-gaming-ai"].includes(plan.id);
      const description = free
        ? "Verified accounts. Free Forever, no charges or renewal fees. Resources may change in the future."
        : plan.id === "donater"
          ? "For users who donated over 200,000 VND. Free renewals under the Donater conditions."
          : plan.id === "booster-discord"
            ? "Boost the Discord server, then open a ticket to receive 50,000 Credit to create a server."
            : plan.id === "linux-free"
              ? "Verified accounts. This community plan has its own Credit price and renewal limits."
              : plan.id === "openclaw"
                ? "Free beta for AI and web applications, with no personal domain required."
                : plan.id === "proxy-hk"
                  ? "Hong Kong forwarding proxy with Shield AntiDDoS. New registrations are currently unavailable."
                  : plan.category === "linux"
                    ? "Linux container environment for paid users. This is not a full VPS or access to the physical host."
                    : plan.category === "game"
                      ? "Paid game server hosting with the published resource and renewal limits."
                      : "For Discord bots, small web applications and development environments.";
      const warning = free
        ? "5-day management cycle; renew for free within the published renewal limit. No backups or data recovery. Keep an independent copy. Slot availability must be confirmed."
        : plan.id === "openclaw"
          ? "Hong Kong nodes are not recommended for AI workloads: some third-party APIs restrict the region."
          : plan.category === "community" && !plan.name.startsWith("Dev ")
            ? "Confirm the community eligibility and Credit refund conditions on the Portal or in a ticket. Back up important data yourself."
            : "Confirm availability on the Portal. Infrastructure backups apply only where explicitly included; keep independent copies of important data.";
      return {
        ...plan,
        name: plan.id === "donater" ? "STA Cloud Donater (200k+)" : plan.name,
        badge: englishSpec(plan.badge),
        period: englishSpec(plan.period),
        description,
        specs: plan.specs.map(englishSpec),
        warning,
        upsizeNotes: "",
        ctaText:
          plan.status === "paused"
            ? "Ask about availability"
            : "View on Portal",
      };
    });
}
