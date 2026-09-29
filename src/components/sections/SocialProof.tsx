import { Reveal } from "@/components/motion/Reveal";

const clubs = ["NORTH/45", "ATLAS FITNESS", "STUDIO FORMA", "PULSE CLUB", "THE TRAINING ROOM", "MOTION HOUSE", "URBAN LIFT"];

export function SocialProof() {
  const logos = [...clubs, ...clubs];
  return (
    <section className="overflow-hidden border-y border-black/[.07] bg-white py-20" aria-labelledby="proof-heading">
      <Reveal><h2 id="proof-heading" className="text-center text-sm font-semibold text-[#736f7a]">Trusted by ambitious gyms</h2></Reveal>
      <div className="relative mt-10 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-track">{logos.map((club, index) => <div key={`${club}-${index}`} className="mx-6 flex h-14 min-w-[185px] items-center justify-center rounded-xl border border-black/[.07] bg-[#fbfaf8] px-6 text-xs font-[760] tracking-[.08em] text-[#4f4b55] sm:mx-9">{club}</div>)}</div>
      </div>
      <p className="mt-7 text-center text-[10px] uppercase tracking-[.12em] text-[#aaa6af]">Placeholder club marks · ready for verified customer logos</p>
    </section>
  );
}
