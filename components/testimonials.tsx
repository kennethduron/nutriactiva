import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "./reveal";

export function Testimonials() {
  return (
    <section id="testimonios" className="section-shell nav-offset py-16">
      <Reveal className="grid items-center gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="eyebrow">Testimonios</p>
          <h2 className="section-title mt-4">
            Historias reales, <span className="title-accent">resultados reales</span>
          </h2>
          <span className="gold-line" />
          <p className="mt-7 text-lg leading-8 text-ink/75">
            Conoce las experiencias de personas que decidieron cambiar sus hábitos y transformar su
            vida con Nutri Activa.
          </p>
        </div>
        <div className="rounded-lg bg-navy p-8 text-white">
          <p className="text-3xl font-black">Tu próxima historia de éxito puede empezar hoy.</p>
          <p className="mt-3 text-white/80">Acompañamiento profesional, metas claras y resultados sostenibles.</p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.04} className="premium-card p-6">
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="mt-5 leading-7 text-ink/80">"{testimonial.quote}"</p>
            <div className="mt-6">
              <p className="font-black text-navy">{testimonial.name}</p>
              <p className="text-sm text-ink/60">{testimonial.location}</p>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-md border border-green/20 bg-cream p-4">
              <testimonial.icon className="text-green" size={34} />
              <p className="font-black text-green">{testimonial.result}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
