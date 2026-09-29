import { ArrowRight, PlayCircle } from "lucide-react";
import { ProductMockup } from "@/components/ui/ProductMockup";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#715de8] px-3 py-3 text-white sm:px-5 sm:py-5">
      <div className="noise relative min-h-[760px] overflow-hidden rounded-[34px] bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(243,128,80,.34),transparent_35%)] px-5 pt-24 text-center sm:px-10 sm:pt-32">
        <div className="relative z-10 mx-auto max-w-[970px]"><span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.12em]">A better gym day starts here</span><h2 className="mt-8 text-[clamp(3.7rem,8vw,7.8rem)] font-[700] leading-[.88] tracking-[-.075em]">Your gym deserves better software.</h2><p className="mx-auto mt-7 max-w-[620px] text-[clamp(1.05rem,1.7vw,1.25rem)] leading-7 text-white/70">See how MonClub can simplify the way your gym operates.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a className="button-primary !bg-white !text-[#1d1b24]" href="mailto:hello@monclub.app?subject=MonClub%20demo%20request">Request a demo <ArrowRight size={17}/></a><a className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 font-semibold transition hover:-translate-y-0.5 hover:bg-white/15" href="#product"><PlayCircle size={17}/> Explore the platform</a></div></div>
        <div className="relative mx-auto mt-20 w-[min(1100px,115%)] translate-y-[14%]"><div className="absolute inset-[10%] rounded-full bg-white/25 blur-[90px]"/><ProductMockup featureId="overview" className="relative"/></div>
      </div>
    </section>
  );
}
