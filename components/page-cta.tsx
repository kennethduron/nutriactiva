import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

type PageCtaProps = {
  title: string;
  text: string;
  button: string;
};

export function PageCta({ title, text, button }: PageCtaProps) {
  return (
    <section className="section-shell py-10">
      <Reveal className="relative overflow-hidden rounded-lg bg-navy p-7 text-white shadow-2xl md:p-10">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
          <p className="mt-3 text-white/82">{text}</p>
          <Link href="/contacto" className="btn-primary mt-7">
            <CalendarDays size={18} />
            {button}
          </Link>
        </div>
        <Image
          src="/assets/service-special.png"
          alt="Alimentos saludables y bienestar"
          width={620}
          height={360}
          className="absolute bottom-0 right-0 hidden h-full w-1/2 object-cover opacity-90 md:block"
        />
      </Reveal>
    </section>
  );
}
