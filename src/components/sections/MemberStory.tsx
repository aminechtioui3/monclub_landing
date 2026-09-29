"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BadgeCheck, CalendarCheck, Crown, History } from "lucide-react";
import { ProductMockup } from "@/components/ui/ProductMockup";
import { Reveal } from "@/components/motion/Reveal";

export function MemberStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const screenshotY = useTransform(scrollYProgress, [0, 1], [45, -35]);
  const cardY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  return (
    <section id="members" ref={ref} className="section-space relative overflow-hidden bg-white">
      <div className="site-container">
        <Reveal><span className="eyebrow">Members</span><h2 className="section-heading mt-6 max-w-[760px]">Know every member.</h2><p className="section-copy mt-7">Everything your staff needs to understand a member, their subscription and their relationship with your gym.</p></Reveal>
        <div className="relative mt-16 px-0 lg:px-10">
          <motion.div style={{ y: screenshotY }}><ProductMockup featureId="members"/></motion.div>
          <motion.div style={{ y: cardY }} className="absolute -left-1 top-[16%] hidden rounded-2xl border border-black/[.08] bg-white p-5 shadow-xl lg:block"><div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-[#7d7784]"><BadgeCheck size={14} className="text-[#38a777]"/> Active member</div><div className="mt-3 text-xl font-semibold">Alex Martin</div><div className="mt-1 text-xs text-[#817d87]">Premium · Since 2023</div></motion.div>
          <motion.div style={{ y: screenshotY }} className="absolute -right-2 bottom-[18%] hidden w-[190px] space-y-2 rounded-2xl border border-black/[.08] bg-white p-4 shadow-xl lg:block">
            {[{ i: CalendarCheck, l: "12 visits this month" }, { i: Crown, l: "Premium Membership" }, { i: History, l: "Last check-in 18:42" }].map((item) => <div className="flex items-center gap-2.5 rounded-xl bg-[#f7f5fa] p-2.5 text-[10px] font-semibold" key={item.l}><item.i size={13} className="text-[#6c5ce7]"/>{item.l}</div>)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
