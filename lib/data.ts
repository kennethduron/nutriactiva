import {
  Apple,
  Award,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Dumbbell,
  Gem,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Utensils,
  Waves
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const logo = "/assets/logo.png";

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Planes", href: "/planes" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Contacto", href: "/contacto" }
];

export const heroHighlights: IconItem[] = [
  { title: "Planes personalizados", description: "Metas claras", icon: Target },
  { title: "Nutrición balanceada", description: "Hábitos sostenibles", icon: Apple },
  { title: "Entrenamiento efectivo", description: "Rutinas guiadas", icon: Dumbbell },
  { title: "Bienestar integral", description: "Cuerpo y mente", icon: HeartPulse }
];

export const benefits: IconItem[] = [
  {
    title: "Enfoque personalizado",
    description: "Programas adaptados a tus necesidades y objetivos.",
    icon: Target
  },
  {
    title: "Nutrición inteligente",
    description: "Planes alimenticios balanceados y sostenibles.",
    icon: Apple
  },
  {
    title: "Entrenamiento efectivo",
    description: "Rutinas diseñadas para lograr resultados reales.",
    icon: Dumbbell
  },
  {
    title: "Bienestar integral",
    description: "Cuerpo y mente en equilibrio para una vida plena.",
    icon: HeartPulse
  }
];

export const programs = [
  {
    title: "Plan Nutricional",
    description: "Alimentación personalizada según tus metas y estilo de vida.",
    image: "/assets/program-nutrition.png",
    icon: Apple,
    benefits: ["Evaluación inicial", "Plan alimenticio personalizado", "Seguimiento constante"]
  },
  {
    title: "Entrenamiento",
    description: "Rutinas de ejercicio adaptadas a tu condición física y objetivos.",
    image: "/assets/program-training.png",
    icon: Dumbbell,
    benefits: ["Rutinas personalizadas", "Entrenamiento guiado", "Evaluación de progreso"]
  },
  {
    title: "Bienestar Integral",
    description: "Hábitos saludables para mejorar tu cuerpo y mente.",
    image: "/assets/program-wellness.png",
    icon: HeartPulse,
    benefits: ["Manejo del estrés", "Hábitos saludables", "Motivación y apoyo"]
  }
];

export const stats = [
  { value: "+500", label: "Pacientes satisfechos", icon: Users },
  { value: "+10", label: "Años de experiencia", icon: Award },
  { value: "95%", label: "Metas alcanzadas", icon: Target },
  { value: "100%", label: "Compromiso contigo", icon: Sparkles }
];

export const purpose = [
  {
    title: "Misión",
    description:
      "Brindar soluciones personalizadas en nutrición, entrenamiento y hábitos saludables que permitan alcanzar objetivos reales.",
    icon: Target
  },
  {
    title: "Visión",
    description:
      "Ser el centro metabólico líder en Honduras, reconocido por excelencia, innovación y compromiso humano.",
    icon: Gem
  },
  {
    title: "Valores",
    description: "Compromiso, profesionalismo, empatía, integridad y pasión por el bienestar.",
    icon: ShieldCheck
  }
];

export const team = [
  {
    role: "Lic. en Nutrición Clínica",
    text: "Especialista en nutrición personalizada y educación alimentaria.",
    image: "/assets/team-nutrition.png",
    icons: [Apple, ClipboardCheck, HeartPulse]
  },
  {
    role: "Entrenador Certificado",
    text: "Especialista en entrenamiento físico, fuerza y acondicionamiento.",
    image: "/assets/team-coach.png",
    icons: [Dumbbell, BarChart3, ClipboardCheck]
  },
  {
    role: "Especialista en Bienestar Integral",
    text: "Enfocada en hábitos saludables, manejo del estrés y bienestar mental.",
    image: "/assets/team-wellness.png",
    icons: [Leaf, HeartPulse, Waves]
  },
  {
    role: "Especialista en Evaluación Física",
    text: "Evaluación corporal, composición y seguimiento de resultados.",
    image: "/assets/team-evaluation.png",
    icons: [Scale, BarChart3, ClipboardCheck]
  }
];

