"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BadgeCheck, CreditCard, DoorOpen, TrendingUp, UserPlus } from "lucide-react";
import { ProductMockup } from "@/components/ui/ProductMockup";
import { FloatingUiCard } from "./FloatingUiCard";
import { siteLocale } from "@/config/pricing";
import { formatCompactCurrency, formatCurrency } from "@/lib/currency";

export function HeroProductScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [45, -35]);
  const cardY = useTransform(scrollYProgress, [0, 1], [20, -65]);

  return (
    <div ref={ref} className="relative mx-auto mt-20 max-w-[1160px] px-2 sm:px-10">
      <div className="absolute inset-x-[8%] top-[8%] h-[80%] rounded-[50%] bg-[radial-gradient(circle_at_center,rgba(116,91,231,.25),rgba(233,128,81,.10)_45%,transparent_72%)] blur-3xl" />
      <motion.div style={{ y }} initial={{ opacity: 0, y: 48, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.1, delay: .42, ease: [.2, .9, .2, 1] }} className="relative z-10 origin-bottom">
        <ProductMockup featureId="overview" priority />
      </motion.div>
      <motion.div style={{ y: cardY }} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: .7 }} className="absolute inset-0 z-20 hidden overflow-visible sm:block">
        <FloatingUiCard className="left-0 top-[20%] -translate-x-[18%] float-slow" icon={<UserPlus size={18}/>} title="New member" detail="Alex Martin joined" />
        <FloatingUiCard className="bottom-[19%] left-[1%] -translate-x-[28%] float-delay" icon={<DoorOpen size={18}/>} title="Access granted" detail="18:42 · Main entrance" tone="green" />
        <FloatingUiCard className="right-0 top-[15%] translate-x-[24%] float-delay" icon={<CreditCard size={18}/>} title="Payment received" detail={`Premium · ${formatCurrency(siteLocale === "fr" ? 220 : 59, siteLocale)}`} tone="orange" />
        <FloatingUiCard className="bottom-[16%] right-[1%] translate-x-[30%] float-slow" icon={<BadgeCheck size={18}/>} title="Membership renewed" detail="Valid through Aug 2027" tone="green" />
      </motion.div>
      <div className="absolute -right-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-2xl border border-white/15 bg-[#201f27]/95 p-4 text-white shadow-[0_24px_60px_rgba(30,25,54,.28)] backdrop-blur-md xl:block">
        <div className="flex items-center gap-2 text-[10px] text-white/55"><TrendingUp size={12}/> MONTHLY REVENUE</div><div className="mt-2 text-2xl font-semibold">{formatCompactCurrency(siteLocale === "fr" ? 48_600 : 16_500, siteLocale)}</div><div className="mt-1 text-[10px] text-[#8fe1b8]">+8.2% this month</div>
      </div>
    </div>
  );
}
