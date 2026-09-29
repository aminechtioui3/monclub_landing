"use client";

import { useCallback, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgeCheck, BellRing, CalendarCheck2, Smartphone } from "lucide-react";
import { mobileDemos } from "@/data/mobileDemos";
import { siteLocale } from "@/config/pricing";
import { MobileAppVideo } from "./MobileAppVideo";

gsap.registerPlugin(ScrollTrigger);

const localized = {
  en: {
    eyebrow: "MonClub mobile",
    title: "Your members carry MonClub with them.",
    description: "From planning to reservations and notifications, your members stay connected to the gym wherever they are.",
    benefits: ["Book a class in seconds", "See membership status", "Receive useful reminders"],
    confirmed: "Reservation confirmed",
    time: "Tuesday · 18:30",
    spots: "8 spots remaining",
    caption: "A real MonClub member experience",
  },
  fr: {
    eyebrow: "MonClub mobile",
    title: "Votre salle les accompagne partout.",
    description: "Planning, réservations, notifications et abonnement : vos adhérents restent connectés à leur salle où qu’ils soient.",
    benefits: ["Réserver un cours en quelques secondes", "Consulter son abonnement", "Recevoir les rappels utiles"],
    confirmed: "Réservation confirmée",
    time: "Mardi · 18:30",
    spots: "8 places restantes",
    caption: "L’expérience réelle d’un adhérent MonClub",
  },
} as const;

type MobileAssetAvailability = { mp4: boolean; webm: boolean; poster: boolean };

export function MobileReservationShowcase({ assets }: { assets: MobileAssetAvailability }) {
  const section = useRef<HTMLElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  const confirmation = useRef<HTMLDivElement>(null);
  const demo = mobileDemos[0];
  const copy = localized[siteLocale];
  const refreshLayout = useCallback(() => requestAnimationFrame(() => ScrollTrigger.refresh()), []);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ scrollTrigger: { trigger: section.current, start: "top 82%", end: "bottom 28%", scrub: .7 } });
      timeline
        .fromTo(phone.current, { y: 80, scale: .92, rotateZ: 2, opacity: 0 }, { y: -18, scale: 1, rotateZ: 0, opacity: 1, ease: "power2.out", duration: .72 }, 0)
        .fromTo(confirmation.current, { y: 52, x: 18, opacity: 0 }, { y: -10, x: 0, opacity: 1, ease: "power2.out", duration: .48 }, .24);
      return () => timeline.kill();
    });
    mm.add("(max-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ scrollTrigger: { trigger: phone.current, start: "top 88%", end: "center 58%", scrub: .55 } });
      timeline.fromTo(phone.current, { y: 54, scale: .95, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 1 }).fromTo(confirmation.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .6 }, .35);
      return () => timeline.kill();
    });
    return () => mm.revert();
  }, { scope: section });

  return (
    <section id="mobile-app" ref={section} aria-labelledby="mobile-app-title" className="mobile-showcase relative overflow-hidden bg-white py-[clamp(96px,11vw,160px)]">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-50" />
      <div className="pointer-events-none absolute right-[-10%] top-[18%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(108,92,231,.2),rgba(236,111,70,.07)_42%,transparent_70%)] blur-2xl" />
      <div className="site-container relative grid min-h-[760px] items-center gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <div className="max-w-[630px]"><span className="eyebrow">{copy.eyebrow}</span><h2 id="mobile-app-title" className="section-heading mt-6">{copy.title}</h2><p className="section-copy mt-7">{copy.description}</p>
          <ul className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{copy.benefits.map((benefit, index) => { const Icon = [CalendarCheck2, Smartphone, BellRing][index]; return <li key={benefit} className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#eeebff] text-[#6554d9]"><Icon size={17}/></span>{benefit}</li>; })}</ul>
        </div>

        <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center py-10 lg:min-h-[720px]">
          <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(108,92,231,.2),transparent_67%)] blur-3xl" />
          <div ref={phone} data-mobile-device className="relative z-10 aspect-[9/19.5] w-[min(82vw,330px)] rounded-[48px] border-[7px] border-[#202027] bg-[#202027] p-[3px] shadow-[0_42px_100px_rgba(31,28,48,.25),0_8px_24px_rgba(31,28,48,.13)] lg:w-[330px]">
            <MobileAppVideo src={demo.video} webmSrc={assets.webm ? demo.webm : undefined} poster={assets.poster ? demo.poster : undefined} fallbackTitle={demo.fallbackTitle} fallbackDescription={demo.fallbackDescription} className="rounded-[37px]" onReady={refreshLayout} enabled={assets.mp4 || assets.webm} />
          </div>
          <div ref={confirmation} className="absolute bottom-[16%] right-0 z-20 flex min-w-[210px] items-center gap-3 rounded-2xl border border-white/90 bg-white/92 p-3.5 shadow-[0_25px_62px_rgba(35,29,64,.2)] backdrop-blur-md sm:right-[2%] lg:right-[-2%]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e3f8ec] text-[#218f68]"><BadgeCheck size={18}/></span><span><b className="block text-xs">{copy.confirmed}</b><small className="mt-1 block text-[10px] text-[#817c88]">{copy.time} · {copy.spots}</small></span></div>
          <p className="absolute bottom-0 inset-x-0 text-center text-[11px] text-[#8a8690]">{copy.caption}</p>
        </div>
      </div>
    </section>
  );
}
