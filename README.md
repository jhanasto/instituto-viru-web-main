# Instituto de Educación Superior Tecnológico Público Virú

Sitio web institucional del IESTP Virú. Está desarrollado con Next.js, React, TypeScript y Vinext. Incluye la portada, las carreras profesionales, las noticias, contacto y la página de autoridades.

## Requisitos

- Node.js 22.13 o posterior
- npm
- Git
- Una cuenta de GitHub para guardar los cambios en el repositorio

## Primera vez en otra computadora o carpeta

1. Instala Git y Node.js en el equipo.
2. Abre una terminal y clona el repositorio:

   ```bash
   git clone https://github.com/jhanasto/instituto-viru-web-main.git
   cd instituto-viru-web-main
   ```

3. Abre esa carpeta con Codex. Desde Codex puedes abrir la carpeta clonada como proyecto. También puedes iniciar Codex desde esa carpeta si tienes el comando `codex` instalado:

   ```bash
   codex .
   ```

4. Instala las dependencias y ejecuta el sitio:

   ```bash
   npm ci
   npm run dev
   ```

   Abre en el navegador la dirección local que muestre la terminal.

## Guardar y subir cambios a GitHub

Después de editar archivos con Codex, abre una terminal en la carpeta del proyecto y ejecuta:

```bash
git status
git add .
git commit -m "Describe brevemente los cambios"
git push
```

La primera vez, GitHub puede pedir que inicies sesión o autorices Git en el navegador. El repositorio ya tiene configurado el remoto `origin` para `https://github.com/jhanasto/instituto-viru-web-main.git`. Si trabajas en una rama nueva, usa `git push -u origin nombre-de-tu-rama` para publicarla.

## Ejecutar y compilar

- `npm run dev`: inicia el entorno de desarrollo.
- `npm run build`: compila el proyecto.

No hace falta subir `node_modules` ni las carpetas de salida. Git las omite mediante `.gitignore`.

## Carpetas principales

- `app/`: páginas y estilos.
- `components/`: componentes de interfaz.
- `lib/careers.ts`: contenido de las carreras.
- `public/`: logos e imágenes usadas por el sitio.
- `assets/source-images/`: imágenes originales.

## Datos privados

Los archivos `.env*`, las claves privadas y los archivos locales de desarrollo están excluidos del repositorio. No agregues contraseñas, claves de servicios ni tokens a los archivos del proyecto.
