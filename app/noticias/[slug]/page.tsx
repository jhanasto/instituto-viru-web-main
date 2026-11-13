import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "../../site-header";
import { newsItems } from "../../../lib/news";
import styles from "./noticia.module.css";

export function generateStaticParams() {
  return newsItems.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const news = newsItems.find((item) => item.slug === slug);
  return { title: news ? `${news.title} | IES Tecnológico Virú` : "Noticia | IES Tecnológico Virú" };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = newsItems.find((item) => item.slug === slug);
  if (!news) notFound();

  return (
    <main className={styles.page}>
      <SiteHeader />
      <article className={styles.article}>
        <a className={styles.back} href="/noticias"><ArrowLeft size={16} aria-hidden="true" />Todas las noticias</a>
        <img className={styles.hero} src={news.image} alt={news.imageAlt} />
        <div className={styles.body}>
          <time dateTime={news.date}>{news.dateLabel}</time>
          <h1>{news.title}</h1>
          <p className={styles.lead}>{news.excerpt}</p>
          {news.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a className={styles.backToNews} href="/noticias"><ArrowLeft size={16} aria-hidden="true" />Ver todas las noticias</a>
        </div>
      </article>
    </main>
  );
}
