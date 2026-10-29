# DECISIONS.md — Supuestos y decisiones del proyecto

> Registro de suposiciones tomadas durante la Fase 0 y el desarrollo. Verificar los puntos marcados con **[PENDIENTE]**.

## Decisiones aprobadas (Fase 0)

| Tema | Decisión |
|---|---|
| Idioma | Bilingüe ES/EN vía segmento `app/[lang]/` con `generateStaticParams` (rutas `/es` y `/en` estáticas, mejor SEO que toggle client-side). `/` redirige a `/es`. |
| Contacto | `mailto:` directo (sin backend ni Formspree). |
| Proyectos | El usuario tiene URLs para enlazar (demo o repo). |
| Acento de color | `#FF4D00` (naranja vibrante) sobre fondo `#FAFAF8` y texto `#0F172A` — estilo "Editorial Tech". |
| Dominio | `portafolio-jorge-uriel.vercel.app` (asignado por Vercel al importar el repo `jorgeuriel89-rgb/portafolio-jorge-uriel`). |
| Framework | **Next.js 15** (el scaffold instaló Next 16; se hizo downgrade a `next@15.5.x` para cumplir AGENTS.md). Tailwind v4 vía `@tailwindcss/postcss`. |

## Supuestos sobre contenido

1. ~~Correo de contacto~~ ✅ `jorgeuriel89@gmail.com`
2. ~~Redes sociales~~ ✅ GitHub `jorgeuriel89-rgb`, LinkedIn `jorge-uriel-gorgonio`
3. **URLs de proyectos [PENDIENTE]:** campos `url` vacíos — los botones "Ver proyecto" solo se renderizan si hay URL.
4. **Fechas de experiencia/educación [PENDIENTE]:** períodos estimados (Interesse 2024–Presente, SICE 2022–2024, ULA 2021–2023, ITSSAT 2018–2022). Confirmar fechas reales.
5. **Nombres exactos de certificaciones [PENDIENTE]:** se usaron nombres plausibles (AWS Cloud Practitioner, Google Cloud Fundamentals, Anthropic AI Fluency). Confirmar nombres oficiales.
6. **Sistema de Casetas AIFA:** ✅ el proyecto es el sistema de información y replicación de las casetas del CEM hacia el AIFA (artículo de SICE enlazado). Stack asumido `TypeScript / Node.js / SQL Server` — confirmar tecnologías reales.
7. **Ubicación [PENDIENTE]:** se usa "México" genérico en el hero.

## Notas técnicas

- `output: "export"` + `images.unoptimized` — no hay servidor de imágenes de Next.
- El `<html lang>` se fija en "es" en el root layout; `LangAttribute` (cliente) lo corrige a `en` en `/en`.
- Los anchors de navegación usan ids neutros (`#work`, `#projects`, `#stack`, `#education`, `#contact`) compartidos por ambos idiomas.
