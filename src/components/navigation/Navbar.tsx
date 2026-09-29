"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setActiveMenu(null); setMobileOpen(false); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <header className={`fixed left-1/2 top-3 z-[60] w-[min(calc(100%_-_24px),1220px)] -translate-x-1/2 rounded-2xl border transition-all duration-300 ${scrolled ? "border-black/10 bg-white/88 py-2 shadow-[0_10px_35px_rgba(30,28,45,.1)] backdrop-blur-xl" : "border-transparent bg-white/55 py-3 backdrop-blur-md"}`}>
        <div className="flex items-center justify-between px-3.5 sm:px-5">
          <a href="#top" className="shrink-0" aria-label="MonClub home"><Logo/></a>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex" aria-label="Main navigation" onMouseLeave={() => setActiveMenu(null)}>
            {navigation.map((item) => (
              <div className="relative" key={item.label} onMouseEnter={() => item.menu && setActiveMenu(item.label)}>
                {item.menu ? (
                  <button className="flex h-10 items-center gap-1 rounded-full px-3.5 text-sm font-medium text-[#49464f] transition hover:bg-black/[.045] hover:text-black" aria-haspopup="menu" aria-expanded={activeMenu === item.label} onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)} onFocus={() => setActiveMenu(item.label)}>{item.label}<ChevronDown size={13} className={`transition ${activeMenu === item.label ? "rotate-180" : ""}`}/></button>
                ) : <a className="flex h-10 items-center rounded-full px-3.5 text-sm font-medium text-[#49464f] transition hover:bg-black/[.045] hover:text-black" href={item.href}>{item.label}</a>}
                {item.menu && <MegaMenu items={item.menu} visible={activeMenu === item.label} onNavigate={() => setActiveMenu(null)} />}
              </div>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex"><a className="px-3 text-sm font-semibold" href="#">Log in</a><a className="button-primary !min-h-10 !px-4 !text-sm" href="#contact">Request a demo <ArrowRight size={15}/></a></div>
          <button onClick={() => setMobileOpen(true)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 lg:hidden" aria-label="Open navigation"><Menu size={19}/></button>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)}/>
    </>
  );
}
