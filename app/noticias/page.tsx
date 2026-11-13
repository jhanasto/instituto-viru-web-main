import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { NewsCard, NewsPlaceholder, newsPlaceholderCount } from '../news-card';
import SiteHeader from "../site-header";
import { newsItems } from "../../lib/news";
import styles from "./noticias.module.css";

export const metadata: Metadata = {
  title: "Noticias | IES Tecnológico Virú",
  description: "Conoce las últimas noticias y novedades del IESTP Virú.",
};

export default function NewsPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <div className={styles.content}>
        <a className={styles.back} href="/#noticias"><ArrowLeft size={16} aria-hidden="true" />Volver al inicio</a>
        <header className={styles.heading}>
          <span>ACTUALIDAD IESTP VIRÚ</span>
          <h1>Todas las noticias</h1>
          <p>Conoce las novedades y actividades de nuestra comunidad educativa.</p>
        </header>
        <div className={styles.cards + " news"}>
          <div className={styles.grid + " news-grid"}>
            {newsItems.map((news) => <NewsCard key={news.slug} news={news} />)}
            {Array.from({ length: newsPlaceholderCount }, (_, index) => (
              <NewsPlaceholder key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
