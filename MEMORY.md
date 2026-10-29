# MEMORY.md — Aprendizajes del proyecto

## Estado actual (sesión 1 — MVP completo)

Sitio completo implementado: Header sticky, Hero animado, Experiencia, Proyectos (grid asimétrico), Stack (marquee + grupos), Educación/Certificaciones, Footer/Contacto oscuro. Bilingüe ES/EN vía `app/[lang]/` con `generateStaticParams`.

## Decisiones técnicas que funcionaron

- **i18n estático:** `generateStaticParams` en `app/[lang]/layout.tsx` genera `/es` y `/en`. El contenido vive en `data/portfolio.ts` como `Record<Lang, SiteContent>` — añadir un idioma solo requiere una entrada más y un valor en `languages`.
- **Redirección raíz:** `redirect()` de Next en `output: 'export'` solo funciona con JS. Se usa `<meta httpEquiv="refresh">` en `app/page.tsx` + links de respaldo.
- **`<html lang>` por idioma:** el root layout fija `lang="es"`; `components/LangAttribute.tsx` (cliente) lo corrige con `useEffect` en `/en`.
- **Marquee CSS:** clase `.animate-marquee` en `globals.css` (`@keyframes marquee`, `translateX(-50%)`, 36s linear infinite) con la lista duplicada (`[...items, ...items]`) y `aria-hidden`. El contenedor necesita `overflow-hidden` o causa scroll horizontal.
- **Animaciones:** `components/Reveal.tsx` envuelve secciones con `whileInView` (`once: true, margin: "-80px"`). En Hero se usa patrón `variants` container/item con `staggerChildren: 0.09`. En framer-motion v14, `ease` se tipa como `as const`.
- **lucide-react v1.x:** ya NO exporta iconos de marca (`Github`, `Linkedin`). Se usan links de texto + `ArrowUpRight` (más editorial).
- **Open Graph en nested routes:** el `openGraph`/`twitter` de `generateMetadata` hijo **reemplaza** al del padre (no hay merge profundo). Hay que declarar `images`, `siteName`, `type` completos en `app/[lang]/layout.tsx` o se pierden.
- **og-image:** `public/og-image.png` (1200×627) se generó capturando `/tmp/og-card.html` con Chrome headless (`--screenshot --window-size=1200,627 --hide-scrollbars`). Para regenerarla, editar el HTML y re-capturar.
- **metadataBase:** obligatorio para que `og:image` salga con URL absoluta (requerido por LinkedIn/Twitter).

## Tokens de diseño (globals.css / @theme)

- `--color-paper: #fafaf8`, `--color-ink: #0f172a`, `--color-accent: #ff4d00`, `--color-line: #e8e6e0`
- Patrón sección: `<section className="border-t border-line">` + `mx-auto max-w-6xl px-6 py-24 md:py-32`
- Eyebrows: `font-mono text-xs uppercase tracking-[0.25em] text-accent`
- CTAs: `rounded-full`, altura `h-12`/`h-14` (≥44px táctil), hover `bg-ink → bg-accent`

## Verificación

- `npm run lint` + `npm run build` limpios. `out/` exporta `/`, `/es`, `/en`.
- Chrome DevTools MCP: 1440x900 y 375x667 sin overflow ni errores de consola.
- Ojo: si el MCP dice "browser already running", matar el Chrome con `--user-data-dir=~/.cache/chrome-devtools-mcp/chrome-profile` (instancia huérfana).

## Pendiente del usuario (ver DECISIONS.md)

Correo real, URLs de GitHub/LinkedIn y de proyectos, fechas exactas de experiencia/educación, nombres oficiales de certificaciones → editar `data/portfolio.ts`.
