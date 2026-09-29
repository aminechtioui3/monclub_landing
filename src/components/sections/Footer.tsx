import { Github, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const columns = [
  { title: "Product", links: ["Members", "Memberships", "Access Control", "Payments", "Planning", "Staff", "Analytics", "Notifications", "WiGO TV", "Mobile App"] },
  { title: "Solutions", links: ["Gym Owners", "Reception", "Coaches", "Members", "Multi-Gym"] },
  { title: "Company", links: ["About", "Contact", "Partners"] },
  { title: "Resources", links: ["Help", "Documentation", "Support", "Request Demo"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security"] },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-[#19181e] pb-10 pt-20 text-white"><div className="site-container"><div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.15fr_2fr]"><div><Logo inverse/><p className="mt-6 max-w-[320px] text-sm leading-6 text-white/48">The connected operating system for modern gyms, their teams and their members.</p><div className="mt-8 flex gap-2">{[{i:Linkedin,l:"LinkedIn"},{i:Instagram,l:"Instagram"},{i:Github,l:"GitHub"}].map(item=><a href="#" aria-label={`${item.l} placeholder`} key={item.l} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-white/25 hover:text-white"><item.i size={16}/></a>)}</div></div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">{columns.map(column=><div key={column.title}><h2 className="text-[10px] font-semibold uppercase tracking-[.14em] text-white/38">{column.title}</h2><ul className="mt-5 space-y-3">{column.links.map(link=><li key={link}><a href={link === "Request Demo" ? "#contact" : "#"} className="text-sm text-white/68 transition hover:text-white">{link}</a></li>)}</ul></div>)}</div></div>
      <div className="flex flex-col gap-3 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} MonClub. All rights reserved.</p><p>Made for better gym days.</p></div></div></footer>
  );
}
