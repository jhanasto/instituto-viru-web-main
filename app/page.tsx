"use client";
import {useState} from "react";
import { NewsCard, NewsPlaceholder, newsPlaceholderCount } from "./news-card";
import { newsItems } from "../lib/news";
import {ArrowLeft,ArrowRight,ChevronRight,Clock3,Mail,MapPin,Menu,Phone,X} from "lucide-react";

function Logo({showName=false}:{showName?:boolean}){return <a className="brand" href="#inicio" aria-label="Instituto de Educación Superior Tecnológico Público de Virú"><img className="brand-logo" src="/logos/instituto-general-integrado.webp" alt=""/>{showName&&<span className="brand-name">INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLÓGICO PÚBLICO VIRÚ</span>}</a>}
const heroImages = [
  "/hero-instituto-viru.webp",
  "/graduacion-instituto-viru.webp",
  "/joven-parque-campus.webp",
  "/hombre-campus-flores.webp",
];

export default function Home() {
  const [menu, setMenu] = useState(false);

  const nav=["Carreras","Noticias"];return <main>
<header className="site-header"><Logo showName/><nav className={menu?"nav open":"nav"}><details className="university-menu"><summary>Inicio <ChevronRight size={14}/></summary><div className="university-dropdown"><a onClick={()=>setMenu(false)} href="/#inicio">Inicio</a><a onClick={()=>setMenu(false)} href="/historia">Historia</a><a onClick={()=>setMenu(false)} href="/#valores">Nuestros Valores</a><a href="/autoridades">Autoridades</a></div></details>{nav.map(x=><a key={x} onClick={()=>setMenu(false)} href={x === 'Carreras' ? '/carreras' : x === 'Sobre nosotros' ? '#instituto' : '#'+x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}>{x}</a>)}<a onClick={()=>setMenu(false)} href="#contacto">Contacto</a><a onClick={()=>setMenu(false)} href="/admision">Admisión</a></nav><button className="menu" aria-label="Abrir menú" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
<section className="hero" id="inicio">{heroImages.map((image, index)=><div key={image} className="hero-img" style={{backgroundImage:`url(${image})`,animationDelay:`${index * -3}s`}}/>)}<div className="hero-foot wrap"><span>VIRÚ · LA LIBERTAD · PERÚ</span></div></section>

<div className="home-news-contact"><section className="news" id="noticias"><div className="wrap"><div className="head"><div><span className="eyebrow">NOTICIAS IESTP VIRÚ</span><h2>Noticias</h2></div></div><div className="news-grid" tabIndex={0} aria-label="Carrusel de noticias">{newsItems.map((news, index) => <NewsCard key={news.slug} news={news} id={"news-slide-" + index} />)}
{Array.from({ length: newsPlaceholderCount }, (_, index) => <NewsPlaceholder key={index} index={index} id={"news-slide-" + (index + newsItems.length)} />)}<article id="news-slide-8" className="news-more-card"><a href="/noticias"><div className="news-more-copy"><span>Ver todas las noticias <ArrowRight size={18} aria-hidden="true"/></span></div></a></article></div><div className="news-controls" aria-label="Controles de noticias">
  {Array.from({length: 9}, (_, index) => (
    <div className="news-control-pair" data-news-position={index} key={index}>
      {index > 0 ? (
        <a className="news-control-button" href={`#news-slide-${index - 1}`} aria-label="Noticia anterior"><ArrowLeft size={20}/></a>
      ) : (
        <button className="news-control-button" type="button" disabled aria-label="Noticia anterior"><ArrowLeft size={20}/></button>
      )}
      {index === 6 && (
  <button className="news-control-button news-end-desktop" type="button" disabled aria-label="Siguiente noticia"><ArrowRight size={20}/></button>
)}
{index < 8 ? (
        <a className="news-control-button" href={`#news-slide-${index + 1}`} aria-label="Siguiente noticia"><ArrowRight size={20}/></a>
      ) : (
        <button className="news-control-button" type="button" disabled aria-label="Siguiente noticia"><ArrowRight size={20}/></button>
      )}
    </div>
  ))}
</div></div></section>
<section className="contact" id="contacto" aria-labelledby="contact-title"><div className="wrap"><div className="head"><div><span className="eyebrow">CONTACTO IESTP VIRÚ</span><h2 id="contact-title">Contacto</h2></div></div><div className="contact-grid"><div className="map"><iframe title="Ubicación del Instituto Tecnológico Superior Público Virú en Google Maps" src="https://www.google.com/maps?q=-8.4169725,-78.7622448&z=16&output=embed" referrerPolicy="no-referrer-when-downgrade"/></div><div className="contact-copy"><h3>Datos de atención</h3><div className="details"><a href="https://www.google.com/maps/place/Instituto+Tecnol%C3%B3gico+Superior+P%C3%BAblico+Vir%C3%BA/@-8.4189454,-78.7590443,15.75z/data=!4m6!3m5!1s0x91acfbf1224cab35:0x80847beb714f20e3!8m2!3d-8.4169725!4d-78.7622448!16s%2Fg%2F11cr_0956w?entry=ttu&amp;g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer"><MapPin/>Av. Virú Nº 696</a><a href="tel:+5144371132"><Phone/>Teléfono: (044) 371132</a><a href="mailto:informes@iestviru.edu.pe"><Mail/>informes@iestviru.edu.pe</a><span><Clock3/>Horario de atención: 12:00 a 19:00</span></div></div></div></div></section></div>
<footer><div className="footer wrap"><div className="footer-brand"><Logo/><p>Instituto de Educación Superior Tecnológico Público Virú.</p><div className="social"><a aria-label="Facebook del Instituto Tecnológico Superior Público Virú" href="https://www.facebook.com/people/Instituto-Superior-Tecnol%C3%B3gico-P%C3%BAblico-Vir%C3%BA/100066693177149/?locale=es_ES#" target="_blank" rel="noreferrer">f</a><a aria-label="TikTok del IESTP Virú" href="https://www.tiktok.com/@iestpvir" target="_blank" rel="noreferrer">♪</a><a aria-label="Instagram del IESTP Virú" href="https://www.instagram.com/iestpviru/" target="_blank" rel="noreferrer">◎</a></div></div><div><h4>Instituto</h4><a href="#instituto">Conócenos</a><a href="/autoridades">Autoridades</a><a href="#">Transparencia</a></div><div><h4>Carreras</h4><a href="/carreras/produccion-agropecuaria">Producción Agropecuaria</a><a href="/carreras/contabilidad">Contabilidad</a><a href="/carreras/industrias-alimentarias">Industrias Alimentarias</a></div></div><div className="foot-bottom wrap"><span>© 2026 IES Tecnológico Virú. Demo institucional.</span><span>Privacidad · Términos de uso</span></div></footer>
</main>}

