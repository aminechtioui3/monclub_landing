"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PhoneMockup, ProductMockup } from "@/components/ui/ProductMockup";

export function DeviceShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const desktopX = useTransform(scrollYProgress, [0,1], [35,-25]);
  const phoneX = useTransform(scrollYProgress, [0,1], [-25,35]);
  const scale = useTransform(scrollYProgress, [0,.5,1], [.97,1,.98]);
  return (
    <section ref={ref} className="section-space overflow-hidden bg-[#efede8]"><div className="site-container text-center"><span className="eyebrow">Desktop + mobile</span><h2 className="section-heading mx-auto mt-6 max-w-[900px]">One ecosystem. Wherever the day happens.</h2><p className="section-copy mx-auto mt-7">A complete operations workspace for your team and a focused club experience for every member.</p>
      <div className="relative mt-16 min-h-[520px] py-12 sm:min-h-[700px]"><div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(113,91,229,.22),transparent_65%)] blur-3xl"/><motion.div style={{ x: desktopX, scale }} className="relative mx-auto w-[95%]"><ProductMockup featureId="overview"/></motion.div><motion.div style={{ x: phoneX }} className="absolute bottom-0 left-[6%] z-20"><PhoneMockup className="w-[clamp(145px,19vw,225px)]"/></motion.div></div>
    </div></section>
  );
}
