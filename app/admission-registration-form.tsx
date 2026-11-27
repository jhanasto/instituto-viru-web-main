"use client";

import type { FormEvent } from "react";
import { Send } from "lucide-react";
import type { Career } from "../lib/careers";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdGHXD3eum8boBYuBs-4n2X4JURoVuKAVz51OKZgixmA192Cg/viewform";

const googleFormEntries = {
  nombres: "1314831073",
  apellidos: "1211911077",
  dni: "325451714",
  celular: "1136741571",
  correo: "82737388",
  direccion: "711285103",
  carrera: "1299908740",
  discapacidad: "2029740038",
  sexo: "125528770",
  referencia: "1996492738",
  documentoReferente: "1606039679",
} as const;

export default function AdmissionRegistrationForm({ careers }: { careers: Career[] }) {
  function continueToGoogleForms(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams({ usp: "pp_url" });

    for (const [fieldName, entryId] of Object.entries(googleFormEntries)) {
      const value = formData.get(fieldName);
      if (typeof value !== "string" || !value.trim()) continue;
      const googleValue = fieldName === "discapacidad" && value === "Sí" ? "Si" : value.trim();
      params.set(`entry.${entryId}`, googleValue);
    }

    window.location.assign(`${GOOGLE_FORM_URL}?${params.toString()}`);
  }

  return (
    <div className="registration-form-card">
      <span className="eyebrow">ADMISIÓN 2027</span>
      <h3>Formulario de inscripción</h3>
      <p className="registration-intro">Completa tus datos y selecciona una carrera profesional.</p>
      <form className="registration-form" onSubmit={continueToGoogleForms}>
        <label>Nombres<input name="nombres" autoComplete="given-name" required /></label>
        <label>Apellidos<input name="apellidos" autoComplete="family-name" required /></label>
        <label>DNI<input name="dni" type="text" inputMode="numeric" autoComplete="off" pattern="[0-9]{8}" maxLength={8} minLength={8} title="Ingresa los 8 dígitos de tu DNI" required /></label>
        <label>Celular<input name="celular" type="tel" inputMode="numeric" autoComplete="tel" pattern="[0-9]{9}" maxLength={9} minLength={9} title="Ingresa los 9 dígitos de tu celular" required /></label>
        <label className="field-wide">Correo electrónico<input name="correo" type="email" autoComplete="email" required /></label>
        <label className="field-wide">Dirección<input name="direccion" autoComplete="street-address" required /></label>
        <label>Seleccione carrera<select name="carrera" defaultValue="" required><option value="" disabled>Elige una carrera</option>{careers.map((career) => <option key={career.slug} value={career.title}>{career.title}</option>)}</select></label>
        <label>Discapacidad<select name="discapacidad" defaultValue="No"><option>No</option><option>Sí</option><option>Prefiero no decirlo</option></select></label>
        <label>Sexo<select name="sexo" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Femenino</option><option>Masculino</option><option>Prefiero no decirlo</option></select></label>
        <fieldset className="field-wide source-options"><legend>¿Cómo te enteraste del instituto?</legend>{["Web", "Redes sociales", "Referidos"].map((source) => <label key={source}><input type="radio" name="referencia" value={source} required />{source}</label>)}</fieldset>
        <label className="field-wide">Número de documento del referente <span>(opcional)</span><input name="documentoReferente" /></label>
        <label className="field-wide consent"><input type="checkbox" required />Declaro que la información brindada es verdadera y que cumpliré los requisitos de admisión.</label>
        <label className="field-wide consent"><input type="checkbox" required />Acepto el tratamiento de mis datos personales para gestionar mi solicitud de admisión.</label>
        <button className="btn primary registration-send" type="submit">Inscribirse <Send size={16} /></button>
      </form>
    </div>
  );
}
