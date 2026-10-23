# Mas Conejos Peru

Sitio web de Mas Conejos construido con React, TypeScript y Vite.

Publicado en: https://yanqui-rodrigo.github.io/mas-conejos-peru/

## Desarrollo local

```bash
npm install
npm run dev
```

## Publicar en GitHub Pages

1. Sube la rama principal al repositorio `Yanqui-Rodrigo/mas-conejos-peru`.
2. En GitHub, ve a **Settings > Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**, rama `gh-pages` y carpeta `/ (root)`, y guarda.
4. Desde el proyecto, ejecuta:

```bash
npm run deploy
```

El comando compila el sitio y publica `dist` en la rama `gh-pages`. La configuración de Vite utiliza la ruta `/mas-conejos-peru/` y `gh-pages` crea `.nojekyll` al publicar.
