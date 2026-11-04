"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={cn(
        "focus-ring fixed z-40 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius)] border border-[var(--line)] bg-cream text-ink shadow-lg transition",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2",
      )}
      style={{
        color: "#0c1222",
        backgroundColor: "#faf8f4",
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
        right: "calc(1.25rem + env(safe-area-inset-right, 0px))",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="h-4 w-4" stroke="#0c1222" />
    </button>
  );
}
