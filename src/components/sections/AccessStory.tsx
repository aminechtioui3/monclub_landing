"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { BadgeCheck, Check, CircleUserRound, Clock3, DoorOpen, LoaderCircle, ShieldCheck } from "lucide-react";
import { ProductMockup } from "@/components/ui/ProductMockup";

const stages = [
  { title: "Member identified", detail: "Alex Martin", icon: CircleUserRound },
  { title: "Membership verified", detail: "Premium · active", icon: ShieldCheck },
  { title: "Access authorized", detail: "Main entrance", icon: DoorOpen },
  { title: "Attendance recorded", detail: "Today · 18:42", icon: Clock3 },
];

export function AccessStory() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { once: true, amount: .3 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const timers = stages.slice(1).map((_, index) => window.setTimeout(() => setActive(index + 1), 700 * (index + 1)));
    return () => timers.forEach(clearTimeout);
  }, [visible]);

  return (
    <section id="access" ref={ref} className="relative bg-[#eeece7] py-28 sm:py-40">
      <div className="site-container grid gap-16 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
        <div className="lg:sticky lg:top-32"><span className="eyebrow">Access</span><h2 className="section-heading mt-6">Access that just works.</h2><p className="section-copy mt-7">From identification to attendance, every check happens in one quiet, reliable flow.</p>
          <div className="mt-10 space-y-3">{stages.map((stage, index) => { const Icon = stage.icon; const done = active >= index; return <div key={stage.title} className={`flex items-center gap-4 rounded-2xl border p-4 transition duration-500 ${done ? "border-[#6c5ce7]/20 bg-white shadow-sm" : "border-black/[.07] bg-white/35 opacity-50"}`}><span className={`grid h-10 w-10 place-items-center rounded-xl ${done ? "bg-[#ebe7ff] text-[#6753db]" : "bg-black/[.05]"}`}>{done ? <Check size={17}/> : <Icon size={17}/>}</span><span><b className="block text-sm">{stage.title}</b><span className="text-xs text-[#817d87]">{stage.detail}</span></span></div>; })}</div>
        </div>
        <div className="relative min-h-[680px] overflow-hidden rounded-[36px] bg-[#1e1d24] p-5 text-white shadow-[0_35px_80px_rgba(31,28,45,.22)] sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(109,92,231,.28),transparent_45%)]"/>
          <div className="relative flex items-center justify-between text-xs text-white/50"><span>MAIN ENTRANCE · LIVE</span><span className="flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-[#4bd195]"/> System online</span></div>
          <div className="relative mt-7"><ProductMockup featureId="access"/></div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ delay: .45, duration: .6 }} className="absolute bottom-7 right-7 z-20 w-[min(390px,calc(100%_-_56px))] rounded-[24px] border border-white/10 bg-[#24232c]/95 p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#8d7bf3] text-sm font-semibold">AM</span><span><b className="block text-sm">Alex Martin</b><span className="text-[11px] text-white/50">Premium Membership · Main entrance</span></span></div>{active < 3 ? <LoaderCircle className="animate-spin text-[#a99bff]" size={20}/> : <BadgeCheck className="text-[#52d39a]" size={24}/>}</div>
            <div className={`mt-5 rounded-2xl p-3.5 text-center transition-all duration-500 ${active === 3 ? "bg-[#35b97f] text-white" : "bg-white/[.07] text-white/55"}`}><span className="text-xs font-semibold tracking-[.12em]">{active === 0 ? "CHECKING MEMBER" : active < 3 ? "MEMBERSHIP VERIFIED" : "ACCESS GRANTED"}</span></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
