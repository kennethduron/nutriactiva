import { CheckCircle2 } from "lucide-react";
import { plans } from "@/lib/data";
import { Reveal } from "./reveal";

export function Plans() {
  return (
    <section id="planes" className="nav-offset bg-white/70 py-16">
      <div className="section-shell">
        <Reveal className="text-center">
          <p className="eyebrow">Planes</p>
          <h2 className="section-title mt-4">
            Elige el plan ideal <span className="title-accent">para ti</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Tenemos opciones diseñadas para adaptarse a tus necesidades y ayudarte a lograr tus objetivos.
          </p>
        </Reveal>

        <div className="mt-11 grid gap-7 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 0.08}
              className={`premium-card relative p-7 text-center ${plan.featured ? "border-2 border-green shadow-[0_24px_60px_rgba(47,143,22,0.18)]" : ""}`}
            >
              {plan.featured ? (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-md bg-green px-8 py-2 text-sm font-black uppercase text-white">
                  Recomendado
                </div>
              ) : null}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-green shadow-lg">
                <plan.icon size={42} strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 text-4xl font-black uppercase text-navy">{plan.name}</h3>
              <p className="mt-1 text-xl font-black text-green">{plan.subtitle}</p>
              <p className="mt-6 text-6xl font-black text-green">
                {plan.price}
                <span className="block text-xl text-green">/ mes</span>
              </p>
              <ul className="mt-7 space-y-3 text-left">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2 text-sm text-ink/80">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-green" size={17} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={plan.featured ? "btn-primary mt-8 w-full" : "btn-secondary mt-8 w-full"}>
                Elegir plan
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


