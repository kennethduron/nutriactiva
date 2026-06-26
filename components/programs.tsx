import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { programs, stats } from "@/lib/data";
import { Reveal } from "./reveal";

export function Programs() {
  return (
    <section className="section-shell nav-offset py-14" id="programas">
      <Reveal className="text-center">
        <h2 className="text-3xl font-black uppercase text-navy sm:text-4xl">
          Nuestros <span className="text-green">programas</span>
        </h2>
        <p className="mt-3 text-ink/70">
          Elige el plan ideal para ti y comienza tu transformación hoy.
        </p>
      </Reveal>

      <div className="mt-9 grid gap-7 md:grid-cols-3">
        {programs.map((program, index) => (
          <Reveal key={program.title} delay={index * 0.08} className="premium-card overflow-hidden">
            <div className="image-frame h-56">
              <Image src={program.image} alt={program.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="relative p-6 pt-8">
              <div className="absolute -top-8 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-green text-white shadow-lg">
                <program.icon size={32} strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl font-black uppercase text-navy">{program.title}</h3>
              <p className="mt-3 leading-7 text-ink/75">{program.description}</p>
              <ul className="mt-5 space-y-2">
                {program.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-ink">
                    <CheckCircle2 className="shrink-0 text-green" size={17} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a href="/contacto" className="btn-primary mt-7 w-full">
                Más información
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 grid gap-5 rounded-lg border border-green/30 bg-white/80 p-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-center gap-4 border-green/20 lg:border-l lg:first:border-l-0">
            <stat.icon className="text-green" size={40} />
            <div>
              <p className="text-3xl font-black text-green">{stat.value}</p>
              <p className="text-sm text-ink">{stat.label}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
