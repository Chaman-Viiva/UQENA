"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

/** Pages whose #site-hero is paper/cream — avoid white-on-cream flash before measure */
const LIGHT_HERO_PREFIXES = [
  "/about",
  "/solutions",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookie-policy",
] as const;

function pathAssumesDarkHero(pathname: string) {
  if (pathname === "/") return true;
  return !LIGHT_HERO_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
}

function heroIsDark(hero: HTMLElement) {
  return (
    hero.getAttribute("data-nav") === "dark" ||
    hero.classList.contains("bg-midnight") ||
    hero.classList.contains("section-dark")
  );
}

function measureOverDark() {
  const hero = document.getElementById("site-hero");
  if (!hero) return false;
  const overHero = hero.getBoundingClientRect().bottom > 72;
  return overHero && heroIsDark(hero);
}

export function Header() {
  const pathname = usePathname() || "/";
  const assumeDark = pathAssumesDarkHero(pathname);

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(assumeDark);
  const [ready, setReady] = useState(false);

  // Sync measure before paint so cream pages never flash white nav
  useLayoutEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);
      setOverDark(measureOverDark());
      setReady(true);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Before measure: trust the route. After: trust the hero.
  const darkNav = (ready ? overDark : assumeDark) && !open;
  const solid = ready ? scrolled || open || !overDark : !assumeDark;

  // Explicit hex — never inherit body text-ink onto dark heroes
  const navColor = darkNav ? "#ffffff" : "#0c1222";
  const navMuted = darkNav ? "rgba(255,255,255,0.78)" : "#3d4658";

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? darkNav
            ? "border-b border-white/10 bg-midnight/95 backdrop-blur-md"
            : "border-b border-[var(--line)] bg-cream/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-uq flex h-[var(--header-h)] items-center justify-between gap-3 sm:gap-4">
        <Logo variant={darkNav ? "dark" : "light"} />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {mainNavigation.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href ?? "#"}
                  className="focus-ring inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-sm font-semibold transition hover:opacity-80"
                  style={{ color: navColor }}
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 shrink-0 transition group-hover:rotate-180"
                    style={{ color: navMuted }}
                  />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-[36rem] max-w-[min(36rem,calc(100vw-2rem))] pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
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
                        className="focus-ring block rounded-[var(--radius)] px-3 py-2 text-sm font-semibold text-[#2b7bff] hover:bg-paper"
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
                className="focus-ring rounded-sm px-3 py-2 text-sm font-semibold transition hover:opacity-80"
                style={{ color: navColor }}
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
            "focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius)] border xl:hidden",
            darkNav ? "border-white bg-white text-ink" : "border-ink bg-ink text-white",
          )}
          style={{ color: darkNav ? "#0c1222" : "#ffffff" }}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" strokeWidth={2.25} /> : <Menu className="h-5 w-5" strokeWidth={2.25} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="site-mobile-nav border-t border-[var(--line)] bg-cream xl:hidden"
        >
          <nav
            className="container-uq flex max-h-[calc(100dvh-var(--header-h)-env(safe-area-inset-top,0px))] flex-col gap-0.5 overflow-y-auto overscroll-contain py-3 pb-8"
            aria-label="Mobile"
          >
            {mainNavigation.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-[var(--line)] pb-1">
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center gap-2.5 rounded-sm py-3.5 text-left text-base font-medium text-ink"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-slate transition",
                        servicesOpen && "rotate-180 text-blue",
                      )}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="mb-3 flex flex-col gap-0.5 border-l border-[var(--line)] pl-4">
                      <Link
                        href="/services"
                        className="rounded-sm px-2 py-2.5 text-sm font-medium text-blue"
                        onClick={() => setOpen(false)}
                      >
                        All services
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-sm px-2 py-2.5 text-sm text-slate hover:text-ink"
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
                  className="rounded-sm py-3.5 text-base text-slate hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="pt-4">
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                Start a Project
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
