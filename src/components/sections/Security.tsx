import { ArchiveRestore, Fingerprint, KeyRound, LockKeyhole, ScrollText, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const security = [
  { icon: Fingerprint, title: "Secure authentication", copy: "Designed to keep account access controlled and traceable." },
  { icon: KeyRound, title: "Role-based permissions", copy: "Give every person exactly the tools and data their role requires." },
  { icon: LockKeyhole, title: "Encrypted communication", copy: "Protect information while it moves between connected experiences." },
  { icon: ScrollText, title: "Activity logs", copy: "Follow important actions with a clear operational history." },
  { icon: ArchiveRestore, title: "Backups", copy: "Support operational continuity with dependable data safeguards." },
  { icon: ShieldCheck, title: "Reliable access control", copy: "Keep entry decisions aligned to the latest membership status." },
];

export function Security() {
  return (
    <section className="section-space bg-[#1d1c23] text-white"><div className="site-container"><Reveal className="mx-auto max-w-[850px] text-center"><span className="eyebrow !text-[#aa9cff]">Trust by design</span><h2 className="section-heading mt-6">Your gym data.<br/>Protected.</h2><p className="section-copy mx-auto mt-7 !text-white/55">Thoughtful controls help your team work confidently without slowing down everyday operations.</p></Reveal>
      <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{security.map((item,index)=><div key={item.title} className={`card-hover rounded-[24px] border border-white/10 bg-white/[.045] p-7 ${index===0||index===5 ? "lg:col-span-1 lg:row-span-2" : ""}`}><span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[.06] text-[#aa9cff]"><item.icon size={19}/></span><h3 className="mt-8 text-xl font-semibold tracking-[-.04em]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/48">{item.copy}</p></div>)}</div>
      <p className="mt-7 text-center text-[10px] uppercase tracking-[.11em] text-white/30">Specific certifications and compliance claims intentionally omitted pending verification</p>
    </div></section>
  );
}
