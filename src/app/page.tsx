import { existsSync } from "node:fs";
import { join } from "node:path";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ProductBuilder } from "@/components/product/ProductBuilder";
import { SocialProof } from "@/components/sections/SocialProof";
import { MemberEcosystemStory } from "@/components/sections/MemberEcosystemStory";
import { MobileReservationShowcase } from "@/components/product/MobileReservationShowcase";
import { ConvergenceScene } from "@/components/sections/ConvergenceScene";
import { FeatureUniverse } from "@/components/sections/FeatureUniverse";
import { MemberStory } from "@/components/sections/MemberStory";
import { AccessStory } from "@/components/sections/AccessStory";
import { PaymentsStory } from "@/components/sections/PaymentsStory";
import { TeamStory } from "@/components/sections/TeamStory";
import { AnalyticsStory } from "@/components/sections/AnalyticsStory";
import { CommunicationStory } from "@/components/sections/CommunicationStory";
import { ConnectedGym } from "@/components/sections/ConnectedGym";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Metrics } from "@/components/sections/Metrics";
import { Testimonials } from "@/components/sections/Testimonials";
import { Security } from "@/components/sections/Security";
import { DeviceShowcase } from "@/components/sections/DeviceShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const mobileAsset = (filename: string) => existsSync(join(process.cwd(), "public", "product", "mobile", filename));
  const mobileAssets = {
    mp4: mobileAsset("reservation-loop.mp4"),
    webm: mobileAsset("reservation-loop.webm"),
    poster: mobileAsset("reservation-poster.webp"),
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MonClub",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "A connected gym-management platform for members, memberships, access, payments, staff, planning, reservations, analytics and the member mobile application.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main>
        <Hero />
        <MemberEcosystemStory />
        <MobileReservationShowcase assets={mobileAssets} />
        <ProductBuilder />
        <ConvergenceScene />
        <FeatureUniverse />
        <MemberStory />
        <AccessStory />
        <PaymentsStory />
        <TeamStory />
        <AnalyticsStory />
        <CommunicationStory />
        <ConnectedGym />
        <BeforeAfter />
        <Metrics />
        <SocialProof />
        <Testimonials />
        <Security />
        <DeviceShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
