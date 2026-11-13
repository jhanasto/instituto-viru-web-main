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
  { name: "Wilson Javier Pineda Valverde", role: "Director general" },
  ...careers.map(({ title, logo }) => ({
    name: title,
    role: "Coordinación de carrera",
    logo,
  })),
  { name: "Oficinista (tesorero)", role: "Equipo de apoyo institucional" },
  { name: "Bibliotecario", role: "Equipo de apoyo institucional" },
  { name: "Responsable de cómputo", role: "Equipo de apoyo institucional" },
  { name: "Asistente de taller", role: "Equipo de apoyo institucional" },
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
        <h1>Autoridades</h1>
        <ul className={styles.grid}>
          {authorities.map(({ name, role, portrait, logo }) => (
            <li key={name} className={styles.card}>
              <div className={styles.portrait}>
                {portrait ? (
                  <img className={styles.photo} src={portrait} alt="" />
                ) : (
                  <img className={styles.logo} src={logo ?? "/logos/instituto-general-integrado.webp"} alt="" />
                )}
              </div>
              <div className={styles.caption}>
                <h2>{name}</h2>
                <p>{role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
