import { Activity } from "lucide-react";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap" aria-label="MonClub home">
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${inverse ? "bg-white text-[#17161c]" : "bg-[#17161c] text-white"}`}>
        <Activity size={19} strokeWidth={2.5} aria-hidden="true" />
      </span>
      <span className="text-[1.08rem] font-[740] tracking-[-.035em]">MonClub</span>
    </span>
  );
}
