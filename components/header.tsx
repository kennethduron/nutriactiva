"use client";

import { CalendarDays, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { logo, navLinks } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green/10 bg-white/90 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-6 py-3">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="Nutri Activa inicio">
          <Image
            src={logo}
            alt="Logo Nutri Activa Centro Metabólico"
            width={230}
            height={100}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-ink lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-green">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn-primary hidden lg:inline-flex">
          <CalendarDays size={18} />
          Agenda tu cita
        </a>

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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 hover:bg-cream hover:text-green"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary mt-2">
              <CalendarDays size={18} />
              Agenda tu cita
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}


