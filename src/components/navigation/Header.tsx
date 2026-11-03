"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const hero = document.getElementById("site-hero");
      if (!hero) {
        setOverDark(false);
        return;
      }
      const rect = hero.getBoundingClientRect();
      setOverDark(rect.bottom > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const darkNav = overDark && !open;
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? darkNav
            ? "border-b border-white/10 bg-midnight/90 backdrop-blur-md"
            : "border-b border-[var(--line)] bg-cream/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-uq flex h-[var(--header-h)] items-center justify-between gap-4">
        <Logo variant={darkNav ? "dark" : "light"} />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {mainNavigation.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href ?? "#"}
                  className="focus-ring inline-flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium transition hover:opacity-80"
                  style={{ color: darkNav ? "#ffffff" : "#3d4658" }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-[36rem] pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-[var(--radius-md)] border border-[var(--line)] bg-cream p-3 shadow-xl">
                    <div className="grid grid-cols-2 gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="focus-ring rounded-[var(--radius)] px-3 py-2.5 transition hover:bg-paper"
                        >
                          <div className="text-sm font-semibold text-[#0c1222]">{child.label}</div>
                          {child.description && (
                            <div className="mt-0.5 text-xs text-[#5b657a]">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-[var(--line)] pt-2">
                      <Link
                        href="/services"
                        className="focus-ring block rounded-[var(--radius)] px-3 py-2 text-sm font-semibold text-[#1677F8] hover:bg-paper"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="focus-ring rounded-sm px-3 py-2 text-sm font-medium transition hover:opacity-80"
                style={{ color: darkNav ? "#ffffff" : "#3d4658" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden xl:block">
          <Button href="/contact" size="sm" variant={darkNav ? "inverse" : "primary"}>
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border xl:hidden",
            darkNav ? "border-white/35" : "border-[var(--line)]",
          )}
          style={{ color: darkNav ? "#ffffff" : "#0c1222" }}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-[var(--line)] bg-cream xl:hidden">
          <nav
            className="container-uq flex max-h-[calc(100vh-var(--header-h))] flex-col gap-1 overflow-y-auto py-4"
            aria-label="Mobile"
          >
            {mainNavigation.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-[var(--line)] pb-2">
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between rounded-sm px-2 py-3 text-left text-base font-medium text-ink"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("h-4 w-4 transition", servicesOpen && "rotate-180")}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="mb-2 ml-2 flex flex-col gap-1">
                      <Link
                        href="/services"
                        className="rounded-sm px-2 py-2 text-sm text-blue"
                        onClick={() => setOpen(false)}
                      >
                        All services
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-sm px-2 py-2 text-sm text-slate hover:text-ink"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="rounded-sm px-2 py-3 text-base text-slate hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="pt-3">
              <Button href="/contact" className="w-full">
                Start a Project
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
