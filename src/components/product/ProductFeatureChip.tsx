import { Check, Plus } from "lucide-react";
import type { ProductFeature } from "@/data/productFeatures";

export function ProductFeatureChip({ feature, active, onToggle }: { feature: ProductFeature; active: boolean; onToggle: () => void }) {
  const Icon = feature.icon;
  return (
    <button type="button" aria-pressed={active} onClick={onToggle} className={`group flex min-h-12 items-center gap-2.5 rounded-full border px-4 text-sm font-semibold transition duration-300 ${active ? "border-[#7663e7] bg-[#201f27] text-white shadow-[0_10px_22px_rgba(36,31,64,.2)]" : "border-black/10 bg-white text-[#55515d] hover:-translate-y-0.5 hover:border-[#8170e8]/40 hover:text-black"}`}>
      <Icon size={16} strokeWidth={1.9}/>{feature.shortLabel}<span className={`grid h-5 w-5 place-items-center rounded-full transition ${active ? "bg-white/15" : "bg-[#f1eef7] group-hover:bg-[#e8e3ff]"}`}>{active ? <Check size={12}/> : <Plus size={12}/>}</span>
    </button>
  );
}
