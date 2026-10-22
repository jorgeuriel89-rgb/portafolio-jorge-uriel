# DECISIONS.md — Supuestos y decisiones del proyecto

> Registro de suposiciones tomadas durante la Fase 0 y el desarrollo. Verificar los puntos marcados con **[PENDIENTE]**.

## Decisiones aprobadas (Fase 0)

| Tema | Decisión |
|---|---|
| Idioma | Bilingüe ES/EN vía segmento `app/[lang]/` con `generateStaticParams` (rutas `/es` y `/en` estáticas, mejor SEO que toggle client-side). `/` redirige a `/es`. |
| Contacto | `mailto:` directo (sin backend ni Formspree). |
| Proyectos | El usuario tiene URLs para enlazar (demo o repo). |
| Acento de color | `#FF4D00` (naranja vibrante) sobre fondo `#FAFAF8` y texto `#0F172A` — estilo "Editorial Tech". |
| Framework | **Next.js 15** (el scaffold instaló Next 16; se hizo downgrade a `next@15.5.x` para cumplir AGENTS.md). Tailwind v4 vía `@tailwindcss/postcss`. |

## Supuestos sobre contenido [PENDIENTE — verificar con Jorge]

1. **Correo de contacto:** placeholder `TU_CORREO@ejemplo.com` en `data/portfolio.ts` (`socials.email`).
2. **URLs de proyectos:** campos `url` vacíos — los botones "Ver proyecto" solo se renderizan si hay URL.
3. **Redes sociales:** placeholders `https://github.com/TU-USUARIO` y `https://linkedin.com/in/TU-USUARIO`.
4. **Fechas de experiencia/educación:** períodos estimados (Interesse 2024–Presente, SICE 2022–2024, ULA 2021–2023, ITSSAT 2018–2022). Confirmar fechas reales.
5. **Nombres exactos de certificaciones:** se usaron nombres plausibles (AWS Cloud Practitioner, Google Cloud Fundamentals, Anthropic AI Fluency). Confirmar nombres oficiales.
6. **Stack del Sistema AIFA:** asumido `TypeScript / Node.js / SQL Server`. Confirmar tecnologías reales.
7. **Ubicación:** se usa "México" genérico en el hero.

## Notas técnicas

- `output: "export"` + `images.unoptimized` — no hay servidor de imágenes de Next.
- El `<html lang>` se fija en "es" en el root layout; `LangAttribute` (cliente) lo corrige a `en` en `/en`.
- Los anchors de navegación usan ids neutros (`#work`, `#projects`, `#stack`, `#education`, `#contact`) compartidos por ambos idiomas.
