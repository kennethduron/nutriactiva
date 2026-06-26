import type { Metadata } from "next";
import { CalendarDays, MessageCircle, ShieldCheck, UserRoundCheck } from "lucide-react";
import { Contact } from "@/components/contact";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Agenda tu cita con Nutri Activa Centro Metabólico en San Pedro Sula, Honduras."
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí"
        accent="para ayudarte"
        description="Contáctanos y da el primer paso hacia tu mejor versión. Nuestro equipo estará encantado de resolver tus dudas y acompañarte en tu camino hacia el bienestar."
        image="/assets/hero-wellness.png"
        imageAlt="Nutrición y entrenamiento para contactar a Nutri Activa"
        highlights={[
          { title: "Atención", subtitle: "personalizada", icon: UserRoundCheck },
          { title: "Agenda", subtitle: "fácil y rápida", icon: CalendarDays },
          { title: "Respuesta", subtitle: "rápida", icon: MessageCircle },
          { title: "Confidencialidad", subtitle: "garantizada", icon: ShieldCheck }
        ]}
      />
      <Contact />
    </>
  );
}
