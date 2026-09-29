"use client";

import Image from "next/image";
import { Bell, ChevronDown, Sparkles } from "lucide-react";
import { featureById } from "@/data/productFeatures";
import { MonClubAppHeader } from "./product/MonClubAppHeader";
import { AccessScreen, CalendarScreen, FinanceScreen, MembershipsScreen, MobileExperienceScreen, OperationsScreen, OverviewScreen } from "./product/ProductScreens";

function RecreatedProductScreen({ featureId }: { featureId: string }) {
  let content;
  if (featureId === "members" || featureId === "memberships") content = <MembershipsScreen/>;
  else if (featureId === "access") content = <AccessScreen/>;
  else if (featureId === "planning") content = <CalendarScreen/>;
  else if (featureId === "payments") content = <FinanceScreen/>;
  else if (featureId === "analytics") content = <FinanceScreen analytics/>;
  else if (featureId === "mobile") content = <MobileExperienceScreen/>;
  else if (["staff", "notifications", "wigo-tv", "shop"].includes(featureId)) content = <OperationsScreen featureId={featureId}/>;
  else content = <OverviewScreen/>;

  return <div className="mc-app"><MonClubAppHeader featureId={featureId}/>{content}</div>;
}

export function ProductMockup({ featureId = "overview", className = "", priority = false, compact = false }: { featureId?: string; className?: string; priority?: boolean; compact?: boolean }) {
  const feature = featureById[featureId];
  return (
    <div className={`browser-frame ${compact ? "browser-frame-compact" : ""} ${className}`}>
      <div className="browser-top" aria-hidden="true"><span className="browser-dot"/><span className="browser-dot"/><span className="browser-dot"/><span className="browser-url"/></div>
      <div className="relative aspect-[16/10] min-h-[190px] sm:min-h-[250px]">
        {feature?.assetAvailable ? <Image src={feature.image} alt={`${feature.label} screen in MonClub`} fill priority={priority} quality={88} sizes="(max-width: 768px) 94vw, (max-width: 1200px) 80vw, 1100px" className="object-cover object-top"/> : <div className="h-full" data-asset-placeholder={feature?.image ?? "/product/overview.webp"}><RecreatedProductScreen featureId={featureId}/></div>}
        {!feature?.assetAvailable && <span className="asset-placeholder">Recreated product UI · fictional demo data</span>}
      </div>
    </div>
  );
}

export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[9/18.6] w-[220px] rounded-[40px] border-[7px] border-[#202027] bg-[#f7f6fa] p-2 shadow-[0_35px_80px_rgba(31,28,48,.28)] ${className}`}>
      <div className="absolute left-1/2 top-2 z-10 h-5 w-[42%] -translate-x-1/2 rounded-full bg-[#202027]"/>
      <div className="h-full overflow-hidden rounded-[29px] bg-white p-4 pt-10"><div className="flex items-center justify-between"><span className="text-[9px] font-bold">MONCLUB</span><Bell size={12}/></div><div className="mt-6 rounded-2xl bg-[#211f28] p-4 text-white"><div className="text-[8px] text-white/55">Good morning, Alex</div><div className="mt-1 text-[15px] font-semibold leading-tight">Ready to move?</div><div className="mt-5 flex items-center justify-between rounded-xl bg-white/10 p-2.5"><span className="text-[8px]">Premium member</span><Sparkles size={12}/></div></div><div className="mt-5 flex items-center justify-between"><span className="text-[10px] font-semibold">Today’s classes</span><ChevronDown size={12}/></div>{["18:00 · Cross training","19:15 · Yoga flow","20:00 · Cycling"].map((item,index)=><div className="mt-2 flex items-center gap-2 rounded-xl border border-[#ece9f1] p-2.5" key={item}><span className={`h-7 w-1 rounded-full ${index===0?"bg-[#6c5ce7]":"bg-[#d8d4e5]"}`}/><span className="text-[8px] font-medium">{item}</span></div>)}<div className="absolute bottom-5 left-1/2 flex w-[78%] -translate-x-1/2 justify-around rounded-2xl border border-[#ece9f1] bg-white p-2 shadow-lg"><span className="h-2.5 w-2.5 rounded-full bg-[#6c5ce7]"/><span className="h-2.5 w-2.5 rounded-full bg-[#ddd9e4]"/><span className="h-2.5 w-2.5 rounded-full bg-[#ddd9e4]"/><span className="h-2.5 w-2.5 rounded-full bg-[#ddd9e4]"/></div></div>
    </div>
  );
}
