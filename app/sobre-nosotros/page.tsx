import type { Metadata } from "next";
import { About } from "@/components/about";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce la misión, visión, valores y equipo profesional de Nutri Activa Centro Metabólico."
};

export default function SobreNosotrosPage() {
  return (
    <>
      <About />
      <PageCta
        title="¿Listo para comenzar tu transformación?"
        text="Estamos aquí para acompañarte en cada paso del camino hacia tu mejor versión."
        button="Agenda tu cita ahora"
      />
    </>
  );
}
