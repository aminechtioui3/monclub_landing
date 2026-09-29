"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, FileSpreadsheet, KeyRound, MessageCircle, NotebookTabs, ReceiptText, Sheet } from "lucide-react";
import { ProductMockup } from "@/components/ui/ProductMockup";

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { label: "Excel", icon: FileSpreadsheet, className: "left-[5%] top-[22%] -rotate-6" },
  { label: "Paper records", icon: NotebookTabs, className: "left-[17%] top-[62%] rotate-3" },
  { label: "WhatsApp", icon: MessageCircle, className: "right-[6%] top-[18%] rotate-6" },
  { label: "Access software", icon: KeyRound, className: "right-[13%] top-[67%] -rotate-3" },
  { label: "Cash register", icon: ReceiptText, className: "left-[39%] top-[75%] rotate-2" },
  { label: "Attendance sheets", icon: Sheet, className: "left-[35%] top-[14%] -rotate-2" },
  { label: "Calendars", icon: CalendarDays, className: "right-[33%] top-[43%] rotate-3" },
];

export function ConvergenceScene() {
  const section = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ scrollTrigger: { trigger: section.current, start: "top top", end: "+=2200", scrub: 1, pin: true, anticipatePin: 1 } });
      timeline
        .to(".legacy-tool", { x: 0, y: 0, rotate: 0, scale: .45, opacity: 0, stagger: .018, duration: .24, ease: "power2.inOut" }, 0)
        .to(".convergence-first", { opacity: 0, y: -30, duration: .16 }, .14)
        .fromTo(".convergence-product", { opacity: 0, scale: .78, y: 80 }, { opacity: 1, scale: 1, y: 0, duration: .28, ease: "power3.out" }, .28)
        .to(".convergence-product", { opacity: .72, scale: .97, duration: .12, ease: "power2.inOut" }, .58)
        .fromTo(".convergence-final", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: .18, ease: "power2.out" }, .79);
    });
    return () => mm.revert();
  }, { scope: section });

  return (
    <section className="overflow-hidden bg-[#1b1a21] text-white">
      <div className="h-[clamp(100px,15vw,220px)] bg-[linear-gradient(to_bottom,#f0eee9,#1b1a21)]" aria-hidden="true" />
      <div ref={section} className="relative flex min-h-[100svh] items-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,92,231,.22),transparent_48%)]" />
        <div className="site-container relative h-[760px] max-h-[84svh] min-h-[620px]">
        <div className="convergence-first absolute left-1/2 top-1/2 z-10 w-full max-w-[850px] -translate-x-1/2 -translate-y-1/2 text-center"><span className="eyebrow !text-[#a899ff]">From fragmented to focused</span><h2 className="mt-6 text-[clamp(3.2rem,7vw,6.8rem)] font-[700] leading-[.92] tracking-[-.07em]">Your gym shouldn’t run on five different systems.</h2></div>
        {tools.map((tool, index) => { const Icon = tool.icon; const x = index % 2 ? -180 + index * 14 : 190 - index * 12; const y = index < 3 ? -120 + index * 70 : 100 - index * 16; return <div key={tool.label} style={{ transform: `translate(${x}px, ${y}px)` }} className={`legacy-tool absolute z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[.09] px-5 py-4 shadow-xl backdrop-blur-md ${tool.className}`}><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10"><Icon size={17}/></span><span className="whitespace-nowrap text-sm font-medium">{tool.label}</span></div>; })}
        <div className="convergence-product absolute left-1/2 top-[49%] w-[min(850px,82vw)] -translate-x-1/2 -translate-y-1/2 opacity-0"><ProductMockup featureId="overview"/></div>
        <div className="convergence-final absolute inset-x-0 bottom-0 text-center opacity-0"><span className="text-sm font-semibold uppercase tracking-[.15em] text-[#a99bff]">One connected system</span><h3 className="mt-3 text-[clamp(2.2rem,5vw,4.4rem)] font-semibold tracking-[-.06em]">Bring everything together with MonClub.</h3></div>
        </div>
      </div>
    </section>
  );
}
