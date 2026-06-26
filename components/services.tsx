import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { services } from "@/lib/data";
import { Reveal } from "./reveal";

const serviceBullets = ["Evaluación inicial", "Plan personalizado", "Seguimiento de progreso"];

export function Services() {
  return (
    <section id="servicios" className="section-shell nav-offset py-16">
      <Reveal className="grid items-end gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="eyebrow">Servicios</p>
          <h2 className="section-title mt-4">
            Soluciones integrales para tu <span className="title-accent">bienestar</span>
          </h2>
          <span className="gold-line" />
        </div>
        <p className="max-w-2xl text-lg leading-8 text-ink/75">
          En Nutri Activa ofrecemos servicios personalizados que combinan nutrición, entrenamiento y
          hábitos saludables para ayudarte a lograr resultados reales y duraderos.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04} className="premium-card overflow-hidden">
            <div className="image-frame h-44">
              <Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="relative p-5 pt-8">
              <div className="absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-green text-white shadow-lg">
                <service.icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-black uppercase leading-tight text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/70">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {serviceBullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-xs text-ink/80">
                    <CheckCircle2 size={15} className="shrink-0 text-green" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
