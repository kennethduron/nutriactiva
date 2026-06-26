import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

export function HomeCta() {
  return (
    <section className="section-shell pb-14">
      <Reveal className="relative overflow-hidden rounded-lg bg-navy p-7 text-white shadow-2xl md:p-10">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-black md:text-4xl">¿Listo para comenzar tu cambio?</h2>
          <p className="mt-3 text-white/82">
            Permítenos acompañarte en este camino hacia tu mejor versión. Agenda tu cita hoy.
          </p>
          <Link href="/contacto" className="btn-primary mt-7">
            <CalendarDays size={18} />
            Agenda tu cita ahora
          </Link>
        </div>
        <Image
          src="/assets/service-special.png"
          alt="Alimentos saludables, botella deportiva y cinta métrica"
          width={560}
          height={360}
          className="absolute bottom-0 right-0 hidden h-full w-1/2 object-cover opacity-90 md:block"
        />
      </Reveal>
    </section>
  );
}
