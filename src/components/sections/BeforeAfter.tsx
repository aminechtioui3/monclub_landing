"use client";

import { useState } from "react";
import { ArrowLeftRight, Check, X } from "lucide-react";

const before = ["Excel", "Paper", "WhatsApp", "Manual attendance", "Separate payment records", "Manual reporting"];
const after = ["Unified platform", "Automated access", "Centralized memberships", "Connected payments", "Live analytics", "Communication"];

function CompareContent({ type }: { type: "before" | "after" }) {
  const items = type === "before" ? before : after;
  return <div className={`absolute inset-0 flex flex-col justify-center p-7 sm:p-14 ${type === "before" ? "bg-[#e9e5de]" : "bg-[#211f28] text-white"}`}><span className={`text-xs font-semibold uppercase tracking-[.14em] ${type === "before" ? "text-[#8b8178]" : "text-[#a899ff]"}`}>{type === "before" ? "Before MonClub" : "With MonClub"}</span><h3 className="mt-4 whitespace-pre-line text-[clamp(2rem,4vw,4rem)] font-semibold leading-none tracking-[-.06em]">{type === "before" ? "Scattered tools.\nScattered focus." : "One system.\nOne clear view."}</h3><div className="mt-8 grid gap-2 sm:grid-cols-2">{items.map(item=><div className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium ${type === "before" ? "bg-white/55" : "bg-white/[.07]"}`} key={item}>{type === "before" ? <X size={13} className="text-[#b66b5a]"/> : <Check size={13} className="text-[#61d7a1]"/>}{item}</div>)}</div></div>;
}

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  return (
    <section id="before-after" className="section-space relative z-10 overflow-hidden bg-white"><div className="site-container"><div className="mx-auto max-w-[860px] text-center"><span className="eyebrow">The difference</span><h2 className="section-heading mt-6">Feel the before and after.</h2><p className="section-copy mx-auto mt-7">Drag to compare the day-to-day complexity MonClub brings into one place.</p></div>
      <div className="relative isolate mt-14 h-[560px] overflow-hidden rounded-[32px] border border-black/[.08] bg-[#e9e5de] shadow-[0_24px_70px_rgba(31,28,49,.1)] sm:h-[600px] lg:h-[620px]">
        <CompareContent type="before"/>
        <div className="absolute inset-0 z-10" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} aria-hidden="true"><CompareContent type="after"/></div>
        <div className="pointer-events-none absolute inset-y-0 z-20 w-[2px] bg-white shadow-[0_0_18px_rgba(0,0,0,.24)]" style={{ left: `${position}%` }}><span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-xl"><ArrowLeftRight size={18}/></span></div>
        <input type="range" min="20" max="80" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 z-30 h-full w-full cursor-col-resize opacity-0" aria-label="Compare before and after MonClub" aria-valuetext={`${position}% MonClub view`}/>
      </div>
    </div></section>
  );
}
