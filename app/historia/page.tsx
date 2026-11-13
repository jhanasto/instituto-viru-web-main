import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "../site-header";
import styles from "./historia.module.css";

export const metadata: Metadata = {
  title: "Historia | IES Tecnológico Virú",
  description: "Conoce la historia y el compromiso formativo del Instituto de Educación Superior Tecnológico Público Virú.",
};

export default function HistoryPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article className={styles.content}>
        <a className={styles.back} href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Volver al inicio
        </a>
        <div className={styles.story}>
          <span className={styles.eyebrow}>INSTITUTO · VIRÚ · LA LIBERTAD</span>
          <h1>Nuestra historia</h1>
          <p className={styles.lead}>
            Educación tecnológica para abrir oportunidades y acompañar el desarrollo de nuestra comunidad.
          </p>
          <div className={styles.rule} />
          <p>
            El Instituto de Educación Superior Tecnológico Público Virú forma profesionales con una preparación
            orientada a la práctica y a los desafíos de su entorno. Su labor educativa está vinculada a las
            necesidades de Virú y de la región La Libertad.
          </p>
          <p>
            A través de Producción Agropecuaria, Contabilidad e Industrias Alimentarias, sus estudiantes desarrollan
            conocimientos y habilidades para aportar a distintos sectores productivos. La formación combina el
            aprendizaje técnico con el compromiso de construir un futuro profesional.
          </p>
        </div>
      </article>
    </main>
  );
}
