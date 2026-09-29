"use client";

import { motion } from "motion/react";
import type { ProductFeature } from "@/data/productFeatures";

export function ActiveFeatureStack({ features, primaryId }: { features: ProductFeature[]; primaryId: string }) {
  const secondary = features.filter((feature) => feature.id !== primaryId).slice(-4);
  if (!secondary.length) return null;
  return (
    <div className="absolute -bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center sm:-bottom-8">
      {secondary.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div layout initial={{ opacity: 0, y: 14, scale: .85 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: .8 }} transition={{ type: "spring", stiffness: 300, damping: 24 }} key={feature.id} className={`flex items-center gap-2 rounded-xl border border-white bg-white px-3 py-2 shadow-lg ${index ? "-ml-2" : ""}`} style={{ zIndex: index }}>
            <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ color: feature.accent, background: `${feature.accent}16` }}><Icon size={14}/></span><span className="hidden whitespace-nowrap text-[10px] font-semibold sm:block">{feature.shortLabel}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
