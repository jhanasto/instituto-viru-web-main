"use client";

import { useEffect, useRef } from "react";
import {
  ArrowLeft, ArrowRight, BadgeCheck, Beef, BookOpen, BookOpenCheck, BriefcaseBusiness,
  Building2, Calculator, ChartColumnIncreasing, Cherry, ClipboardCheck, ClipboardList,
  Boxes, CupSoda, Droplets, Factory, FileSpreadsheet, FlaskConical, GraduationCap, HeartPulse,
  Landmark, MapPinned, Megaphone, Milk, MonitorCog, PackageCheck, Scale, Settings,
  ShieldCheck, ShoppingCart, Store, Wheat,
  type LucideIcon,
} from "lucide-react";
import type { Career, CareerIconName } from "../lib/careers";

const careerIcons: Record<CareerIconName, LucideIcon> = {
  MapPinned, ShoppingCart, Settings, GraduationCap, ShieldCheck, Cherry, HeartPulse,
  FlaskConical, Droplets, Scale, BookOpen, ChartColumnIncreasing, Calculator,
  ClipboardList, BookOpenCheck, Boxes, FileSpreadsheet, Megaphone,
  MonitorCog, ClipboardCheck, Milk, Wheat, PackageCheck, CupSoda, Beef, BadgeCheck,
  Factory, Landmark, Store, BriefcaseBusiness, Building2,
};

export default function CareerDetail({ career }: { career: Career }) {
  const pageRef = useRef<HTMLElement>(null);
  const whatsappMessage = `Hola, me interesa la carrera de ${career.title} y quisiera recibir más información.`;
  const whatsappUrl = `https://wa.me/51970010302?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    page.dataset.motion = "ready";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

    page.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      delete page.dataset.motion;
    };
  }, []);

  return (
    <main className="career-detail" ref={pageRef}>
      <header className="career-detail-nav">
        <div className="wrap">
          <a href="/#carreras" className="career-detail-back">
            <ArrowLeft size={17} aria-hidden="true" />
            Volver a carreras
          </a>
          <a href="/" className="career-detail-brand"><img src="/logos/instituto-general-integrado.webp" alt=""/><span>IES Tecnológico Virú</span></a>
        </div>
      </header>

      <section className="career-detail-hero">
        <img className="career-detail-hero-image" src={career.image} alt="" fetchPriority="high" />
        <div className="career-detail-hero-shade" />
        <div className="career-detail-hero-content wrap" data-reveal>
          <span className="career-duration">{career.duration} de formación</span>
          <img className="career-detail-program-logo" src={career.logo} alt={`Logo de ${career.title}`} />
          <h1>{career.title}</h1>
          <p>{career.description}</p>
        </div>
      </section>

      <section className="career-detail-about career-detail-section wrap" id="sobre-la-carrera" data-reveal>
        <div>
          <span className="eyebrow">FORMACIÓN PROFESIONAL</span>
          <h2>Sobre la carrera</h2>
        </div>
        <p>{career.description}</p>
      </section>

      <section className="career-detail-capabilities career-detail-section" data-reveal>
        <div className="wrap">
          <div className="career-detail-section-heading">
            <span className="eyebrow">LO QUE APRENDERÁS</span>
            <h2>Capacidades a alcanzar</h2>
          </div>
          <ol className="career-capability-grid">
            {career.capabilities.map((capability, index) => {
              const Icon = careerIcons[capability.icon];
              return (
                <li className="career-capability-card" key={capability.text} data-reveal>
                  <span className="career-card-number">{String(index + 1).padStart(2, "0")}</span>
                  <Icon className="career-detail-icon" size={25} aria-hidden="true" />
                  <p>{capability.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="career-detail-jobs career-detail-section" data-reveal>
        <div className="wrap">
          <div className="career-detail-section-heading">
            <span className="eyebrow">CAMPO LABORAL</span>
            <h2>Alternativas de trabajo</h2>
          </div>
          <div className="career-jobs-grid">
            {career.alternatives.map((alternative) => {
              const Icon = careerIcons[alternative.icon];
              return (
                <article className="career-job-card" key={alternative.title} data-reveal>
                  <span className="career-job-icon"><Icon size={23} aria-hidden="true" /></span>
                  <h3>{alternative.title}</h3>
                  <p>{alternative.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="career-detail-cta" data-reveal>
        <div className="wrap">
          <span className="eyebrow light">DA EL SIGUIENTE PASO</span>
          <h2>¿Te interesa esta carrera?</h2>
          <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Postula ahora <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
