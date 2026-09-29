import { metrics } from "@/data/metrics";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { siteLocale } from "@/config/pricing";

export function Metrics() {
  const items = metrics(siteLocale);
  return (
    <section className="section-space relative overflow-hidden bg-[#705ce8] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,.16),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(239,125,78,.24),transparent_35%)]"/>
      <div className="site-container relative">
        <Reveal><span className="eyebrow !text-white/75">{siteLocale === "fr" ? "L’échelle MonClub" : "MonClub at work"}</span><h2 className="section-heading mt-6 max-w-[900px]">{siteLocale === "fr" ? <>Une plateforme.<br/>Un impact réel.</> : <>One platform.<br/>Real operational scale.</>}</h2></Reveal>
        <div className="mt-16 grid grid-cols-2 border-y border-white/20 lg:grid-cols-4">
          {items.map((metric, index) => (
            <div className={`relative flex min-h-[220px] flex-col justify-center px-5 py-9 sm:px-8 ${index % 2 ? "border-l border-white/20" : ""} ${index > 1 ? "border-t border-white/20 lg:border-t-0" : ""} ${index === 2 ? "lg:border-l" : ""}`} key={metric.label}>
              <div className="text-[clamp(3rem,6vw,5.6rem)] font-semibold leading-none tracking-[-.075em]"><AnimatedCounter value={metric.value} suffix={metric.suffix} locale={siteLocale === "fr" ? "fr-FR" : "en-US"}/></div>
              <div className="mt-5 max-w-[190px] text-[11px] font-bold uppercase leading-5 tracking-[.12em] text-white/70">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
