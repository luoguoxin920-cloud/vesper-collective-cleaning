"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { company, navLinks } from "@/components/siteData";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded bg-harbor text-white">
            <Sparkles size={20} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold tracking-wide text-ink sm:text-base">
              {company.name}
            </span>
            <span className="block text-xs text-ink/60">{company.type}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-harbor ${
                pathname === link.href ? "text-harbor" : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-appointment"
            className="focus-ring rounded bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-harbor"
          >
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded border border-ink/15 text-ink md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-white px-4 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-3 text-sm font-medium text-ink/75 hover:bg-mint hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
