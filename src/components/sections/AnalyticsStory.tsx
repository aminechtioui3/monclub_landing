import { ArrowUpRight, BarChart3, CircleGauge, TrendingUp, UsersRound } from "lucide-react";
import { ProductMockup } from "@/components/ui/ProductMockup";
import { Reveal } from "@/components/motion/Reveal";
import { siteLocale } from "@/config/pricing";
import { formatCompactCurrency } from "@/lib/currency";

export function AnalyticsStory() {
  return (
    <section className="section-space bg-white">
      <div className="site-container"><Reveal className="mx-auto max-w-[860px] text-center"><span className="eyebrow">Analytics</span><h2 className="section-heading mt-6">Understand your gym.</h2><p className="section-copy mx-auto mt-7">See member growth, retention, attendance, revenue and subscription distribution in one shared language.</p></Reveal>
        <div className="relative mt-16"><ProductMockup featureId="analytics"/><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[{i:UsersRound,l:"Members",v:"1,284",d:"+48 this month"},{i:CircleGauge,l:"Retention",v:"91.8%",d:"Stable"},{i:BarChart3,l:"Attendance",v:"6,840",d:"+12.4%"},{i:TrendingUp,l:"Revenue",v:formatCompactCurrency(siteLocale === "fr" ? 48_600 : 16_500, siteLocale),d:"+8.2%"}].map(item=><div className="card-hover rounded-2xl border border-black/[.08] bg-[#faf9f7] p-5" key={item.l}><div className="flex items-center justify-between text-xs text-[#79757f]"><span className="flex items-center gap-2"><item.i size={14}/>{item.l}</span><ArrowUpRight size={13}/></div><div className="mt-5 text-2xl font-semibold tracking-[-.05em]">{item.v}</div><div className="mt-1 text-[10px] text-[#3ca277]">{item.d}</div></div>)}</div><p className="mt-4 text-center text-[10px] uppercase tracking-[.12em] text-[#aaa5af]">Illustrative demo data</p></div>
      </div>
    </section>
  );
}
