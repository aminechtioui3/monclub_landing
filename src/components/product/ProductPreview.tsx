"use client";

import { AnimatePresence, motion } from "motion/react";
import type { ProductFeature } from "@/data/productFeatures";
import { ProductMockup } from "@/components/ui/ProductMockup";
import { ActiveFeatureStack } from "./ActiveFeatureStack";

export function ProductPreview({ feature, selected }: { feature?: ProductFeature; selected: ProductFeature[] }) {
  const featureId = feature?.id ?? "overview";
  return (
    <div className="relative mx-auto mt-12 max-w-[1040px] pb-7 sm:pb-10">
      <div className="absolute inset-x-[9%] bottom-0 top-[15%] rounded-[45%] bg-[radial-gradient(circle,rgba(113,92,229,.18),transparent_67%)] blur-3xl"/>
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-50" viewBox="0 0 1000 650" aria-hidden="true">
        <motion.path d="M110 590 C 220 500, 330 610, 500 530 S 790 540, 890 590" fill="none" stroke="url(#builderLine)" strokeWidth="1.5" strokeDasharray="5 6" initial={{ pathLength: 0 }} animate={{ pathLength: selected.length ? 1 : 0 }} transition={{ duration: .8 }}/>
        <defs><linearGradient id="builderLine"><stop stopColor="#6c5ce7" stopOpacity="0"/><stop offset=".5" stopColor="#6c5ce7"/><stop offset="1" stopColor="#ed7c54" stopOpacity="0"/></linearGradient></defs>
      </svg>
      <AnimatePresence mode="popLayout">
        <motion.div key={featureId} initial={{ opacity: 0, x: 32, scale: .975, clipPath: "inset(0 8% 0 0 round 22px)" }} animate={{ opacity: 1, x: 0, scale: 1, clipPath: "inset(0 0% 0 0 round 22px)" }} exit={{ opacity: 0, x: -24, scale: .985 }} transition={{ duration: .55, ease: [.22,1,.36,1] }}>
          <ProductMockup featureId={featureId}/>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence><ActiveFeatureStack features={selected} primaryId={featureId}/></AnimatePresence>
    </div>
  );
}