export const services = [
  {
    title: "Plan nutricional personalizado",
    description: "Planes de alimentación adaptados a tus necesidades, objetivos y estilo de vida.",
    image: "/assets/service-nutrition.png",
    icon: Apple
  },
  {
    title: "Entrenamiento personalizado",
    description: "Rutinas efectivas y seguras adaptadas a tu condición física y objetivos.",
    image: "/assets/service-training.png",
    icon: Dumbbell
  },
  {
    title: "Bienestar integral",
    description: "Hábitos sostenibles para mejorar energía, descanso, salud y motivación.",
    image: "/assets/service-wellness.png",
    icon: HeartPulse
  },
  {
    title: "Evaluación corporal",
    description: "Medición de composición corporal para conocer tu punto de partida y progreso.",
    image: "/assets/service-evaluation.png",
    icon: Scale
  },
  {
    title: "Seguimiento constante",
    description: "Acompañamiento continuo para ajustar tu plan y mantener avances reales.",
    image: "/assets/service-followup.png",
    icon: CalendarDays
  },
  {
    title: "Asesoría en suplementación",
    description: "Orientación responsable según tus necesidades y objetivos personales.",
    image: "/assets/service-supplements.png",
    icon: ShieldCheck
  },
  {
    title: "Educación nutricional",
    description: "Aprende a tomar mejores decisiones alimenticias para toda la vida.",
    image: "/assets/service-education.png",
    icon: Utensils
  },
  {
    title: "Programas especiales",
    description: "Planes diseñados para pérdida de peso, ganancia muscular y salud metabólica.",
    image: "/assets/service-special.png",
    icon: Leaf
  }
];

export const plans = [
  {
    name: "Básico",
    subtitle: "Para comenzar",
    price: "$49",
    icon: Apple,
    featured: false,
    benefits: [
      "Evaluación inicial",
      "Plan nutricional personalizado",
      "Rutinas de ejercicio básicas",
      "Seguimiento cada 4 semanas",
      "Soporte por correo electrónico"
    ]
  },
  {
    name: "Plus",
    subtitle: "Para avanzar",
    price: "$79",
    icon: Dumbbell,
    featured: true,
    benefits: [
      "Evaluación completa",
      "Plan nutricional personalizado",
      "Rutinas de ejercicio personalizadas",
      "Seguimiento cada 2 semanas",
      "Reportes de progreso",
      "Asesoría por correo y app"
    ]
  },
  {
    name: "Premium",
    subtitle: "Para tu mejor versión",
    price: "$119",
    icon: HeartPulse,
    featured: false,
    benefits: [
      "Evaluación avanzada",
      "Plan nutricional 100% personalizado",
      "Rutinas avanzadas",
      "Seguimiento semanal",
      "Reportes y análisis detallados",
      "Asesoría prioritaria"
    ]
  }
];

export const testimonials = [
  {
    name: "María Fernanda R.",
    location: "San Pedro Sula, Honduras",
    quote:
      "Gracias a Nutri Activa aprendí a comer mejor y a entrenar de forma constante. En 3 meses recuperé mi energía.",
    result: "-12 kg en 3 meses",
    icon: Target
  },
  {
    name: "Carlos Mejía",
    location: "San Pedro Sula, Honduras",
    quote:
      "Los entrenamientos son excelentes y el plan nutricional se adapta a mi estilo de vida. Me siento más fuerte que nunca.",
    result: "+8 kg de músculo",
    icon: Dumbbell
  },
  {
    name: "Katherine Lobo",
    location: "La Lima, Cortés",
    quote:
      "El acompañamiento del equipo es increíble. Siempre están pendientes de mi progreso y hoy tengo hábitos saludables.",
    result: "Más energía y bienestar",
    icon: Sparkles
  },
  {
    name: "José Daniel Vargas",
    location: "Choloma, Cortés",
    quote:
      "Llegué sin motivación y hoy puedo decir que este cambio fue mi mejor decisión. Bajé grasa y gané confianza.",
    result: "-15% grasa corporal",
    icon: BarChart3
  },
  {
    name: "Andrea Morales",
    location: "El Progreso, Yoro",
    quote:
      "Me ayudaron a mejorar mi alimentación y a entrenar sin dejar de disfrutar la vida. Resultados reales y duraderos.",
    result: "Mejor salud y autoestima",
    icon: HeartPulse
  },
  {
    name: "Luis Ramírez",
    location: "Villanueva, Cortés",
    quote:
      "Excelente atención y planes personalizados. He logrado mis objetivos y mantenerlos a largo plazo.",
    result: "Objetivos alcanzados",
    icon: CheckCircle2
  }
];

export const contactInfo = [
  {
    title: "Ubicación",
    lines: ["San Pedro Sula, Honduras", "Col. Moderna, 4ta Avenida, 13 Calle S.O."],
    icon: MapPin
  },
  {
    title: "Teléfono / WhatsApp",
    lines: ["+504 9877-1234", "Llámanos o escríbenos"],
    icon: Phone
  },
  {
    title: "Correo electrónico",
    lines: ["info@nutriactiva.com", "Envía tus consultas"],
    icon: Mail
  },
  {
    title: "Horario de atención",
    lines: ["Lunes a Viernes 7:00 AM - 7:00 PM", "Sábados 7:00 AM - 1:00 PM"],
    icon: CalendarDays
  }
];

export const socialLinks = [
  { label: "Facebook", icon: Users, href: "#" },
  { label: "Instagram", icon: Leaf, href: "#" },
  { label: "WhatsApp", icon: MessageCircle, href: "#" }
];
