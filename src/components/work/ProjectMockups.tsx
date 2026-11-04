import Image from "next/image";
import { cn } from "@/lib/utils";

/** Conceptual product UI compositions — not screenshots of live client products. */

export function CareFlowMock({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-md)] border border-[#d7e3ef] bg-[#f4f8fb] shadow-xl", className)}>
      <div className="flex items-center justify-between border-b border-[#d7e3ef] bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#1677F8]" />
          <span className="text-xs font-semibold tracking-wide text-[#0B1020]">CareFlow</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-[#5b657a]">Clinic ops · Conceptual</span>
      </div>
      <div className="grid gap-3 p-4 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-2">
          {["08:30  Intake — Room 2", "09:15  Follow-up — Dr. Hale", "10:00  Lab results review"].map((row) => (
            <div key={row} className="rounded-md border border-[#d7e3ef] bg-white px-3 py-2 text-xs text-[#3d4658]">
              {row}
            </div>
          ))}
        </div>
        <div className="rounded-md border border-[#d7e3ef] bg-white p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#0B1020]">Care board</span>
            <span className="rounded bg-[#e8f1ff] px-2 py-0.5 text-[10px] font-semibold text-[#1677F8]">Today</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Waiting", "In care", "Follow-up"].map((col, i) => (
              <div key={col} className="rounded-md bg-[#f4f8fb] p-2">
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-[#5b657a]">{col}</div>
                <div className={cn("h-14 rounded bg-white border border-[#d7e3ef]", i === 1 && "border-[#1677F8]/40")} />
                <div className="mt-2 h-10 rounded bg-white border border-[#d7e3ef]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HavenlyMock({ className }: { className?: string }) {
  const listings = [
    { t: "North Glass House", p: "Harbor District", pos: "object-[20%_40%]" },
    { t: "Cedar Courtyard", p: "Hillside", pos: "object-[55%_35%]" },
    { t: "Atlas Lofts", p: "Warehouse Row", pos: "object-[80%_50%]" },
  ] as const;

  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-md)] border border-[#e5ddd2] bg-[#f7f3ee] shadow-xl", className)}>
      <div className="flex items-center justify-between border-b border-[#e5ddd2] px-4 py-3">
        <span className="font-display text-sm tracking-wide text-[#1c1814]">Havenly</span>
        <span className="text-[10px] uppercase tracking-wider text-[#7a7166]">Marketplace · Conceptual</span>
      </div>
      <div className="grid gap-3 p-4 md:grid-cols-3">
        {listings.map((card) => (
          <div key={card.t} className="overflow-hidden rounded-md border border-[#e5ddd2] bg-white">
            <div className="relative h-20 overflow-hidden bg-[#c9b8a4]">
              <Image
                src="/images/projects/havenly-bg.jpg"
                alt=""
                fill
                className={cn("object-cover", card.pos)}
                sizes="160px"
              />
            </div>
            <div className="p-3">
              <div className="text-xs font-semibold text-[#1c1814]">{card.t}</div>
              <div className="mt-1 text-[10px] text-[#7a7166]">{card.p}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LedgerlyMock({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-md)] border border-[#d9e5df] bg-[#0f1a17] text-white shadow-xl", className)}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold tracking-wide">Ledgerly</span>
        <span className="text-[10px] uppercase tracking-wider text-white/50">Finance · Conceptual</span>
      </div>
      <div className="grid gap-3 p-4 md:grid-cols-[1fr_0.9fr]">
        <div className="rounded-md border border-white/10 bg-white/5 p-4">
          <div className="text-[10px] uppercase tracking-wider text-white/50">Available balance</div>
          <div className="mt-2 font-display text-3xl tracking-tight">$248,920.14</div>
          <div className="mt-4 h-16 rounded bg-gradient-to-r from-[#22c55e]/30 via-[#20C9F4]/20 to-transparent" />
        </div>
        <div className="space-y-2">
          {["Wire sent · Acme Ops", "Card settle · Cloud vendor", "Deposit · Merchant"].map((row) => (
            <div key={row} className="flex items-center justify-between rounded-md border border-white/10 px-3 py-2 text-xs text-white/80">
              <span>{row}</span>
              <span className="text-white/40">—</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GenericProjectMock({
  name,
  accent,
  className,
}: {
  name: string;
  accent: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-white shadow-xl", className)}>
      <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: accent }} />
          <span className="text-xs font-semibold text-ink">{name}</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-slate">Conceptual</span>
      </div>
      <div className="grid gap-3 p-4 md:grid-cols-2">
        <div className="space-y-2">
          <div className="h-3 w-2/3 rounded bg-paper-deep" />
          <div className="h-3 w-full rounded bg-paper" />
          <div className="h-3 w-5/6 rounded bg-paper" />
          <div className="mt-4 h-24 rounded-md border border-[var(--line)] bg-paper" style={{ boxShadow: `inset 0 0 0 1px ${accent}22` }} />
        </div>
        <div className="rounded-md border border-[var(--line)] bg-cream p-3">
          <div className="mb-3 h-2 w-20 rounded" style={{ background: accent }} />
          <div className="space-y-2">
            <div className="h-8 rounded bg-white border border-[var(--line)]" />
            <div className="h-8 rounded bg-white border border-[var(--line)]" />
            <div className="h-8 rounded bg-white border border-[var(--line)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
