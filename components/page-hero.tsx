import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  imageAlt: string;
  phrase?: string;
  highlights?: Array<{ title: string; subtitle: string; icon: LucideIcon }>;
};

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt,
  phrase = "Activa tu cuerpo, transforma tu vida",
  highlights = []
}: PageHeroProps) {
  return (
    <section className="overflow-hidden py-12 lg:py-16">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.82fr_1fr]">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-title mt-4">
            {title}{" "}<span className="title-accent">{accent}</span>
          </h1>
          <span className="gold-line" />
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/78">{description}</p>
          {highlights.length ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.title} className="border-l border-green/20 pl-4 first:border-l-0 first:pl-0">
                  <item.icon className="mb-2 text-green" size={34} strokeWidth={1.8} />
                  <p className="text-sm font-extrabold text-navy">{item.title}</p>
                  <p className="text-xs font-semibold text-ink/68">{item.subtitle}</p>
                </div>
              ))}
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={0.1} className="relative min-h-[390px]">
          <div className="absolute left-10 top-8 h-80 w-80 rounded-full bg-green-bright/75 lg:left-24 lg:h-[28rem] lg:w-[28rem]" />
          <Image
            src={image}
            alt={imageAlt}
            width={780}
            height={660}
            priority
            className="relative z-10 h-auto w-full object-contain"
          />
          <p className="absolute right-0 top-24 z-20 hidden max-w-48 text-right text-3xl font-black italic leading-8 text-navy xl:block">
            {phrase.split(",")[0]}, <span className="text-green">{phrase.split(",")[1]?.trim()}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
