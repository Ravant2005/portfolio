"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, profile } from "@/lib/portfolio-data";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { MagneticButton } from "@/components/origami/magnetic-button";

const sectionIds = ["about", "ventures", "experience", "projects", "skills", "achievements", "contact"];

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const active = useActiveSection(sectionIds);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-border/60 shadow-[0_8px_30px_-12px_rgba(28,24,19,0.15)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
        {/* Monogram seal */}
        <Link href="#top" className="group flex items-center gap-3">
          <span
            className="seal-stamp flex h-10 w-10 items-center justify-center rounded-md font-display text-base font-bold tracking-tight transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
            aria-hidden
          >
            RV
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-sm font-semibold tracking-tight text-ink">
              S. Ravant Vignesh
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
              AI / ML Engineer
            </span>
          </span>
        </Link>

        {/* Desktop links with active highlighting */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, i) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-ink",
                  isActive ? "nav-active" : "text-ink-wash"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] mr-1.5 transition-colors",
                    isActive ? "text-cinnabar" : "text-cinnabar/70"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-cinnabar transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <MagneticButton href="#contact" variant="primary" className="px-5 py-2.5">
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-paper-light/70 text-ink lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] border-border bg-paper p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-3 border-b border-border p-6">
                  <span className="seal-stamp flex h-10 w-10 items-center justify-center rounded-md font-display text-base font-bold">
                    RV
                  </span>
                  <div className="leading-tight">
                    <p className="font-display text-sm font-semibold text-ink">{profile.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
                      Menu
                    </p>
                  </div>
                </div>
                <nav className="flex-1 flex-col gap-1 p-4">
                  {navLinks.map((link, i) => {
                    const isActive = active === link.href.replace("#", "");
                    return (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "group flex items-center gap-3 rounded-lg px-4 py-3.5 text-base font-medium transition-colors",
                            isActive
                              ? "bg-cinnabar/10 text-cinnabar"
                              : "text-ink-wash hover:bg-paper-deep hover:text-ink"
                          )}
                        >
                          <span className="font-mono text-xs text-cinnabar">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {link.label}
                          {isActive && (
                            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cinnabar animate-glow-pulse" />
                          )}
                          {!isActive && (
                            <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                          )}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
                <div className="border-t border-border p-6">
                  <SheetClose asChild>
                    <Link
                      href="#contact"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper-light"
                    >
                      Let&apos;s talk
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </SheetClose>
                  <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                    {profile.location}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
