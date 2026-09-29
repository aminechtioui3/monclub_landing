"use client";

import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { productFeatures } from "@/data/productFeatures";
import { Reveal } from "@/components/motion/Reveal";
import { ProductFeatureChip } from "./ProductFeatureChip";
import { ProductPreview } from "./ProductPreview";
import { pricing, siteLocale } from "@/config/pricing";
import { formatSubscriptionPrice } from "@/lib/currency";

const copy = {
  en: {
    eyebrow: "Make it yours",
    title: "Build the MonClub your gym needs.",
    description: "Turn on the tools your gym needs. Every feature is included, and your price always stays the same.",
    singular: "tool activated",
    plural: "tools activated",
    reset: "Reset",
    unchanged: "Price unchanged",
    micro: "Your gym. Your setup. One fixed price.",
  },
  fr: {
    eyebrow: "Personnalisez-le",
    title: "Construisez le MonClub dont votre salle a besoin.",
    description: "Activez uniquement les outils dont vous avez besoin. Toutes les fonctionnalités sont incluses et votre prix reste toujours le même.",
    singular: "outil activé",
    plural: "outils activés",
    reset: "Réinitialiser",
    unchanged: "Prix inchangé",
    micro: "Votre salle. Votre configuration. Un prix fixe.",
  },
} as const;

export function ProductBuilder() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["members"]);
  const [primaryId, setPrimaryId] = useState("members");
  const selected = useMemo(() => selectedIds.map((id) => productFeatures.find((feature) => feature.id === id)).filter((feature): feature is (typeof productFeatures)[number] => Boolean(feature)), [selectedIds]);
  const primary = productFeatures.find((feature) => feature.id === primaryId);
  const localized = copy[siteLocale];
  const price = pricing[siteLocale];

  const toggle = (id: string) => {
    if (selectedIds.includes(id)) {
      const next = selectedIds.filter((item) => item !== id);
      setSelectedIds(next);
      if (primaryId === id) setPrimaryId(next.at(-1) ?? "overview");
    } else {
      setSelectedIds((items) => [...items, id]);
      setPrimaryId(id);
    }
  };

  return (
    <section id="product" className="section-space relative overflow-hidden bg-[#f0eee9]">
      <div className="absolute inset-0 soft-grid opacity-55"/>
      <div className="site-container relative">
        <Reveal className="mx-auto max-w-[900px] text-center"><span className="eyebrow">{localized.eyebrow}</span><h2 className="section-heading mt-6">{localized.title}</h2><p className="section-copy mx-auto mt-7">{localized.description}</p></Reveal>
        <div className="mx-auto mt-11 flex max-w-[1050px] flex-wrap justify-center gap-2.5" aria-label="Choose MonClub tools">
          {productFeatures.map((feature) => <ProductFeatureChip key={feature.id} feature={feature} active={selectedIds.includes(feature.id)} onToggle={() => toggle(feature.id)} />)}
        </div>
        <div className="mx-auto mt-8 grid max-w-[780px] overflow-hidden rounded-[24px] border border-black/[.09] bg-white/80 shadow-[0_16px_45px_rgba(31,28,49,.07)] backdrop-blur-sm sm:grid-cols-[1fr_1px_1fr]">
          <div className="flex min-h-[132px] flex-col justify-center px-6 py-5 text-left sm:px-8">
            <span className="text-sm font-semibold"><b className="text-[#6b57df]">{selectedIds.length}</b> {selectedIds.length === 1 ? localized.singular : localized.plural}</span>
            <button onClick={() => { setSelectedIds([]); setPrimaryId("overview"); }} disabled={!selectedIds.length} className="mt-3 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-[#706c77] transition hover:text-black disabled:cursor-not-allowed disabled:opacity-35"><RotateCcw size={13}/> {localized.reset}</button>
            <span className="mt-3 text-[11px] text-[#8a8690]">{localized.micro}</span>
          </div>
          <span className="hidden bg-black/10 sm:block" aria-hidden="true" />
          <div className="flex min-h-[132px] items-center justify-between gap-5 border-t border-black/10 px-6 py-5 sm:border-t-0 sm:px-8">
            <div><span className="block text-[10px] font-bold uppercase tracking-[.15em] text-[#6b57df]">{price.fixedLabel}</span><strong className="mt-1 block text-[clamp(2.6rem,5vw,4.2rem)] leading-none tracking-[-.065em]">{formatSubscriptionPrice(siteLocale)}</strong><span className="mt-1.5 block text-xs text-[#716d78]">{price.interval}</span></div>
            <div className="max-w-[150px] text-right text-[11px] leading-5 text-[#77727d]"><b className="block text-[#218f68]">{localized.unchanged}</b>{price.includedLabel}</div>
          </div>
        </div>
        <ProductPreview feature={primary} selected={selected}/>
      </div>
    </section>
  );
}
