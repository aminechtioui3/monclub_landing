"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { HeroProductScene } from "./HeroProductScene";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 70, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 70, damping: 18 });
  const inverseX = useTransform(x, (value) => value * -.7);

  return (
    <section id="top" ref={ref} className="noise soft-grid relative overflow-hidden pb-24 pt-[150px] sm:pt-[180px]" onPointerMove={(event) => {
      if (event.pointerType !== "mouse") return;
      const rect = ref.current?.getBoundingClientRect(); if (!rect) return;
      x.set(((event.clientX - rect.left) / rect.width - .5) * 28); y.set(((event.clientY - rect.top) / rect.height - .5) * 20);
    }}>
      <motion.div style={{ x, y }} className="pointer-events-none absolute -left-36 top-20 h-[430px] w-[430px] rounded-full bg-[#dcd5ff]/55 blur-[100px]" />
      <motion.div style={{ x: inverseX, y }} className="pointer-events-none absolute -right-32 top-48 h-[360px] w-[360px] rounded-full bg-[#ffdaca]/55 blur-[110px]" />
      <div className="site-container relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="eyebrow">The operating system for modern gyms</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .85, ease: [.22,1,.36,1] }} className="mx-auto mt-7 max-w-[1050px] text-[clamp(3.15rem,13vw,4rem)] font-[720] leading-[.9] tracking-[-.07em] sm:text-[clamp(4rem,8.4vw,7.2rem)] sm:leading-[.88] sm:tracking-[-.075em]">
          Everything your gym needs. <span className="gradient-text">In one place.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24, duration: .75 }} className="mx-auto mt-8 max-w-[700px] text-[clamp(1.08rem,1.8vw,1.35rem)] leading-[1.6] text-[#66636d]">Manage members, subscriptions, access, payments, staff and performance from one connected platform.</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .34, duration: .7 }} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><a className="button-primary min-w-[182px]" href="#contact">Request a demo <ArrowRight size={17}/></a><a className="button-secondary min-w-[182px]" href="#product">Explore MonClub <ArrowDown size={17}/></a></motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="mt-5 inline-flex items-center gap-2 text-xs text-[#77737e]"><Check size={13} className="text-[#238f69]"/> Personalized walkthrough · No commitment</motion.p>
        <HeroProductScene />
      </div>
    </section>
  );
}
