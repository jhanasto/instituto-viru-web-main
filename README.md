# Instituto de Educación Superior Tecnológico Público Virú

Sitio web institucional del IESTP Virú, desarrollado con Next.js, React y TypeScript. Presenta información del instituto, sus carreras profesionales, noticias, contacto y autoridades.

## Requisitos

- Node.js 22.13 o posterior
- npm

## Instalación y desarrollo

Clona el repositorio y ejecuta:

```bash
npm ci
npm run dev
```

Abre la dirección local que indique el servidor de desarrollo. El proyecto también incluye una integración de desarrollo con Vite y Cloudflare Workers mediante Vinext.

## Compilar

```bash
npm run build
```

## Estructura

- `app/`: páginas y estilos
- `components/`: componentes de interfaz
- `lib/careers.ts`: contenido de las carreras profesionales
- `public/`: logos e imágenes públicas
- `assets/source-images/`: imágenes originales

## Variables de entorno

No se requieren variables de entorno para ejecutar las páginas públicas. Los archivos `.env*` están excluidos de Git. Nunca incluyas claves, contraseñas o tokens en el repositorio.
