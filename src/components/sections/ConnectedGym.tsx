import { Building2, CreditCard, DoorOpen, MonitorPlay, Smartphone, UserRound, UsersRound } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/motion/Reveal";

const nodes = [
  { label: "Member", icon: UserRound, x: 11, y: 20 }, { label: "Reception", icon: UsersRound, x: 7, y: 68 },
  { label: "Coach", icon: UsersRound, x: 31, y: 87 }, { label: "Owner", icon: Building2, x: 69, y: 87 },
  { label: "Turnstile", icon: DoorOpen, x: 89, y: 68 }, { label: "Payment", icon: CreditCard, x: 91, y: 20 },
  { label: "Mobile App", icon: Smartphone, x: 68, y: 5 }, { label: "WiGO TV", icon: MonitorPlay, x: 32, y: 5 },
];

export function ConnectedGym() {
  return (
    <section id="connected-system" className="section-space overflow-hidden bg-[#f0eee9]">
      <div className="site-container"><Reveal className="mx-auto max-w-[880px] text-center"><span className="eyebrow">Connected gym system</span><h2 className="section-heading mt-6">Every moment moves through one system.</h2><p className="section-copy mx-auto mt-7">Access, attendance, payments and communication become a single continuous flow.</p></Reveal>
        <div className="relative mx-auto mt-14 aspect-[1/1] max-w-[900px] sm:aspect-[16/10]">
          <svg viewBox="0 0 1000 620" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs><linearGradient id="network" x1="0" x2="1"><stop stopColor="#6c5ce7" stopOpacity=".15"/><stop offset=".5" stopColor="#6c5ce7"/><stop offset="1" stopColor="#ed7b51" stopOpacity=".25"/></linearGradient></defs>
            {nodes.map((node, index) => { const x = node.x * 10; const y = node.y * 6.2; const id = `flow-${index}`; return <g key={node.label}><path id={id} d={`M 500 310 Q ${500 + (x-500)*.35} ${310 + (y-310)*.15} ${x} ${y}`} fill="none" stroke="url(#network)" strokeWidth="1.5" strokeDasharray="5 7"/><circle r="4" fill="#7d6aeb"><animateMotion dur={`${3.2 + index * .21}s`} repeatCount="indefinite"><mpath href={`#${id}`}/></animateMotion></circle></g>; })}
          </svg>
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-[28px] bg-[#1e1c24] p-6 text-white shadow-[0_30px_70px_rgba(31,27,49,.3)] sm:p-9"><Logo inverse/><div className="mt-4 text-[10px] uppercase tracking-[.12em] text-white/45">Central operating layer</div><div className="mt-1 whitespace-nowrap text-lg font-semibold">Live & connected</div></div>
          {nodes.map((node) => <div key={node.label} className="absolute z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: `${node.x}%`, top: `${node.y}%` }}><div className="card-hover flex flex-col items-center gap-2 rounded-2xl border border-black/[.08] bg-white p-3 shadow-lg sm:min-w-[110px] sm:p-4"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eeeaff] text-[#6854dc]"><node.icon size={17}/></span><span className="whitespace-nowrap text-[9px] font-semibold sm:text-xs">{node.label}</span></div></div>)}
        </div>
        <div className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-2 text-xs text-[#736f78]"><span className="rounded-full bg-white px-4 py-2">Member → Access → Attendance</span><span className="rounded-full bg-white px-4 py-2">Payment → Transaction → Owner dashboard</span></div>
      </div>
    </section>
  );
}
