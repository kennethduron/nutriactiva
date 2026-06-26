import type { Metadata } from "next";
import { Apple, BarChart3, HeartPulse, Target } from "lucide-react";
import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/services";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios integrales de nutrición, entrenamiento, bienestar, evaluación corporal y seguimiento personalizado."
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones integrales para tu"
        accent="bienestar"
        description="En Nutri Activa te ofrecemos servicios personalizados que combinan nutrición, entrenamiento y hábitos saludables para ayudarte a lograr resultados reales y duraderos."
        image="/assets/about-clinic.png"
        imageAlt="Doctora nutricionista con alimentos saludables y equipo deportivo"
        highlights={[
          { title: "Enfoque", subtitle: "personalizado", icon: Target },
          { title: "Planes basados", subtitle: "en evidencia", icon: Apple },
          { title: "Seguimiento", subtitle: "constante", icon: BarChart3 },
          { title: "Resultados", subtitle: "comprobados", icon: HeartPulse }
        ]}
      />
      <Services />
      <PageCta
        title="Da el primer paso hacia tu mejor versión"
        text="Agenda tu cita y recibe una evaluación personalizada."
        button="Agenda tu cita ahora"
      />
    </>
  );
}
