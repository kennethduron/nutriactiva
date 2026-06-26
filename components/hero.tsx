import { CalendarDays, Leaf } from "lucide-react";
import Image from "next/image";
import { heroHighlights } from "@/lib/data";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="inicio" className="nav-offset overflow-hidden pb-10 pt-12 sm:pt-16 lg:pb-16">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <Reveal>
          <p className="eyebrow">Nutrición, entrenamiento y bienestar</p>
          <h1 className="section-title mt-4 max-w-3xl">
            Activa tu cuerpo, <span className="title-accent">transforma tu vida</span>
          </h1>
          <span className="gold-line" />
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/80">
            En <strong className="text-green">Nutri Activa</strong> combinamos nutrición
            personalizada y entrenamiento efectivo para ayudarte a alcanzar tus mejores resultados.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroHighlights.map((item) => (
              <div key={item.title} className="border-l border-green/20 pl-4 first:border-l-0 first:pl-0">
                <item.icon className="mb-2 text-green" size={34} strokeWidth={1.8} />
                <p className="text-sm font-extrabold text-navy">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="btn-primary">
              <CalendarDays size={18} />
              Agenda tu cita
            </a>
            <a href="#planes" className="btn-secondary">
              Conoce nuestros planes
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative min-h-[420px]">
          <div className="absolute left-8 top-8 h-72 w-72 rounded-full bg-green-bright/80 blur-0 sm:left-16 sm:h-96 sm:w-96" />
          <Image
            src="/assets/hero-wellness.png"
            alt="Nutrición saludable con entrenamiento, manzanas, ensalada y pesas"
            width={780}
            height={720}
            priority
            className="relative z-10 h-auto w-full object-contain"
          />
          <div className="absolute right-0 top-8 z-20 hidden rounded-md bg-white/90 p-4 text-sm font-bold text-navy shadow-xl sm:block">
            <div className="flex items-center gap-2 text-green">
              <Leaf size={18} />
              Energía
            </div>
            <div className="mt-2 flex items-center gap-2 text-green">
              <Leaf size={18} />
              Salud
            </div>
            <div className="mt-2 flex items-center gap-2 text-green">
              <Leaf size={18} />
              Resultados
            </div>
          </div>
          <p className="absolute bottom-2 right-0 z-20 max-w-52 text-right text-3xl font-black italic leading-8 text-navy">
            Tu mejor <span className="text-green">versión</span> te espera
          </p>
        </Reveal>
      </div>
    </section>
  );
}


