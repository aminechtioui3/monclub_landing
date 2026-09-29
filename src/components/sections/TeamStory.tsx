import { CalendarDays, KeyRound, ShieldCheck, UserRoundCog } from "lucide-react";
import { ProductMockup } from "@/components/ui/ProductMockup";
import { Reveal } from "@/components/motion/Reveal";

export function TeamStory() {
  return (
    <section className="section-space overflow-hidden bg-[#f6f3ff]">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <Reveal><span className="eyebrow">Team</span><h2 className="section-heading mt-6">Your entire team. Organized.</h2><p className="section-copy mt-7">Employees, coaches, roles, permissions and schedules stay in sync—without slowing anyone down.</p><div className="mt-9 grid grid-cols-2 gap-3">{[{i:UserRoundCog,l:"Staff profiles"},{i:CalendarDays,l:"Shared planning"},{i:ShieldCheck,l:"Clear roles"},{i:KeyRound,l:"Fine permissions"}].map((item)=><div className="flex items-center gap-2 rounded-xl bg-white p-3 text-xs font-semibold shadow-sm" key={item.l}><item.i size={15} className="text-[#6b58dc]"/>{item.l}</div>)}</div></Reveal>
        <div className="relative pb-16 pt-10"><div className="absolute inset-0 rounded-full bg-[#cfc5ff]/30 blur-3xl"/><ProductMockup featureId="staff" className="relative z-10 rotate-[1.2deg]"/><ProductMockup featureId="planning" compact className="absolute -bottom-5 -left-8 z-20 hidden w-[58%] -rotate-[3deg] lg:block"/></div>
      </div>
    </section>
  );
}
