import { pricing, type SiteLocale } from "@/config/pricing";

export function formatCurrency(amount: number, locale: SiteLocale) {
  const rounded = new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US", {
    maximumFractionDigits: 0,
  }).format(amount);

  return locale === "fr" ? `${rounded} DT` : `$${rounded}`;
}

export function formatCompactCurrency(amount: number, locale: SiteLocale) {
  if (Math.abs(amount) < 1_000) return formatCurrency(amount, locale);

  const compact = new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US", {
    minimumFractionDigits: amount % 1_000 === 0 ? 0 : 1,
    maximumFractionDigits: 1,
  }).format(amount / 1_000);

  return locale === "fr" ? `${compact} k DT` : `$${compact}k`;
}

export function formatSubscriptionPrice(locale: SiteLocale) {
  return formatCurrency(pricing[locale].amount, locale);
}
