"use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Bell, CalendarDays, Check, ChevronLeft, Clock3, Dumbbell, MapPin } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MobileAppVideoProps = {
  src: string;
  webmSrc?: string;
  poster?: string;
  fallbackTitle: string;
  fallbackDescription: string;
  className?: string;
  onReady?: () => void;
  enabled?: boolean;
};

function ReservationPlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#f7f6fa] px-4 pb-5 pt-11 text-[#16151c]">
      <div className="flex items-center justify-between"><span className="text-[10px] font-extrabold tracking-[.14em]">MONCLUB</span><Bell size={14} /></div>
      <div className="mt-6 flex items-center gap-2"><ChevronLeft size={15}/><span className="text-xs font-semibold">Planning</span></div>
      <div className="mt-5 rounded-[20px] bg-[#211f28] p-4 text-white shadow-[0_18px_38px_rgba(31,28,48,.2)]">
        <span className="text-[8px] font-semibold uppercase tracking-[.12em] text-white/55">Tuesday 14 October</span>
        <div className="mt-4 flex items-center justify-between"><span><small className="block text-[9px] text-white/55">18:30</small><b className="mt-1 block text-[15px] leading-tight">Functional<br/>Training</b></span><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#7c69ec]"><Dumbbell size={17}/></span></div>
        <div className="mt-5 grid gap-2 border-t border-white/10 pt-4 text-[9px] text-white/70"><span className="flex items-center gap-2"><MapPin size={11}/> Studio A · Coach Ahmed</span><span className="flex items-center gap-2"><Clock3 size={11}/> 8 spots remaining</span></div>
        <button type="button" tabIndex={-1} className="mt-4 w-full rounded-xl bg-white py-2.5 text-[10px] font-bold text-[#211f28]">Reserve</button>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-2xl border border-[#bfe8d3] bg-[#e7f8ef] p-3 text-[#147554]"><span className="grid h-7 w-7 place-items-center rounded-full bg-white"><Check size={13}/></span><span><b className="block text-[10px]">Reservation confirmed</b><small className="text-[8px] text-[#3f8269]">Tuesday · 18:30</small></span></div>
      <div className="mt-auto rounded-2xl border border-dashed border-[#b9b2d8] bg-white/70 p-3 text-center"><div className="flex items-center justify-center gap-1.5 text-[8px] font-bold uppercase tracking-[.13em] text-[#6b58dc]"><CalendarDays size={10}/>{title}</div><p className="mt-1 text-[8px] text-[#77727d]">{description}</p>{process.env.NODE_ENV === "development" && <code className="mt-1.5 block text-[7px] text-[#9a96a0]">Add public/product/mobile/reservation-loop.mp4</code>}</div>
    </div>
  );
}

export function MobileAppVideo({ src, webmSrc, poster, fallbackTitle, fallbackDescription, className = "", onReady, enabled = true }: MobileAppVideoProps) {
  const container = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = container.current;
    const player = video.current;
    if (!node || !player || failed || reducedMotion) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) player.play().catch(() => undefined);
      else player.pause();
    }, { rootMargin: "240px 0px", threshold: .05 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [failed, reducedMotion]);

  return (
    <div ref={container} className={`relative h-full w-full overflow-hidden bg-[#f7f6fa] ${className}`}>
      {enabled && !failed && (
        <video
          ref={video}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
          onCanPlay={() => { setReady(true); onReady?.(); }}
          onError={() => { setFailed(true); setReady(false); }}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      )}
      {!ready && <ReservationPlaceholder title={fallbackTitle} description={fallbackDescription} />}
      <div className="pointer-events-none absolute left-1/2 top-2.5 z-20 h-5 w-[34%] -translate-x-1/2 rounded-full bg-[#17161c]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-2.5 left-1/2 z-20 h-1 w-[28%] -translate-x-1/2 rounded-full bg-black/35" aria-hidden="true" />
      {ready && <span className="absolute right-3 top-10 z-20 grid h-7 w-7 place-items-center rounded-full bg-white/85 text-[#218f68] shadow-sm backdrop-blur"><BadgeCheck size={14}/></span>}
    </div>
  );
}
