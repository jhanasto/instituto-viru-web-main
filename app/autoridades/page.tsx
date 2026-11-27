import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { careers } from "../../lib/careers";
import SiteHeader from "../site-header";
import styles from "./autoridades.module.css";

export const metadata: Metadata = {
  title: "Autoridades | IES Tecnológico Virú",
  description: "Conoce a las autoridades del Instituto de Educación Superior Tecnológico Público Virú.",
};

type Authority = { name: string; role: string; portrait?: string; logo?: string };

const authorities: Authority[] = [
  { role: "Director General", name: "Mg. Wilson Pineda Valverde" },
  { role: "Jefatura de Unidad Académica", name: "Ing. Zoila Salazar Vigo" },
  { role: "Jefatura de Calidad", name: "Desconocido" },
  { role: "Jefatura de Investigación", name: "Desconocido" },
  { role: "Jefatura de Formación Continua", name: "Desconocido" },
  { role: "Jefatura de Bienestar Estudiantil", name: "Desconocido" },
  { role: "Secretaría Académica", name: "Desconocido" },
  { role: "Jefatura de Unidad Administrativa", name: "Desconocido" },
  {
    role: "Coordinador del Programa de Estudios Contabilidad",
    name: "Desconocido",
    logo: careers.find(({ title }) => title === "Contabilidad")?.logo,
  },
  {
    role: "Coordinador del Programa de Estudios Industrias Alimentarias",
    name: "Desconocido",
    logo: careers.find(({ title }) => title === "Industrias Alimentarias")?.logo,
  },
  {
    role: "Coordinador del Programa de Estudios Producción Agropecuaria",
    name: "Desconocido",
    logo: careers.find(({ title }) => title === "Producción Agropecuaria")?.logo,
  },
];

export default function AuthoritiesPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <div className={styles.content}>
        <a className={styles.back} href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Volver al inicio
        </a>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>AUTORIDADES DEL IESTP “VIRÚ”</span>
          <h1>Nuestras autoridades</h1>
        </header>
        <ul className={styles.grid}>
          {authorities.map(({ name, role, portrait, logo }) => (
            <li key={role} className={styles.card}>
              <div className={styles.portrait}>
                {portrait ? (
                  <img className={styles.photo} src={portrait} alt={`Fotografía de ${name}`} />
                ) : (
                  <img className={styles.logo} src={logo ?? "/logos/instituto-general-integrado.webp"} alt="" />
                )}
              </div>
              <div className={styles.caption}>
                <h2>{role}</h2>
                <p>{name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
