"use client";

import { ArrowUpRight } from "lucide-react";

type MenuItem = { label: string; description: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; href: string };

export function MegaMenu({ items, visible, onNavigate }: { items: readonly MenuItem[]; visible: boolean; onNavigate: () => void }) {
  return (
    <div className={`absolute left-1/2 top-[calc(100%_+_12px)] w-[610px] -translate-x-1/2 rounded-[24px] border border-black/10 bg-white/95 p-3 shadow-[0_28px_80px_rgba(27,24,44,.16)] backdrop-blur-xl transition duration-200 ${visible ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`} role="menu">
      <div className="grid grid-cols-2 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a className="group flex gap-3 rounded-2xl p-4 transition hover:bg-[#f5f2ff]" href={item.href} key={item.label} role="menuitem" onClick={onNavigate}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#e7e2f7] bg-white text-[#6653db]"><Icon size={18} strokeWidth={1.8}/></span>
              <span className="min-w-0"><span className="flex items-center gap-1 text-sm font-semibold">{item.label}<ArrowUpRight size={13} className="opacity-0 transition group-hover:opacity-100" /></span><span className="mt-1 block text-xs leading-5 text-[#777380]">{item.description}</span></span>
            </a>
          );
        })}
      </div>
      <a href="#product" onClick={onNavigate} className="mt-2 flex items-center justify-between rounded-2xl bg-[#1c1b22] px-5 py-3.5 text-sm text-white"><span><b>Explore MonClub</b><span className="ml-2 text-white/55">One platform, every gym workflow.</span></span><ArrowUpRight size={16}/></a>
    </div>
  );
}
