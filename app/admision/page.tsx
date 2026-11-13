import type { Metadata } from "next";
import SiteHeader from "../site-header";
import AdmissionSection from "../admission-section";

export const metadata: Metadata = {
  title: "Admisión 2027 | IES Tecnológico Virú",
  description: "Conoce la fecha de inscripción y postula a las carreras profesionales del IESTP Virú.",
};

export default function AdmissionPage() {
  return (
    <main>
      <SiteHeader />
      <AdmissionSection />
    </main>
  );
}
