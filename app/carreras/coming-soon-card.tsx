"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, X } from "lucide-react";
import styles from "./carreras.module.css";

export default function ComingSoonCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={`${styles.card} ${styles.comingCard}`} type="button" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
        <span className={styles.comingVisual}>
          <span className={styles.comingIcon}><Sparkles size={38} aria-hidden="true" /></span>
        </span>
        <span className={styles.caption}>
          <span className={styles.comingTitle}>Próximamente</span>
          <span className={styles.comingDescription}>Muy pronto podrás conocer nuevas opciones para tu futuro profesional.</span>
          <span className={styles.link}>Descubrir más <ArrowRight size={17} aria-hidden="true" /></span>
        </span>
      </button>
      {isOpen && (
        <div className={styles.dialogBackdrop}>
          <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="coming-title" aria-describedby="coming-description">
            <button className={styles.dialogClose} type="button" onClick={() => setIsOpen(false)} aria-label="Cerrar mensaje"><X size={20} /></button>
            <span className={styles.dialogIcon}><Sparkles size={28} aria-hidden="true" /></span>
            <span className={styles.eyebrow}>MÁS CAMINOS PARA CRECER</span>
            <h2 id="coming-title">Nuevas carreras, muy pronto</h2>
            <p id="coming-description">El Instituto está trabajando para traer pronto nuevas carreras y más oportunidades para la comunidad de Virú.</p>
            <button className={styles.dialogButton} type="button" onClick={() => setIsOpen(false)}>Entendido</button>
          </section>
        </div>
      )}
    </>
  );
}
