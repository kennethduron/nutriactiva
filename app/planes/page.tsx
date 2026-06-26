import type { Metadata } from "next";
import { BarChart3, ClipboardCheck, HeartPulse, ShieldCheck, Users } from "lucide-react";
import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { Plans } from "@/components/plans";
import { Reveal } from "@/components/reveal";

const planBenefits = [
  { title: "Planes adaptados", subtitle: "a tus objetivos", icon: Users },
  { title: "Seguimiento", subtitle: "constante", icon: ClipboardCheck },
  { title: "Acompañamiento", subtitle: "profesional", icon: ShieldCheck },
  { title: "Resultados", subtitle: "comprobados", icon: BarChart3 },
  { title: "Enfoque integral", subtitle: "cuerpo y mente", icon: HeartPulse }
];

export const metadata: Metadata = {
  title: "Planes",
  description: "Elige entre planes Básico, Plus y Premium para nutrición, entrenamiento y bienestar integral."
};

export default function PlanesPage() {
  return (
    <>
      <PageHero
        eyebrow="Planes"
        title="Elige el plan ideal"
        accent="para ti"
        description="En Nutri Activa tenemos planes diseñados para adaptarse a tus necesidades y ayudarte a lograr tus objetivos."
        image="/assets/hero-wellness.png"
        imageAlt="Pareja saludable con manzana, ensalada y equipo deportivo"
        highlights={[]}
      />
      <Plans />
      <section className="section-shell pb-4">
        <Reveal className="grid gap-5 rounded-lg border border-green/25 bg-white/85 p-6 sm:grid-cols-2 lg:grid-cols-5">
          {planBenefits.map((item) => (
            <div key={item.title} className="text-center lg:border-l lg:border-green/20 lg:first:border-l-0">
              <item.icon className="mx-auto text-green" size={38} />
              <p className="mt-2 font-black text-navy">{item.title}</p>
              <p className="text-sm text-ink/70">{item.subtitle}</p>
            </div>
          ))}
        </Reveal>
      </section>
      <PageCta
        title="¿No sabes qué plan es para ti?"
        text="Permítenos evaluarte y ayudarte a elegir el plan ideal para alcanzar tus metas."
        button="Agenda tu evaluación gratuita"
      />
    </>
  );
}
