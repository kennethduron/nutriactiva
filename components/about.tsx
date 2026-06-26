import Image from "next/image";
import { purpose, stats, team } from "@/lib/data";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="sobre-nosotros" className="nav-offset bg-white/70 py-16">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <Reveal>
            <p className="eyebrow">Sobre nosotros</p>
            <h2 className="section-title mt-4">
              Comprometidos con tu <span className="title-accent">bienestar integral</span>
            </h2>
            <span className="gold-line" />
            <p className="mt-7 text-lg leading-8 text-ink/80">
              En <strong className="text-green">Nutri Activa</strong> somos un centro especializado
              en nutrición, entrenamiento y bienestar. Nuestro propósito es ayudarte a alcanzar tu
              mejor versión a través de un enfoque personalizado, científico y humano.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="image-frame h-[420px]">
            <Image
              src="/assets/about-clinic.png"
              alt="Consulta profesional de nutrición y bienestar"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal className="mt-12 text-center">
          <h3 className="text-3xl font-black uppercase text-navy">
            Nuestro <span className="text-green">propósito</span>
          </h3>
          <p className="mt-3 text-ink/70">Guiamos a las personas hacia una vida más saludable, equilibrada y plena.</p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {purpose.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="premium-card p-7 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-bright/20 text-green">
                <item.icon size={34} />
              </div>
              <h4 className="mt-4 text-2xl font-black uppercase text-navy">{item.title}</h4>
              <p className="mt-3 leading-7 text-ink/70">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <h3 className="text-3xl font-black uppercase text-navy">
            Nuestro equipo <span className="text-green">profesional</span>
          </h3>
          <p className="mt-3 text-ink/70">Expertos apasionados por ayudarte a transformar tu vida.</p>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal key={member.role} delay={index * 0.06} className="premium-card overflow-hidden">
              <div className="image-frame h-52">
                <Image src={member.image} alt={member.role} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-black text-navy">{member.role}</h4>
                <p className="mt-2 text-sm leading-6 text-ink/70">{member.text}</p>
                <div className="mt-4 flex gap-3 text-green">
                  {member.icons.map((Icon, iconIndex) => (
                    <Icon key={iconIndex} size={22} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 grid gap-5 rounded-lg bg-navy p-7 text-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto text-green-bright" size={40} />
              <p className="mt-3 text-3xl font-black">{stat.value}</p>
              <p className="text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}


