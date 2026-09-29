import { ArrowUpRight, Banknote, CreditCard, Landmark, ReceiptText } from "lucide-react";
import { ProductMockup } from "@/components/ui/ProductMockup";
import { Reveal } from "@/components/motion/Reveal";
import { siteLocale } from "@/config/pricing";
import { formatCompactCurrency, formatCurrency } from "@/lib/currency";

export function PaymentsStory() {
  return (
    <section id="payments" className="section-space relative overflow-hidden bg-[#1c1b22] text-white">
      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#8a62ef]/20 blur-[120px]"/>
      <div className="site-container relative"><Reveal><span className="eyebrow !text-[#a99aff]">Payments</span><h2 className="section-heading mt-6 max-w-[900px]">Know exactly where your money goes.</h2><p className="section-copy mt-7 !text-white/55">Every transaction, payment method and outstanding balance—organized into a financial view you can trust.</p></Reveal>
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.35fr_.65fr]"><ProductMockup featureId="payments"/><div className="grid gap-3">
          {[
            { icon: Landmark, label: "Monthly revenue", value: formatCompactCurrency(siteLocale === "fr" ? 48_600 : 16_500, siteLocale), trend: "+8.2%" },
            { icon: CreditCard, label: "Payments today", value: formatCurrency(siteLocale === "fr" ? 1_840 : 620, siteLocale), trend: "+12%" },
            { icon: Banknote, label: "Average revenue / member", value: formatCurrency(siteLocale === "fr" ? 92 : 31, siteLocale), trend: "Live" },
            { icon: ReceiptText, label: "Pending payments", value: formatCurrency(siteLocale === "fr" ? 1_120 : 380, siteLocale), trend: "Review" },
          ].map((item) => <div className="card-hover flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.055] p-4" key={item.label}><span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[.08] text-[#ad9fff]"><item.icon size={18}/></span><span><span className="block text-xs text-white/45">{item.label}</span><b className="mt-1 block text-lg">{item.value}</b></span><span className="ml-auto inline-flex items-center gap-1 text-xs text-[#6bddaa]">{item.trend}<ArrowUpRight size={12}/></span></div>)}
          <p className="mt-3 text-[10px] uppercase tracking-[.12em] text-white/30">Illustrative demo data</p>
        </div></div>
      </div>
    </section>
  );
}
