"use client";

import { CalendarDays, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logo, navLinks } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-green/10 bg-white/92 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-6 py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Nutri Activa inicio">
          <Image
            src={logo}
            alt="Logo Nutri Activa Centro Metabólico"
            width={230}
            height={100}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-bold text-ink lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 py-2 transition ${
                  active
                    ? "border-green text-green"
                    : "border-transparent hover:border-green/40 hover:text-green"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contacto" className="btn-primary hidden lg:inline-flex">
          <CalendarDays size={18} />
          Agenda tu cita
        </Link>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-green/20 text-navy lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-green/10 bg-white lg:hidden">
          <nav className="section-shell grid gap-2 py-4 text-sm font-bold text-ink">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 ${
                    active ? "bg-cream text-green" : "hover:bg-cream hover:text-green"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contacto" onClick={() => setOpen(false)} className="btn-primary mt-2">
              <CalendarDays size={18} />
              Agenda tu cita
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
