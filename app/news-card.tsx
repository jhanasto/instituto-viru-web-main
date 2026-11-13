import { ArrowRight } from "lucide-react";
import type { NewsItem } from "../lib/news";

export const newsPlaceholderCount = 5;

export function NewsCard({ news, id }: { news: NewsItem; id?: string }) {
  return (
    <article id={id} className="news-card">
      <div className="news-card-link">
        <div className="news-card-media">
          <img src={news.image} alt={news.imageAlt} loading="lazy" />
        </div>
        <div>
          <h3>{news.title}</h3>
          <div className="news-card-meta">
            <time className="news-date" dateTime={news.date}>{news.dateLabel}</time>
            <a className="news-detail-label" href={"/noticias/" + news.slug}>
              Ver noticia <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function NewsPlaceholder({ index, id }: { index: number; id?: string }) {
  return <article id={id} className="news-empty-card" aria-label={"Tarjeta vacía de muestra " + (index + 1)} />;
}
