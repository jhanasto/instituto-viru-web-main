import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { careers } from "../lib/careers";
import AdmissionRegistrationForm from "./admission-registration-form";

export default function AdmissionSection() {
  return (
    <section className="admission" id="admision">
      <div className="admission-content wrap">
        <a className="admission-back" href="/"><ArrowLeft size={16} aria-hidden="true" />Volver al inicio</a>
        <header className="admission-page-heading">
          <span className="eyebrow">ADMISIÓN IESTP VIRÚ</span>
          <h1>Admisión 2027</h1>
        </header>
        <div className="admission-inner">
          <aside className="admission-intro">
            <span className="admission-intro-kicker">Da el siguiente paso</span>
            <h2>Tu futuro profesional empieza en Virú.</h2>
          </aside>
        <article className="admission-card">
          <div className="admission-card-title">
            <CalendarDays aria-hidden="true" />
            <div><span>PRÓXIMO PROCESO</span><h3>Examen de admisión</h3></div>
          </div>
          <div className="admission-date">
            <div className="admission-date-block admission-date-range">
              <span className="admission-date-label">Periodo de inscripción</span>
              <strong className="admission-range-values"><time dateTime="2027-01-11">11 <small>ene</small></time><span>al</span><time dateTime="2027-03-24">24 <small>mar</small></time></strong>
              <span className="admission-date-year">2027</span>
            </div>
            <div className="admission-date-block admission-date-exam">
              <span className="admission-date-label">Examen de admisión</span>
              <strong className="admission-exam-value"><time dateTime="2027-03-29">29</time><span>mar</span></strong>
              <span className="admission-date-year">2027</span>
            </div>
          </div>
          <details className="registration-disclosure">
            <summary className="btn primary admission-submit">Inscribirse <ArrowRight size={18} /></summary>
            <AdmissionRegistrationForm careers={careers} />
          </details>
        </article>
        </div>
      </div>
    </section>
  );
}
