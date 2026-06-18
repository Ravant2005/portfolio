"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { CreaseLine, PaperCrane } from "@/components/origami/decor";
import { profile } from "@/lib/portfolio-data";
import { navLinks } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border bg-paper-deep/40 paper-fibers">
      <CreaseLine orientation="horizontal" className="top-0 opacity-50" />
      <PaperCrane className="absolute right-[6%] top-[40%] hidden text-ink/15 md:block" size={48} />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="seal-stamp flex h-11 w-11 items-center justify-center rounded-md font-display text-base font-bold">
                RV
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-bold text-ink">{profile.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  {profile.role} · {profile.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              Building generative AI, multi-agent systems, and full-stack products — folded
              with patience, shipped with intent.
            </p>
            <p className="mt-3 font-mono text-[11px] text-ink-soft">
              {profile.location}
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cinnabar">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-ink-wash transition-colors hover:text-ink"
                  >
                    <span className="h-px w-3 bg-ink-soft/40 transition-all duration-300 group-hover:w-5 group-hover:bg-cinnabar" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cinnabar">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 text-sm text-ink-wash transition-colors hover:text-ink"
              >
                <Mail className="h-4 w-4 text-ink-soft transition-colors group-hover:text-cinnabar" />
                Email
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-ink-wash transition-colors hover:text-ink"
              >
                <Linkedin className="h-4 w-4 text-ink-soft transition-colors group-hover:text-cinnabar" />
                LinkedIn
              </Link>
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-ink-wash transition-colors hover:text-ink"
              >
                <Github className="h-4 w-4 text-ink-soft transition-colors group-hover:text-cinnabar" />
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <CreaseLine orientation="horizontal" className="relative my-8 h-px" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-[11px] text-ink-soft">
            © {new Date().getFullYear()} {profile.name}. Folded with intent — Origami Unfold.
          </p>
          <Link
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-paper-light/70 px-4 py-2 text-xs font-semibold text-ink-wash transition-all duration-300 hover:border-ink hover:bg-paper-light hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
