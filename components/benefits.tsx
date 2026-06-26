import { benefits } from "@/lib/data";
import { Reveal } from "./reveal";

export function Benefits() {
  return (
    <section className="section-shell py-8">
      <Reveal className="grid gap-6 rounded-lg bg-navy px-6 py-9 text-white shadow-2xl sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="border-green-bright/45 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
          >
            <benefit.icon className="mb-4 text-green-bright" size={52} strokeWidth={1.6} />
            <h2 className="text-xl font-black uppercase leading-tight">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/80">{benefit.description}</p>
            <span className="sr-only">Beneficio {index + 1}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}


