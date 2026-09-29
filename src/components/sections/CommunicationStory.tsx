import { BellRing, Megaphone, MessageCircleMore } from "lucide-react";
import { PhoneMockup, ProductMockup } from "@/components/ui/ProductMockup";
import { Reveal } from "@/components/motion/Reveal";

export function CommunicationStory() {
  return (
    <section id="communication" className="section-space relative overflow-hidden bg-[#efeee9]">
      <div className="site-container grid items-center gap-16 lg:grid-cols-[.78fr_1.22fr]">
        <Reveal><span className="eyebrow">Communication</span><h2 className="section-heading mt-6">Stay connected with every member.</h2><p className="section-copy mt-7">Send useful reminders and club news at the right moment, while members keep their gym experience close.</p><div className="mt-9 space-y-2">{[{i:BellRing,l:"Renewal reminder",d:"Sent automatically · Today 09:00"},{i:MessageCircleMore,l:"Class notification",d:"Yoga Flow starts in 1 hour"},{i:Megaphone,l:"Gym announcement",d:"New opening hours published"}].map(item=><div className="flex items-center gap-3 rounded-2xl border border-black/[.07] bg-white/70 p-3.5" key={item.l}><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#ece8ff] text-[#6a56dd]"><item.i size={16}/></span><span><b className="block text-xs">{item.l}</b><span className="text-[10px] text-[#85808c]">{item.d}</span></span></div>)}</div></Reveal>
        <div className="relative py-16"><div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(116,93,230,.2),transparent_64%)] blur-2xl"/><ProductMockup featureId="notifications" className="relative z-10 translate-x-[6%]"/><PhoneMockup className="absolute -bottom-1 left-[4%] z-20 w-[clamp(135px,17vw,210px)] -rotate-2"/></div>
      </div>
    </section>
  );
}
