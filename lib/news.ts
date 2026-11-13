export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  paragraphs: string[];
};

// Fechas de muestra: reemplazar por las fechas oficiales de publicación.
export const newsItems: NewsItem[] = [
  {
    slug: "oportunidad-laboral-agropecuaria",
    title: "Green Perú busca técnico agropecuario",
    date: "2026-11-12",
    dateLabel: "noviembre 12, 2026",
    image: "/noticias/editorial-agro-mujer.webp",
    imageAlt: "Técnica agropecuaria inspecciona un cultivo de espárragos",
    excerpt: "Oportunidad laboral para profesionales del área agropecuaria en Virú.",
    paragraphs: [
      "Green Perú busca un técnico agropecuario con experiencia en evaluación, colecta y manejo de insectos, especialmente en cultivos de espárrago blanco. También se solicita conocimiento de hongos benéficos y fitopatógenos.",
      "El horario indicado es de 6:00 a. m. a 12:00 p. m. y de 2:00 a 4:30 p. m., seis días a la semana, con un día de descanso. La oferta indica un sueldo mínimo más S/ 12 diarios. Para consultas sobre esta convocatoria, comunícate al 916 245 568.",
    ],
  },
  {
    slug: "jornada-gimnasio",
    title: "Una tarde de entrenamiento en el Instituto Virú",
    date: "2026-11-12",
    dateLabel: "noviembre 12, 2026",
    image: "/noticias/editorial-gimnasio.webp",
    imageAlt: "Entrenador guía a estudiantes durante una sesión de ejercicio",
    excerpt: "Estudiantes compartieron una jornada de ejercicio, energía y motivación.",
    paragraphs: [
      "Junto al Personal Trainer Luchito, estudiantes del Instituto Virú participaron en una jornada de actividad física y aprendizaje.",
      "Cada ejercicio recordó que la disciplina y la constancia ayudan a construir hábitos saludables y alcanzar nuevas metas.",
    ],
  },
  {
    slug: "bienestar-empleabilidad",
    title: "Bienestar y empleabilidad durante tu formación",
    date: "2026-11-12",
    dateLabel: "noviembre 12, 2026",
    image: "/noticias/editorial-bienestar.webp",
    imageAlt: "Orientadora conversa con una estudiante en un espacio de acompañamiento",
    excerpt: "El acompañamiento y la orientación fortalecen la experiencia formativa.",
    paragraphs: [
      "La formación técnica también se construye con orientación y acompañamiento. Estos espacios ayudan a que cada estudiante reconozca sus fortalezas y avance con confianza.",
      "El Instituto promueve el bienestar y el desarrollo de habilidades para preparar a sus estudiantes para las oportunidades del mundo laboral.",
    ],
  },
];
