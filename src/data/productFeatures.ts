import {
  Bell,
  CalendarDays,
  ChartNoAxesCombined,
  ContactRound,
  CreditCard,
  DoorOpen,
  LayoutDashboard,
  MonitorPlay,
  PackageOpen,
  Smartphone,
  UserRoundCog,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { siteLocale } from "@/config/pricing";
import { formatCompactCurrency } from "@/lib/currency";

export type ProductFeature = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: LucideIcon;
  image: string;
  mobileImage?: string;
  accent?: string;
  stats?: { label: string; value: string }[];
  assetAvailable?: boolean;
};

export const productFeatures: ProductFeature[] = [
  { id: "members", label: "Member management", shortLabel: "Members", description: "Profiles, history, documents and every relationship in one living record.", icon: UsersRound, image: "/product/members.webp", accent: "#6d5dfc", stats: [{ label: "Active members", value: "1,284" }] },
  { id: "memberships", label: "Memberships", shortLabel: "Memberships", description: "Create flexible plans and make renewals effortless for staff and members.", icon: ContactRound, image: "/product/memberships.webp", accent: "#9b5cff", stats: [{ label: "Renewal rate", value: "94%" }] },
  { id: "access", label: "Access control", shortLabel: "Access", description: "Connect doors, QR codes and turnstiles to live membership status.", icon: DoorOpen, image: "/product/access.webp", accent: "#29a674", stats: [{ label: "Check-ins today", value: "247" }] },
  { id: "payments", label: "Payments & finance", shortLabel: "Payments", description: "Track every payment method, balance and transaction without spreadsheet work.", icon: CreditCard, image: "/product/payments.webp", accent: "#ec7c3b", stats: [{ label: "Revenue this month", value: formatCompactCurrency(siteLocale === "fr" ? 48_600 : 16_500, siteLocale) }] },
  { id: "planning", label: "Planning", shortLabel: "Planning", description: "Plan classes, spaces and coach schedules in a shared calendar.", icon: CalendarDays, image: "/product/planning.webp", accent: "#2775e9", stats: [{ label: "Classes this week", value: "86" }] },
  { id: "staff", label: "Staff & coaches", shortLabel: "Staff", description: "Give every teammate the right workspace, role and permissions.", icon: UserRoundCog, image: "/product/staff.webp", accent: "#dd5e94", stats: [{ label: "Team members", value: "24" }] },
  { id: "analytics", label: "Analytics", shortLabel: "Analytics", description: "Turn activity, attendance and revenue into decisions you can act on.", icon: ChartNoAxesCombined, image: "/product/analytics.webp", accent: "#7358d9", stats: [{ label: "Monthly attendance", value: "+12.4%" }] },
  { id: "notifications", label: "Notifications", shortLabel: "Notifications", description: "Keep members informed with timely, relevant automated messages.", icon: Bell, image: "/product/notifications.webp", accent: "#df5b55", stats: [{ label: "Delivered", value: "98.7%" }] },
  { id: "wigo-tv", label: "WiGO TV", shortLabel: "WiGO TV", description: "Bring schedules, announcements and club content to every screen.", icon: MonitorPlay, image: "/product/wigo-tv.webp", accent: "#2b9bb3", stats: [{ label: "Active displays", value: "8" }] },
  { id: "shop", label: "Shop & stock", shortLabel: "Shop", description: "Sell products and keep inventory connected to the front desk.", icon: PackageOpen, image: "/product/shop.webp", accent: "#c68a23", stats: [{ label: "Low stock", value: "6 items" }] },
  { id: "mobile", label: "Mobile experience", shortLabel: "Mobile", description: "Put membership, planning and club updates in every member's pocket.", icon: Smartphone, image: "/product/mobile.webp", mobileImage: "/product/mobile.webp", accent: "#2e82d9", stats: [{ label: "Mobile sessions", value: "2,401" }] },
];

export const overviewFeature: ProductFeature = {
  id: "overview",
  label: "Platform overview",
  shortLabel: "Overview",
  description: "A live view of the gym, its people and its daily performance.",
  icon: LayoutDashboard,
  image: "/product/overview.webp",
  accent: "#6d5dfc",
  assetAvailable: false,
};

export const featureById = Object.fromEntries([overviewFeature, ...productFeatures].map((feature) => [feature.id, feature]));
