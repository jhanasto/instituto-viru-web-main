import { ArrowUpRight, GraduationCap, Newspaper, School, UsersRound } from "lucide-react";

const links = [
  { label: "Admisión", href: "#admision", Icon: School },
  { label: "Carreras profesionales", href: "#carreras", Icon: GraduationCap },
  { label: "Autoridades", href: "/autoridades", Icon: UsersRound },
  { label: "Noticias", href: "#noticias", Icon: Newspaper },
];

export default function QuickLinks() {
  return (
    <nav className="quick-links" aria-label="Accesos rápidos">
      <ul className="wrap quick-links-grid">
        {links.map(({ label, href, Icon }) => (
          <li key={href}>
            <a href={href}>
              <Icon size={28} aria-hidden="true" />
              <span>{label}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
