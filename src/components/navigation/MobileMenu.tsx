"use client";

import { ArrowRight, ChevronRight, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`fixed inset-0 z-[70] bg-[#fbfaf8] p-5 transition duration-300 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`} aria-hidden={!open}>
      <div className={`mx-auto flex h-full max-w-lg flex-col transition duration-300 ${open ? "translate-y-0" : "translate-y-3"}`}>
        <div className="flex items-center justify-between"><Logo/><button onClick={onClose} className="grid h-11 w-11 place-items-center rounded-full border border-black/10" aria-label="Close navigation"><X size={20}/></button></div>
        <nav className="mt-14" aria-label="Mobile navigation">
          {navigation.map((item) => <a href={item.href ?? item.menu?.[0].href ?? "#"} onClick={onClose} className="flex items-center justify-between border-b border-black/10 py-5 text-2xl font-semibold tracking-[-.04em]" key={item.label}>{item.label}<ChevronRight size={20}/></a>)}
        </nav>
        <div className="mt-auto grid gap-3 pb-4"><a href="#contact" onClick={onClose} className="button-primary w-full">Request a demo <ArrowRight size={17}/></a><a href="#" className="button-secondary w-full">Log in</a></div>
      </div>
    </div>
  );
}
