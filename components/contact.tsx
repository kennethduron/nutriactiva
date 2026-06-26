import { Lock, Send } from "lucide-react";
import Image from "next/image";
import { contactInfo } from "@/lib/data";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contacto" className="nav-offset bg-white/70 py-16">
      <div className="section-shell">
        <Reveal className="text-center">
          <p className="eyebrow">Contacto</p>
          <h2 className="section-title mt-4">
            Estamos aquí para <span className="title-accent">ayudarte</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Contáctanos y da el primer paso hacia tu mejor versión. Nuestro equipo estará encantado
            de resolver tus dudas.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr_1fr]">
          <Reveal className="premium-card p-7">
            <h3 className="text-2xl font-black uppercase text-navy">
              Información de <span className="text-green">contacto</span>
            </h3>
            <div className="mt-7 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-green">
                    <item.icon size={26} />
                  </div>
                  <div>
                    <p className="font-black uppercase text-navy">{item.title}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm leading-6 text-ink/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="premium-card p-7">
            <h3 className="text-2xl font-black uppercase text-navy">
              Envíanos un <span className="text-green">mensaje</span>
            </h3>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-green/20 px-4 py-3 outline-none focus:border-green" placeholder="Nombre completo" />
                <input className="rounded-md border border-green/20 px-4 py-3 outline-none focus:border-green" placeholder="Teléfono / WhatsApp" />
              </div>
              <input className="rounded-md border border-green/20 px-4 py-3 outline-none focus:border-green" placeholder="Correo electrónico" />
              <input className="rounded-md border border-green/20 px-4 py-3 outline-none focus:border-green" placeholder="Asunto" />
              <textarea className="min-h-36 rounded-md border border-green/20 px-4 py-3 outline-none focus:border-green" placeholder="Mensaje" />
              <button type="submit" className="btn-primary">
                <Send size={18} />
                Enviar mensaje
              </button>
              <p className="flex items-center justify-center gap-2 text-sm text-ink/60">
                <Lock size={15} className="text-green" />
                Tu información está protegida. No compartimos tus datos.
              </p>
            </form>
          </Reveal>
        </div>

        <Reveal className="mt-8 overflow-hidden rounded-lg border border-green/20 bg-white shadow-lg">
          <div className="relative h-72">
            <Image src="/assets/map-placeholder.png" alt="Mapa de ubicación en San Pedro Sula" fill sizes="100vw" className="object-cover" />
            <div className="absolute left-6 top-6 max-w-xs rounded-md bg-white p-5 shadow-xl">
              <p className="font-black uppercase text-navy">Visítanos</p>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                Estamos ubicados en San Pedro Sula, Honduras. Este mapa es un placeholder listo para
                reemplazarse por el mapa real.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


