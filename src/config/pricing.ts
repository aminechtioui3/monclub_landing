export type SiteLocale = "en" | "fr";

export const siteLocale: SiteLocale =
  process.env.NEXT_PUBLIC_SITE_LOCALE === "fr" ? "fr" : "en";

export const pricing = {
  fr: {
    amount: 220,
    currency: "TND",
    symbol: "DT",
    interval: "par salle / mois",
    fixedLabel: "PRIX FIXE",
    includedLabel: "Toutes les fonctionnalités incluses",
  },
  en: {
    amount: 75,
    currency: "USD",
    symbol: "$",
    interval: "per gym / month",
    fixedLabel: "FIXED PRICE",
    includedLabel: "Every feature included",
  },
} as const;
