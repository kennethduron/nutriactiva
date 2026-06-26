import Image from "next/image";
import { contactInfo, logo, navLinks, socialLinks } from "@/lib/data";

const footerServices = ["Plan Nutricional", "Entrenamiento", "Bienestar Integral", "Evaluación Física", "Seguimiento"];

export function Footer() {
  return (
    <footer className="bg-navy py-12 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src={logo}
            alt="Logo Nutri Activa Centro Metabólico"
            width={220}
            height={96}
            className="h-20 w-auto object-contain brightness-110"
          />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/80">
            Centro especializado en nutrición, entrenamiento y bienestar, enfocado en tu transformación.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green text-white"
              >
                <social.icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-black uppercase">Enlaces rápidos</h2>
          <nav className="mt-5 grid gap-2 text-sm text-white/80">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-green-bright">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-black uppercase">Servicios</h2>
          <ul className="mt-5 grid gap-2 text-sm text-white/80">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-black uppercase">Contáctanos</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/80">
            {contactInfo.slice(0, 4).map((item) => (
              <div key={item.title} className="flex gap-3">
                <item.icon className="shrink-0 text-green-bright" size={18} />
                <span>{item.lines[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/70">
        © 2026 Nutri Activa Centro Metabólico. Todos los derechos reservados.
      </div>
    </footer>
  );
}


