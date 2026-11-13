"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1500);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="page-loader" role="status" aria-label="Cargando el sitio">
      <img src="/logos/instituto-general-integrado.webp" alt="Instituto Tecnológico Virú" />
      <span className="page-loader-track"><span /></span>
    </div>
  );
}
