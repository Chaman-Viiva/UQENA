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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open ? "glass border-b border-[var(--border)]" : "bg-transparent",
      )}
    >
      <div className="container-uq flex h-[var(--header-h)] items-center justify-between gap-4">
        <Logo showTagline={false} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNavigation.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href ?? "#"}
                  className="focus-ring inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-gray transition hover:text-white"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-[var(--border)] bg-navy-elevated/95 p-3 shadow-2xl backdrop-blur-xl">
                    <div className="grid grid-cols-2 gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="focus-ring rounded-xl px-3 py-2.5 transition hover:bg-white/5"
                        >
                          <div className="text-sm font-semibold text-white">{child.label}</div>
                          {child.description && (
                            <div className="mt-0.5 text-xs text-gray">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-[var(--border)] pt-2">
                      <Link
                        href="/services"
                        className="focus-ring block rounded-xl px-3 py-2 text-sm font-semibold text-blue hover:bg-white/5"
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
                className="focus-ring rounded-full px-3 py-2 text-sm text-gray transition hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Let&apos;s Talk
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-navy lg:hidden"
        >
          <nav className="container-uq flex max-h-[calc(100vh-var(--header-h))] flex-col gap-1 overflow-y-auto py-4" aria-label="Mobile">
            {mainNavigation.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-[var(--border)] pb-2">
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between rounded-lg px-2 py-3 text-left text-base font-medium text-white"
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
                        className="rounded-lg px-2 py-2 text-sm text-blue"
                        onClick={() => setOpen(false)}
                      >
                        All services
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-2 py-2 text-sm text-gray hover:text-white"
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
                  className="rounded-lg px-2 py-3 text-base text-gray hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="pt-3">
              <Button href="/contact" className="w-full">
                Let&apos;s Talk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
