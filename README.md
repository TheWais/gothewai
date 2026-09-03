# The WAI — gothewai.com

Sitio de The WAI, estudio de inteligencia artificial aplicada (Buenos Aires).

## Stack

Sitio estático: HTML + CSS + JavaScript vanilla, sin build. Tipografías: Satoshi (Fontshare), Inter y Roboto Mono (Google Fonts).

## Estructura

- `index.html` — página principal en español
- `en/index.html` — versión en inglés
- `styles.css` / `script.js` — compartidos por ambos idiomas
- `404.html` — página de error (bilingüe por JS)
- `robots.txt` / `sitemap.xml` — SEO, con hreflang para ambos idiomas

## Idiomas

Español en `/`, inglés en `/en/`. Un script en el `<head>` redirige según el
idioma del navegador (los crawlers quedan exentos). La elección manual del
selector ES/EN se guarda en `localStorage` (`wai-lang`) y tiene prioridad.

## Deploy

Conectado a Vercel (proyecto `gothewai/gothewai`): cada push a `main`
publica automáticamente en https://www.gothewai.com

## Desarrollo local

```bash
python3 -m http.server 4173
```
