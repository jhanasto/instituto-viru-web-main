import { ArrowRight, CalendarDays, Send } from "lucide-react";
import { careers } from "../lib/careers";

export default function AdmissionSection() {
  return (
    <section className="admission" id="admision">
      <div className="admission-inner wrap">
        <div className="admission-heading">
          <span className="eyebrow">ADMISIÓN IESTP VIRÚ</span>
          <h2>Empieza aquí tu<br /><i>futuro profesional.</i></h2>
          <p>Prepárate para estudiar una carrera profesional en el Instituto de Educación Superior Tecnológico Público Virú.</p>
        </div>
        <article className="admission-card">
          <div className="admission-card-title">
            <CalendarDays aria-hidden="true" />
            <div><span>PRÓXIMO PROCESO DE ADMISIÓN</span><h3>Examen de admisión 2027</h3></div>
          </div>
          <div className="admission-date"><span>Inscripciones abiertas desde</span><strong>el 04 de enero de 2027</strong></div>
          <p>Elige la carrera que quieres estudiar:</p>
          <ul>{careers.map((career) => <li key={career.slug}>{career.title}</li>)}</ul>
          <details className="registration-disclosure">
            <summary className="btn primary admission-submit">Inscribirse <ArrowRight size={18} /></summary>
            <div className="registration-form-card">
              <span className="eyebrow">ADMISIÓN 2027</span>
              <h3>Formulario de inscripción</h3>
              <p className="registration-intro">Completa tus datos y selecciona una carrera profesional.</p>
              <form className="registration-form">
                <label>Nombres<input name="nombres" autoComplete="given-name" required /></label>
                <label>Apellido paterno<input name="apellido-paterno" autoComplete="family-name" required /></label>
                <label>Apellido materno<input name="apellido-materno" required /></label>
                <label>Celular<input name="celular" type="tel" autoComplete="tel" required /></label>
                <label className="field-wide">Correo electrónico<input name="correo" type="email" autoComplete="email" required /></label>
                <label className="field-wide">Dirección<input name="direccion" autoComplete="street-address" required /></label>
                <label>Seleccione carrera<select name="carrera" defaultValue="" required><option value="" disabled>Elige una carrera</option>{careers.map((career) => <option key={career.slug} value={career.title}>{career.title}</option>)}</select></label>
                <label>Discapacidad<select name="discapacidad" defaultValue="No"><option>No</option><option>Sí</option><option>Prefiero no decirlo</option></select></label>
                <label>Sexo<select name="sexo" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Femenino</option><option>Masculino</option><option>Prefiero no decirlo</option></select></label>
                <fieldset className="field-wide source-options"><legend>¿Cómo te enteraste del instituto?</legend>{["Web", "Redes sociales", "Televisión", "Radio", "Referidos"].map((source) => <label key={source}><input type="radio" name="referencia" value={source} required />{source}</label>)}</fieldset>
                <label className="field-wide">Número de documento del referente <span>(opcional)</span><input name="documento-referente" /></label>
                <label className="field-wide consent"><input type="checkbox" required />Declaro que la información brindada es verdadera y que cumpliré los requisitos de admisión.</label>
                <label className="field-wide consent"><input type="checkbox" required />Acepto el tratamiento de mis datos personales para gestionar mi solicitud de admisión.</label>
                <a className="btn primary registration-send" href="https://wa.me/51970010302?text=Hola%2C%20quiero%20continuar%20mi%20inscripci%C3%B3n%20para%20el%20proceso%20de%20admisi%C3%B3n%202027%20del%20IESTP%20Vir%C3%BA.">Consultar inscripción <Send size={16} /></a>
              </form>
              <p className="registration-note">Para completar el registro, comunícate con el instituto al +51 970 010 302.</p>
            </div>
          </details>
        </article>
      </div>
    </section>
  );
}
