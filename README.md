# Mas Conejos Peru

Sitio web de Mas Conejos construido con React, TypeScript y Vite.

Cloudflare Pages: https://mas-conejos-peru.rodrigollanquipe.workers.dev/
GitHub Pages: https://yanqui-rodrigo.github.io/mas-conejos-peru/

## Desarrollo local

```bash
npm install
npm run dev
```

## Publicar en Cloudflare Pages

Configura el comando de build como `npm run build` y el directorio de salida como `dist`. El build normal usa rutas desde la raíz del dominio, necesarias para Cloudflare Pages. Al conectar el repositorio, cada push a la rama configurada inicia una nueva publicación.

## Publicar en GitHub Pages

1. Sube la rama principal al repositorio `Yanqui-Rodrigo/mas-conejos-peru`.
2. En GitHub, ve a **Settings > Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**, rama `gh-pages` y carpeta `/ (root)`, y guarda.
4. Desde el proyecto, ejecuta:

```bash
npm run deploy
```

El comando compila el sitio en modo GitHub Pages y publica `dist` en la rama `gh-pages`. Ese modo utiliza la ruta `/mas-conejos-peru/`; `gh-pages` crea `.nojekyll` al publicar.
