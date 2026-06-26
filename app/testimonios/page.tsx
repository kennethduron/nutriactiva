import type { Metadata } from "next";
import { HeartPulse, ShieldCheck, Star, Users } from "lucide-react";
import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Historias reales de clientes que transformaron sus hábitos con Nutri Activa."
};

export default function TestimoniosPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonios"
        title="Historias reales,"
        accent="resultados reales"
        description="Conoce las experiencias de personas como tú que decidieron cambiar sus hábitos y transformar su vida con Nutri Activa."
        image="/assets/hero-wellness.png"
        imageAlt="Mujer saludable con manzana, ensalada, botella y pesas"
        highlights={[
          { title: "Miles de", subtitle: "personas transformadas", icon: Users },
          { title: "Resultados", subtitle: "saludables", icon: HeartPulse },
          { title: "Programas", subtitle: "personalizados", icon: Star },
          { title: "Acompañamiento", subtitle: "profesional", icon: ShieldCheck }
        ]}
      />
      <Testimonials />
      <PageCta
        title="Tú también puedes ser nuestra próxima historia de éxito"
        text="Da el primer paso hacia tu mejor versión. Nuestro equipo está listo para acompañarte."
        button="Agenda tu cita ahora"
      />
    </>
  );
}
