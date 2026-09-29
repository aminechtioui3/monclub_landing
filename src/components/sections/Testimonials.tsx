"use client";

import { useEffect, useState } from "react";
import { motion, type PanInfo } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const move = (direction: number) => { setInteracted(true); setActive((current) => (current + direction + testimonials.length) % testimonials.length); };
  useEffect(() => {
    if (interacted) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 7000);
    return () => clearInterval(timer);
  }, [interacted]);
  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => { if (Math.abs(info.offset.x) > 55) move(info.offset.x < 0 ? 1 : -1); };
  return (
    <section className="section-space overflow-hidden bg-[#f3f1ed]" aria-labelledby="stories-heading"><div className="site-container flex items-end justify-between gap-6"><div><span className="eyebrow">Customer stories</span><h2 id="stories-heading" className="section-heading mt-6 max-w-[760px]">Built around real gym days.</h2></div><div className="hidden gap-2 sm:flex"><button onClick={() => move(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white transition hover:-translate-y-0.5" aria-label="Previous story"><ArrowLeft size={18}/></button><button onClick={() => move(1)} className="grid h-12 w-12 place-items-center rounded-full bg-[#211f28] text-white transition hover:-translate-y-0.5" aria-label="Next story"><ArrowRight size={18}/></button></div></div>
      <div className="mt-14 overflow-visible" tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Customer testimonials" onKeyDown={(event) => { if (event.key === "ArrowRight") move(1); if (event.key === "ArrowLeft") move(-1); }}>
        <motion.div className="flex cursor-grab gap-4 active:cursor-grabbing sm:gap-6" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={.12} onDragEnd={onDragEnd} animate={{ x: `calc(12vw - ${active * 78}vw)` }} transition={{ type: "spring", stiffness: 180, damping: 25 }}>
          {testimonials.map((story, index) => <article key={index} aria-hidden={active !== index} className={`relative flex min-h-[440px] w-[76vw] max-w-[920px] shrink-0 flex-col rounded-[30px] border p-7 transition duration-500 sm:p-12 ${active === index ? "border-black/[.08] bg-white opacity-100 shadow-[0_25px_65px_rgba(35,30,52,.1)]" : "border-black/[.05] bg-white/55 opacity-55"}`}><Quote size={36} className="text-[#7764e5]"/><blockquote className="mt-10 max-w-[770px] text-[clamp(1.5rem,3vw,2.75rem)] font-medium leading-[1.18] tracking-[-.045em]">“{story.quote}”</blockquote><div className="mt-auto flex items-center gap-4 pt-10"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#ece8ff] text-sm font-semibold text-[#6552d7]">{story.initials}</span><span><b className="block text-sm">{story.name}</b><span className="text-xs text-[#7e7985]">{story.role} · {story.gym}</span></span></div><span className="absolute right-7 top-7 rounded-full bg-[#f1efeb] px-3 py-1 text-[9px] uppercase tracking-[.12em] text-[#8f8994]">Placeholder interview</span></article>)}
        </motion.div>
      </div>
      <div className="site-container mt-7 flex items-center justify-between"><div className="flex gap-2">{testimonials.map((_, index)=><button key={index} onClick={()=>{setInteracted(true);setActive(index)}} aria-label={`Go to story ${index+1}`} className={`h-1.5 rounded-full transition-all ${active===index ? "w-8 bg-[#6d59df]" : "w-3 bg-black/15"}`}/>)}</div><div className="flex gap-2 sm:hidden"><button onClick={() => move(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white" aria-label="Previous story"><ArrowLeft size={17}/></button><button onClick={() => move(1)} className="grid h-11 w-11 place-items-center rounded-full bg-[#211f28] text-white" aria-label="Next story"><ArrowRight size={17}/></button></div></div>
    </section>
  );
}
