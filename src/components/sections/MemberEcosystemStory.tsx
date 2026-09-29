"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgeCheck, BarChart3, CalendarDays, CircleDollarSign, CreditCard, DoorOpen, UsersRound } from "lucide-react";
import { MembersTable, MayaTableRowContent } from "@/components/product/MembersTable";
import { siteLocale } from "@/config/pricing";
import { formatCompactCurrency } from "@/lib/currency";

gsap.registerPlugin(ScrollTrigger);

const ecosystemModules = [
  { label: "Access", value: "247 visits", icon: DoorOpen, className: "story-module-access" },
  { label: "Payments", value: formatCompactCurrency(siteLocale === "fr" ? 48_600 : 16_500, siteLocale), icon: CreditCard, className: "story-module-payments" },
  { label: "Planning", value: "86 classes", icon: CalendarDays, className: "story-module-planning" },
  { label: "Analytics", value: "+12.4%", icon: BarChart3, className: "story-module-analytics" },
];

export function MemberEcosystemStory() {
  const scrollArea = useRef<HTMLDivElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const dashboard = useRef<HTMLDivElement>(null);
  const memberCard = useRef<HTMLElement>(null);
  const introduction = useRef<HTMLDivElement>(null);
  const bridgeCopy = useRef<HTMLParagraphElement>(null);
  const finalCopy = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      if (!scrollArea.current || !scene.current || !dashboard.current || !memberCard.current || !introduction.current) return;

      const card = memberCard.current;
      const slot = scene.current.querySelector<HTMLElement>(".member-morph-slot");
      const overview = scene.current.querySelector<HTMLElement>(".member-dashboard-overview");
      const expanded = card.querySelector<HTMLElement>(".member-card-expanded");
      const compact = card.querySelector<HTMLElement>(".member-card-row");
      const staticRow = scene.current.querySelector<HTMLElement>(".member-static-row");
      const modules = gsap.utils.toArray<HTMLElement>(".story-ecosystem-module");
      if (!slot || !overview || !expanded || !compact || !staticRow) return;

      const sceneBox = () => scene.current!.getBoundingClientRect();
      const slotBox = () => slot.getBoundingClientRect();
      const startTop = () => Math.min(scene.current!.clientHeight * .4, introduction.current!.offsetTop + introduction.current!.offsetHeight + 28);
      const startLeft = () => scene.current!.clientWidth / 2 - 154;
      const targetLeft = () => slotBox().left - sceneBox().left;
      const targetTop = () => slotBox().top - sceneBox().top;

      gsap.set(card, { left: startLeft, top: startTop, width: 308, height: 214, x: 0, xPercent: 0, y: 0, scale: 1 });
      gsap.set(dashboard.current, { opacity: .55, y: 20 });
      gsap.set(modules, { opacity: 0, y: 16, scale: .94 });
      gsap.set(compact, { opacity: 0 });
      gsap.set(staticRow, { opacity: 0 });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: scrollArea.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(introduction.current, { opacity: 0, y: -22, duration: .13 }, .16)
        .fromTo(bridgeCopy.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .11 }, .21)
        .to(card, {
          left: () => startLeft() + (targetLeft() - startLeft()) * .52,
          top: () => startTop() + (targetTop() - startTop()) * .52,
          width: 430,
          height: 154,
          borderRadius: 22,
          boxShadow: "0 24px 62px rgba(36,30,68,.17)",
          duration: .25,
          ease: "power2.inOut",
        }, .22)
        .to(dashboard.current, { opacity: 1, y: 0, duration: .18, ease: "power2.out" }, .32)
        .to(overview, { opacity: 0, y: -16, pointerEvents: "none", duration: .14, ease: "power2.inOut" }, .32)
        .to(expanded, { opacity: 0, y: -7, duration: .1 }, .36)
        .to(bridgeCopy.current, { opacity: 0, y: -8, duration: .1 }, .47)
        .to(card, {
          left: targetLeft,
          top: targetTop,
          width: () => slotBox().width,
          height: () => slotBox().height,
          borderRadius: 0,
          borderColor: "rgba(108,92,231,.28)",
          backgroundColor: "#f3f0ff",
          boxShadow: "inset 3px 0 0 #6c5ce7, 0 10px 28px rgba(63,48,145,.08)",
          duration: .31,
          ease: "power2.inOut",
        }, .49)
        .to(compact, { opacity: 1, duration: .22 }, .44)
        .to(modules, { opacity: 1, y: 0, scale: 1, stagger: .018, duration: .13, ease: "power2.out" }, .7)
        .fromTo(finalCopy.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .14, ease: "power2.out" }, .84);

      return () => timeline.kill();
    });

    mm.add("(max-width: 899px) and (prefers-reduced-motion: no-preference)", () => {
      if (!scrollArea.current || !dashboard.current || !memberCard.current) return;
      const card = memberCard.current;
      const overview = scrollArea.current.querySelector<HTMLElement>(".member-dashboard-overview");
      const staticRow = scrollArea.current.querySelector<HTMLElement>(".member-static-row");
      const modules = gsap.utils.toArray<HTMLElement>(".story-ecosystem-module");
      if (!overview || !staticRow) return;

      gsap.set(card, { left: "50%", top: "39%", xPercent: -50, width: 270, height: 198, scale: .92 });
      gsap.set(dashboard.current, { opacity: .3, y: 40 });
      gsap.set(staticRow, { opacity: 0 });
      gsap.set(modules, { opacity: 0 });

      const timeline = gsap.timeline({ scrollTrigger: { trigger: scrollArea.current, start: "top top", end: "bottom bottom", scrub: true } });
      timeline
        .to(introduction.current, { opacity: 0, y: -16, duration: .15 }, .14)
        .fromTo(bridgeCopy.current, { opacity: 0 }, { opacity: 1, duration: .12 }, .22)
        .to(card, { y: 76, scale: .7, opacity: 0, duration: .22, ease: "power2.inOut" }, .24)
        .to(overview, { opacity: 0, duration: .18 }, .28)
        .to(dashboard.current, { opacity: 1, y: 0, duration: .18 }, .34)
        .to(staticRow, { opacity: 1, duration: .12 }, .5)
        .to(modules, { opacity: 1, stagger: .02, duration: .12 }, .67)
        .to(bridgeCopy.current, { opacity: 0, duration: .1 }, .68)
        .fromTo(finalCopy.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .15 }, .81);

      return () => timeline.kill();
    });

    return () => mm.revert();
  }, { scope: scrollArea });

  return (
    <section id="member-ecosystem" aria-labelledby="member-ecosystem-title" className="relative overflow-clip bg-[#f7f6f3]">
      <div ref={scrollArea} className="story-scroll-area relative h-[285svh] md:h-[320svh]">
        <div ref={scene} className="story-sticky-scene sticky top-0 h-[100svh] overflow-hidden">
          <div className="pointer-events-none absolute inset-0 soft-grid opacity-45" />
          <div className="pointer-events-none absolute left-1/2 top-[58%] h-[min(76vw,760px)] w-[min(76vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(108,92,231,.16),rgba(236,111,70,.06)_42%,transparent_70%)] blur-2xl" />

          <div ref={introduction} className="story-introduction absolute inset-x-0 top-[8svh] z-30 px-5 text-center">
            <span className="eyebrow">From member to whole club</span>
            <h2 id="member-ecosystem-title" className="mx-auto mt-5 max-w-[900px] text-[clamp(2.65rem,6vw,5.6rem)] font-[700] leading-[.93] tracking-[-.065em] text-balance">Every connected club starts with one member.</h2>
            <p className="mx-auto mt-5 max-w-[650px] text-[clamp(.98rem,1.45vw,1.18rem)] leading-7 text-[#6e6c76]">MonClub keeps the member, their membership, access and payments connected to the same operational view.</p>
          </div>

          <p ref={bridgeCopy} className="absolute inset-x-0 top-[12svh] z-30 px-5 text-center text-sm font-semibold uppercase tracking-[.14em] text-[#6554d9] opacity-0">One profile becomes one living member record.</p>

          <div ref={dashboard} className="story-dashboard-layout absolute left-1/2 top-[59%] z-10 -translate-x-1/2 -translate-y-1/2"><MembersTable /></div>

          <article ref={memberCard} className="member-morph-card absolute z-30 overflow-hidden rounded-[26px] border border-black/[.09] bg-white shadow-[0_32px_90px_rgba(36,30,68,.24)]" aria-label="Maya Laurent, active MonClub member">
            <div className="member-card-expanded p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#7356e8] text-sm font-bold text-white shadow-[0_8px_20px_rgba(115,86,232,.25)]">ML</span><div><h3 className="text-lg font-semibold tracking-[-.035em]">Maya Laurent</h3><p className="mt-0.5 text-[11px] text-[#7a7680]">Annual Performance</p></div></div><BadgeCheck size={20} className="shrink-0 text-[#218f68]" aria-label="Active membership" /></div>
              <div className="mt-5 rounded-2xl bg-[#f5f3fa] p-3.5"><div className="flex items-center justify-between gap-3 text-[11px]"><span className="flex items-center gap-2 font-semibold"><UsersRound size={14} className="text-[#6c5ce7]" /> Membership</span><span className="rounded-full bg-[#d9f6e5] px-2 py-1 font-semibold text-[#147554]">Current</span></div><div className="mt-3 grid grid-cols-2 gap-2 border-t border-black/[.07] pt-3"><span className="flex items-center gap-1.5 text-[10px] font-medium text-[#676371]"><DoorOpen size={12} className="text-[#6c5ce7]" /> Access enabled</span><span className="flex items-center justify-end gap-1.5 text-[10px] font-medium text-[#676371]"><CircleDollarSign size={12} className="text-[#218f68]" /> Paid in full</span></div></div>
            </div>
            <MayaTableRowContent className="member-card-row absolute inset-0" />
          </article>

          {ecosystemModules.map((module) => { const Icon = module.icon; return <div key={module.label} className={`story-ecosystem-module ${module.className} absolute z-20 items-center gap-3 rounded-2xl border border-black/[.08] bg-white/95 px-4 py-3 shadow-[0_22px_54px_rgba(34,29,61,.17)] backdrop-blur-md`}><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eeebff] text-[#6554d9]"><Icon size={16} /></span><span><b className="block text-xs">{module.label}</b><small className="mt-0.5 block text-[10px] text-[#817c88]">{module.value}</small></span></div>; })}

          <div ref={finalCopy} className="story-final-copy absolute inset-x-0 bottom-[3.5svh] z-30 px-5 text-center opacity-0"><span className="text-[11px] font-semibold uppercase tracking-[.15em] text-[#6554d9]">The member is now connected</span><p className="mt-2 text-[clamp(1.55rem,3vw,2.7rem)] font-semibold tracking-[-.055em]">One member. One record. One connected system.</p></div>
        </div>
      </div>
    </section>
  );
}
