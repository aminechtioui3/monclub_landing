import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { siteLocale } from "@/config/pricing";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://monclub.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MonClub — The operating system for modern gyms",
  description: "Manage members, subscriptions, access, payments, planning, reservations, analytics and your member mobile app from one connected gym platform.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MonClub — Everything your gym needs, in one place",
    description: "Gym management, member reservations and mobile access in one connected platform.",
    type: "website",
    url: "/",
    siteName: "MonClub",
  },
  twitter: { card: "summary_large_image", title: "MonClub", description: "The operating system for modern gyms." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#fbfaf8", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteLocale} className={GeistSans.variable}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
