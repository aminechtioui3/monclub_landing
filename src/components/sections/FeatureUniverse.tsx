"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Activity, BarChart3, Bell, Boxes, CalendarDays, CreditCard, DoorOpen, History, KeyRound, MonitorPlay, PackageOpen, QrCode, ShieldCheck, Smartphone, UsersRound, WalletCards, Zap } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const rows = [
  ["Members", "Memberships", "Subscriptions", "Attendance", "Access Control", "QR Access", "Turnstiles", "Member History", "Access Logs", "Family Access"],
  ["Payments", "Cash", "Card", "Cheque", "Transactions", "Revenue", "Reports", "Statistics", "Analytics", "Automations", "Renewals", "Notifications"],
  ["Staff", "Coaches", "Planning", "Classes", "WiGO TV", "Questionnaires", "Multi-Gym", "Roles", "Permissions", "Shop", "Inventory", "Mobile App"],
];

const iconMap = [UsersRound, CreditCard, DoorOpen, QrCode, CalendarDays, BarChart3, Bell, Smartphone, PackageOpen, ShieldCheck, MonitorPlay, WalletCards, History, KeyRound, Boxes, Zap, Activity];

export function FeatureUniverse() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const left = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const right = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="features" ref={ref} className="section-space relative overflow-hidden bg-[#f7f6f3]">
      <div className="absolute left-1/2 top-[54%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,89,232,.15),transparent_67%)] blur-xl"/>
      <div className="site-container relative text-center"><span className="eyebrow">The complete system</span><h2 className="section-heading mx-auto mt-6 max-w-[850px]">Everything connected.</h2><p className="section-copy mx-auto mt-7">Every action enriches the same operational picture—from a member’s first visit to the owner’s monthly overview.</p></div>
      <div className="relative mt-20 space-y-5 py-10">
        {rows.map((row, rowIndex) => {
          const doubled = [...row, ...row];
          return (
            <motion.div key={rowIndex} style={{ x: rowIndex === 1 ? right : left }} className={`flex w-max gap-4 ${rowIndex === 1 ? "ml-[-22%]" : "ml-[-7%]"}`}>
              {doubled.map((label, index) => { const Icon = iconMap[(index + rowIndex * 5) % iconMap.length]; const featured = (index + rowIndex) % 5 === 0; return (
                <div key={`${label}-${index}`} className={`card-hover flex shrink-0 items-center gap-3 rounded-2xl border border-black/[.08] bg-white shadow-[0_10px_30px_rgba(33,29,55,.06)] ${featured ? "min-w-[210px] px-5 py-5" : "px-4 py-3.5"}`}>
                  <span className={`grid place-items-center rounded-xl ${featured ? "h-11 w-11 bg-[#eeeaff] text-[#6b57df]" : "h-8 w-8 bg-[#f2f0ed] text-[#6a6670]"}`}><Icon size={featured ? 19 : 15} strokeWidth={1.8}/></span><span className={`${featured ? "text-base" : "text-sm"} font-semibold`}>{label}</span>{featured && <span className="ml-auto h-2 w-2 rounded-full bg-[#40b983] shadow-[0_0_0_5px_#e9f8f0]"/>}
                </div>
              ); })}
            </motion.div>
          );
        })}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/80 bg-[#1d1c23] p-6 text-white shadow-[0_35px_90px_rgba(29,25,48,.3)] sm:p-8"><Logo inverse/><div className="mt-5 text-left text-xs text-white/50">LIVE OPERATING LAYER</div><div className="mt-1 text-left text-2xl font-semibold tracking-[-.05em]">One source of truth.</div></div>
      </div>
      <div className="site-container mt-12 grid gap-px overflow-hidden rounded-[28px] border border-black/[.08] bg-black/[.08] md:grid-cols-3">
        {[{ n: "01", t: "Always in sync", d: "A change at reception is instantly reflected in access, billing and reporting." }, { n: "02", t: "Built around your gym", d: "Configure roles, plans and workflows without piecing together disconnected tools." }, { n: "03", t: "Ready for what’s next", d: "Add capabilities as your team, member base or locations grow." }].map((item) => <div className="bg-white p-7 text-left sm:p-9" key={item.n}><span className="text-xs font-semibold text-[#7967e4]">{item.n}</span><h3 className="mt-8 text-xl font-semibold tracking-[-.04em]">{item.t}</h3><p className="mt-3 text-sm leading-6 text-[#77737e]">{item.d}</p></div>)}
      </div>
    </section>
  );
}
