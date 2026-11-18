"use client";

import { useState } from "react";
import { CalendarDays, RotateCcw } from "lucide-react";
import { NewsCard, NewsPlaceholder, newsPlaceholderCount } from "../news-card";
import type { NewsItem } from "../../lib/news";
import styles from "./noticias.module.css";

export default function NewsFilter({ newsItems }: { newsItems: NewsItem[] }) {
  const [selectedDate, setSelectedDate] = useState("");
  const filteredNews = selectedDate
    ? newsItems.filter((news) => news.date === selectedDate)
    : newsItems;

  return (
    <>
      <div className={styles.filterPanel}>
        <div className={styles.filterIntro}>
          <span className={styles.filterIcon}><CalendarDays size={20} aria-hidden="true" /></span>
          <div className={styles.filterText}>
            <label className={styles.filterLabel} htmlFor="news-date-filter">Buscar noticias por fecha</label>
            <span className={styles.filterHint}>Elige un día para ver sus publicaciones.</span>
          </div>
        </div>
        <div className={styles.filterControls}>
          <input
            id="news-date-filter"
            className={styles.dateInput}
            type="date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
            aria-label="Selecciona una fecha para filtrar las noticias"
          />
          {selectedDate && (
            <button className={styles.clearFilter} type="button" onClick={() => setSelectedDate("")}>
              <RotateCcw size={15} aria-hidden="true" />
              Quitar filtro
            </button>
          )}
        </div>
      </div>

      <div className={styles.cards + " news"}>
        <div className={styles.grid + " news-grid"}>
          {filteredNews.map((news) => <NewsCard key={news.slug} news={news} />)}
          {!selectedDate && Array.from({ length: newsPlaceholderCount }, (_, index) => (
            <NewsPlaceholder key={index} index={index} />
          ))}
        </div>
        {selectedDate && filteredNews.length === 0 && (
          <div className={styles.emptyState} role="status">
            <CalendarDays size={26} aria-hidden="true" />
            <strong>No hay noticias para esta fecha</strong>
            <span>Prueba otra fecha o vuelve a ver todas las noticias.</span>
            <button type="button" onClick={() => setSelectedDate("")}>Ver todas las noticias</button>
          </div>
        )}
      </div>
    </>
  );
}
