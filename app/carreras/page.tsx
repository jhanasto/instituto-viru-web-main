import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "../site-header";
import ComingSoonCard from "./coming-soon-card";
import { careers } from "../../lib/careers";
import styles from "./carreras.module.css";

export const metadata: Metadata = {
  title: "Carreras profesionales | IES Tecnológico Virú",
  description: "Explora las carreras profesionales del Instituto de Educación Superior Tecnológico Público Virú.",
};

export default function CareersPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.content}>
        <a className={styles.back} href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Volver al inicio
        </a>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>FORMACIÓN PROFESIONAL · IESTP VIRÚ</span>
          <h1>Nuestras carreras</h1>
        </div>
        <ul className={styles.grid}>
          {careers.map((career) => (
            <li key={career.slug}>
              <a className={styles.card} href={`/carreras/${career.slug}`}>
                <div className={styles.image}>
                  <img className={styles.careerLogo} src={career.logo} alt={`Logo de ${career.title}`} loading="lazy" />
                  <span className={styles.duration}>{career.duration} de formación</span>
                </div>
                <div className={styles.caption}>
                  <h2>{career.title}</h2>
                  <p>{career.description}</p>
                  <span className={styles.link}>Ver detalles <ArrowRight size={17} aria-hidden="true" /></span>
                </div>
              </a>
            </li>
          ))}
          <li><ComingSoonCard /></li>
        </ul>
      </section>
    </main>
  );
}
