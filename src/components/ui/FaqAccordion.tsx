"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { question: string; answer: string };

export function FaqAccordion({
  items,
  tone = "light",
}: {
  items: Item[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "divide-y border",
        dark
          ? "divide-white/10 border-white/10 bg-navy-soft"
          : "divide-[var(--line)] border-[var(--line)] bg-cream",
      )}
    >
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className={cn(
                  "focus-ring flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-[0.95rem] font-semibold sm:gap-4 sm:px-5 sm:text-base md:px-6",
                  dark ? "text-white" : "text-ink",
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="pr-1">{item.question}</span>
                <span
                  className={cn(
                    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius)]",
                    dark ? "bg-white/5" : "bg-paper",
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition",
                      dark ? "text-gray" : "text-slate",
                      isOpen && "rotate-180 text-blue",
                    )}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(
                "px-4 pb-5 text-sm leading-relaxed sm:px-5 md:px-6",
                dark ? "text-gray" : "text-slate",
              )}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
