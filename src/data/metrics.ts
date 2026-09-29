import type { SiteLocale } from "@/config/pricing";

export const metricValues = {
  gyms: 6,
  members: 2_000,
  checkins: 50_000,
  adminReduction: 60,
} as const;

// Replace check-in estimate with verified production total when available.
export const metrics = (locale: SiteLocale) => [
  { value: metricValues.gyms, suffix: "+", label: locale === "fr" ? "SALLES" : "GYMS" },
  { value: metricValues.members, suffix: "+", label: locale === "fr" ? "ADHÉRENTS GÉRÉS" : "MEMBERS MANAGED" },
  { value: metricValues.checkins, suffix: "+", label: locale === "fr" ? "PASSAGES TRAITÉS" : "CHECK-INS PROCESSED" },
  { value: metricValues.adminReduction, suffix: "%+", label: locale === "fr" ? "DE TRAVAIL ADMINISTRATIF EN MOINS" : "LESS ADMINISTRATIVE WORK" },
] as const;
