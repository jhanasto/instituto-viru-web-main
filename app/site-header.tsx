"use client";

import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Instituto de Educación Superior Tecnológico Público de Virú">
        <img className="brand-logo" src="/logos/instituto-general-integrado.webp" alt="" />
        <span className="brand-name">INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLÓGICO PÚBLICO VIRÚ</span>
      </a>
      <nav className={menu ? "nav open" : "nav"}>
        <details className="university-menu">
          <summary>Inicio <ChevronRight size={14} /></summary>
          <div className="university-dropdown">
            <a onClick={() => setMenu(false)} href="/#inicio">Inicio</a>
            <a onClick={() => setMenu(false)} href="/historia">Historia</a>
            <a onClick={() => setMenu(false)} href="/#valores">Nuestros Valores</a>
            <a onClick={() => setMenu(false)} href="/autoridades">Autoridades</a>
          </div>
        </details>
        <a onClick={() => setMenu(false)} href="/carreras">Carreras</a>
        <a onClick={() => setMenu(false)} href="/#noticias">Noticias</a>
        <a onClick={() => setMenu(false)} href="/#contacto">Contacto</a>
        <a onClick={() => setMenu(false)} href="/admision">Admisión</a>
      </nav>
      <button className="menu" aria-label="Abrir menú" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
    </header>
  );
}
