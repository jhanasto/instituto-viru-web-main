"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1000);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="page-loader" role="status" aria-label="Cargando el sitio">
      <div className="page-loader-clock" aria-hidden="true">
        <span className="page-loader-hand" />
        <span className="page-loader-orbit-dot" />
        <div className="page-loader-seal">
          <img src="/logos/instituto-general-integrado.webp" alt="" />
        </div>
      </div>
    </div>
  );
}
