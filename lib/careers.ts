export type CareerCardIconName = "Sparkles" | "Award" | "Zap";

export type CareerIconName =
  | "MapPinned" | "ShoppingCart" | "Settings" | "GraduationCap" | "ShieldCheck"
  | "Cherry" | "HeartPulse" | "FlaskConical" | "Droplets" | "Scale" | "BookOpen"
  | "ChartColumnIncreasing" | "Calculator" | "ClipboardList" | "BookOpenCheck"
  | "Boxes" | "FileSpreadsheet" | "Megaphone" | "MonitorCog" | "ClipboardCheck"
  | "Milk" | "Wheat" | "PackageCheck" | "CupSoda" | "Beef" | "BadgeCheck"
  | "Factory" | "Landmark" | "Store" | "BriefcaseBusiness" | "Building2";

export type CareerCapability = { text: string; icon: CareerIconName };
export type CareerAlternative = {
  title: string;
  description: string;
  icon: CareerIconName;
};

export type Career = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  logo: string;
  cardIcon: CareerCardIconName;
  capabilities: CareerCapability[];
  alternatives: CareerAlternative[];
};

export const careers: Career[] = [
  {
    slug: "produccion-agropecuaria",
    title: "Producción Agropecuaria",
    description: "Aprende a desarrollar actividades agrícolas y pecuarias con enfoque sostenible.",
    duration: "3 años",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85",
    logo: "/logos/produccion-agropecuaria-integrado.webp",
    cardIcon: "Sparkles",
    capabilities: [
      { text: "Realizar levantamientos topográficos altimétricos, planimétricos y de agrimensura.", icon: "MapPinned" },
      { text: "Comercializar los productos agrícolas de acuerdo con las técnicas de mercadotecnia y dispositivos legales vigentes.", icon: "ShoppingCart" },
      { text: "Manejar eficientemente las máquinas, instrumentos y equipos de agricultura.", icon: "Settings" },
      { text: "Realizar acciones de extensión y educación agropecuaria.", icon: "GraduationCap" },
      { text: "Identificar, prevenir, controlar y erradicar los problemas sanitarios que se presentan en cultivos y animales.", icon: "ShieldCheck" },
      { text: "Realizar injertos frutales.", icon: "Cherry" },
      { text: "Atender partos de vacunos, cerdos, ovejas, etc.", icon: "HeartPulse" },
      { text: "Formular proyectos de investigación y producción agropecuaria.", icon: "FlaskConical" },
      { text: "Manejar cultivos bajo el sistema de riego tecnificado.", icon: "Droplets" },
    ],
    alternatives: [
      { title: "Empresas agropecuarias", description: "Desempeño en empresas del sector agropecuario.", icon: "Factory" },
      { title: "Dependencias del Ministerio de Agricultura", description: "Trabajo en dependencias públicas vinculadas al Ministerio de Agricultura.", icon: "Landmark" },
      { title: "Acopio y comercialización de productos agrícolas", description: "Participación en el acopio y la comercialización de productos agrícolas.", icon: "Store" },
      { title: "Control sanitario de animales en los centros de beneficio", description: "Apoyo en el control sanitario de animales en centros de beneficio.", icon: "ShieldCheck" },
      { title: "Crear una empresa propia utilizando tecnología moderna", description: "Emprendimiento propio en el sector agropecuario utilizando tecnología moderna.", icon: "BriefcaseBusiness" },
    ],
  },
  {
    slug: "contabilidad",
    title: "Contabilidad",
    description: "Organiza y analiza información contable para apoyar la gestión de empresas.",
    duration: "3 años",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    logo: "/logos/contabilidad-integrado.webp",
    cardIcon: "Award",
    capabilities: [
      { text: "Analizar e interpretar las disposiciones legales vigentes.", icon: "Scale" },
      { text: "Registrar operaciones de empresas públicas y privadas según el plan contable general empresarial.", icon: "BookOpen" },
      { text: "Evaluar la situación financiera de las empresas privadas y buscar soluciones a los problemas correspondientes.", icon: "ChartColumnIncreasing" },
      { text: "Registrar operaciones de empresas del sector privado y público aplicando la contabilidad completa y simplificada.", icon: "Calculator" },
      { text: "Utilizar los libros de contabilidad autorizados por la normativa correspondiente de SUNAT.", icon: "ClipboardList" },
      { text: "Llevar Kardex de almacén.", icon: "BookOpenCheck" },
      { text: "Formular balances, estados de pérdidas y ganancias y demás estados financieros.", icon: "FileSpreadsheet" },
      { text: "Aplicar técnicas de marketing para comercializar diversos productos y servicios.", icon: "Megaphone" },
      { text: "Manejar paquetes contables computarizados.", icon: "MonitorCog" },
      { text: "Aplicar principios elementales de auditoría para desempeñarse como asistente de auditor.", icon: "ClipboardCheck" },
    ],
    alternatives: [
      { title: "Empresas industriales, mineras, agrícolas y de servicios", description: "Desempeño en empresas de los sectores indicados.", icon: "Building2" },
      { title: "Bancos y entidades financieras, como cajas y cooperativas", description: "Trabajo en bancos, cajas, cooperativas y otras entidades financieras.", icon: "Landmark" },
      { title: "Estudios contables y sociedades de auditoría", description: "Participación en estudios contables y sociedades de auditoría.", icon: "BriefcaseBusiness" },
      { title: "Constituir empresas como persona natural o jurídica", description: "Creación de empresas como persona natural o jurídica.", icon: "Store" },
    ],
  },
  {
    slug: "industrias-alimentarias",
    title: "Industrias Alimentarias",
    description: "Conoce procesos de transformación, conservación y control de calidad de alimentos.",
    duration: "3 años",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    logo: "/logos/industrias-alimentarias-integrado.webp",
    cardIcon: "Zap",
    capabilities: [
      { text: "Aplicar técnicas para procesar y envasar productos lácteos como leche fresca, leche en polvo, yogur, queso, mantequilla y manjar blanco.", icon: "Milk" },
      { text: "Aplicar tecnologías para el procesamiento de harina, molienda y panificación, incluyendo panetones, galletas y cakes.", icon: "Wheat" },
      { text: "Aplicar tecnologías para el procesamiento de productos hortícolas en néctares, mermeladas, almíbares y vinos.", icon: "Cherry" },
      { text: "Procesar y conservar productos hortícolas como espárragos, alcachofas, pimientos, vainitas, tomates y pepinillos, incluyendo procesos de poscosecha.", icon: "PackageCheck" },
      { text: "Aplicar tecnologías de fabricación y conservación de bebidas como cerveza, gaseosas, vinos y licores.", icon: "CupSoda" },
      { text: "Procesar y conservar productos cárnicos.", icon: "Beef" },
      { text: "Aplicar modelos de control de calidad en industrias alimentarias, como HACCP y normas ISO correspondientes.", icon: "BadgeCheck" },
      { text: "Formular y ejecutar proyectos agroindustriales.", icon: "FlaskConical" },
    ],
    alternatives: [
      { title: "Fábricas conserveras, embotelladoras, empresas de productos lácteos y galleteras", description: "Desempeño en fábricas y empresas alimentarias de los rubros indicados.", icon: "Factory" },
      { title: "Empresas agroindustriales", description: "Trabajo en empresas del sector agroindustrial.", icon: "Building2" },
      { title: "Dependencias del Ministerio de Industrias o entidades públicas relacionadas con el sector", description: "Trabajo en dependencias públicas vinculadas al sector industrial.", icon: "Landmark" },
      { title: "Empresas fabricantes de vinos y cervezas", description: "Participación en empresas fabricantes de vinos y cervezas.", icon: "CupSoda" },
      { title: "Crear una empresa propia del sector alimentario", description: "Emprendimiento propio en el sector alimentario.", icon: "BriefcaseBusiness" },
    ],
  },
];
