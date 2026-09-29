import type { ReactNode } from "react";

export function FloatingUiCard({ icon, title, detail, className = "", tone = "purple" }: { icon: ReactNode; title: string; detail: string; className?: string; tone?: "purple" | "green" | "orange" }) {
  const tones = { purple: "bg-[#f0edff] text-[#6653db]", green: "bg-[#e8f7ef] text-[#218f68]", orange: "bg-[#fff0e8] text-[#d66c39]" };
  return (
    <div className={`absolute flex items-center gap-3 rounded-2xl border border-white/90 bg-white/92 p-3 pr-5 shadow-[0_24px_58px_rgba(30,27,47,.2),0_4px_12px_rgba(30,27,47,.08)] backdrop-blur-md ${className}`}>
      <span className={`grid h-10 w-10 place-items-center rounded-xl ${tones[tone]}`}>{icon}</span>
      <span><b className="block whitespace-nowrap text-xs">{title}</b><span className="mt-0.5 block whitespace-nowrap text-[10px] text-[#85818d]">{detail}</span></span>
    </div>
  );
}
