# AGENTS.md — Reglas de Ingeniería para Proyecto "Portafolio Personal - Jorge Uriel"

> **Filosofía:** Entrega código verificado, no borradores. Actúa como un equipo completo (Arquitecto, Builder, QA). Sigue el principio "Trust, but verify".
> **Nota para Devin:** Este archivo contiene tus reglas de trabajo. Léelo completo al inicio de cada sesión.

## 🎯 1. Objetivo del Proyecto y Alcance (MVP)
- **Objetivo:** Construir un portafolio web personal de alto impacto visual para Jorge Uriel Gorgonio Cobaxin, orientado a la búsqueda de oportunidades laborales como Full Stack Developer. Debe combinar un diseño minimalista/editorial con animaciones fluidas y una presentación clara de proyectos y experiencia.
- **Reglas de Negocio (Fijas):**
  1. **Naturaleza:** Sitio web estático (SSG) o híbrido. No hay base de datos ni CMS en esta fase.
  2. **Contenido:** Los datos del CV (experiencia, proyectos, stack) se extraerán de un archivo de configuración local (ej. `data/portfolio.ts`), NO hardcodeados en el JSX.
  3. **Contacto:** El formulario o los CTAs deben enlazar a `mailto:` o a un servicio externo (ej. Formspree), no a un backend propio.
  4. **Referencias Visuales:** Inspiración en la limpieza de `agustina-armendariz-portfolio.vercel.app` y el storytelling creativo de `saez.me`.
- **Fuera de Alcance (NO implementar aún):** Backend, login, base de datos, blog dinámico.
- **Regla de Oro:** Si una tarea requiere modificar más de 3 archivos, presenta primero un Plan de Arquitectura y espera aprobación.

## 🛠️ 2. Stack Tecnológico y Reglas de Diseño (Fijo)

### Stack Técnico
- **Framework:** Next.js 15 (App Router) + TypeScript. Configurado para exportación estática (`output: 'export'`).
- **Estilos:** Tailwind CSS.
- **Animaciones:** `framer-motion` (obligatorio para transiciones y micro-interacciones) + CSS nativo para loops infinitos.
- **Iconos:** `lucide-react`.
- **Tipografía:** `next/font` con una fuente Sans-Serif moderna (ej. `Inter`, `Geist` o `Manrope`).
- **Despliegue:** Vercel. Dominio: `[DEFINIR_DOMINIO]`.

### Reglas de Diseño (UI/UX - Estilo Propio)
- **Concepto:** "Editorial Tech". Fondo limpio (blanco roto o gris muy claro), tipografía grande y contrastada, mucho espacio en blanco (whitespace), y acentos de color sobrios (ej. un azul profundo o negro para los textos principales, y un color vibrante para CTAs y highlights).
- **Layout:** 
  - **Desktop:** Grid asimétrico. Las imágenes de proyectos pueden romper la retícula. Uso de `sticky` para navegación lateral o headers.
  - **Móvil:** Una sola columna, tipografía legible, targets táctiles ≥44px.
- **Micro-interacciones:** Los enlaces y botones deben tener transiciones suaves (hover states). Las tarjetas de proyectos pueden tener un ligero efecto de elevación o cambio de opacidad.
- **Secciones Obligatorias (basadas en el CV):**
  1. **Hero:** Nombre, rol ("Full Stack Developer"), y un resumen de 2 líneas. CTA a "Ver Proyectos" y "Contacto".
  2. **Sobre Mí / Experiencia:** Línea de tiempo o lista editorial con los roles en Interesse, SICE México y docencia en ULA.
  3. **Proyectos Destacados:** Tarjetas para el LMS (Next.js/Postgres), la Plataforma White-Label (React/FastAPI) y el Sistema AIFA. Cada tarjeta con stack, descripción y link.
  4. **Stack Tecnológico:** Grid de logos o badges de las tecnologías dominadas.
  5. **Educación y Certificaciones:** Maestría en IA (UVEG), Ingeniería (ITSSAT) y certificados de AWS, Google, Anthropic.
- **Regla de Responsividad:** Mobile-first. Verifica SIEMPRE en viewport `375x667` y `1440x900` con Chrome DevTools MCP.

## 🧠 3. Fase 0: Descubrimiento (Obligatoria antes de codificar)
Antes de escribir código para una nueva sección:
1. Reformula el objetivo en una frase.
2. Haz hasta 3 preguntas críticas si algo no está claro (ej. "¿El formulario de contacto debe enviar a un correo real o solo abrir el cliente de correo?", "¿Los enlaces a proyectos deben abrir en una nueva pestaña?").
3. Registra tus suposiciones en `DECISIONS.md`.
4. No escribas código hasta que el plan sea aprobado.

## 📋 4. Flujo de Trabajo y Git
1. **Ramas:** `main` es la rama estable. Para nuevas secciones: `feature/<descripcion_corta>`.
2. **Commits:** Mensajes claros en español. Ej: `feat(hero): maquetar seccion principal con animacion`.
3. **Verificación antes de commit:**
   - `npm run lint`
   - `npm run build` (Asegurar que Next.js compila y exporta estáticamente sin errores).
   - Revisar la consola del navegador (Chrome DevTools MCP).

## 🔒 5. Seguridad y Buenas Prácticas
- **Nunca** expongas claves de API (no debería haber necesidad de ellas en este proyecto).
- **SEO y Accesibilidad:** Usa etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<footer>`). Añade atributos `alt` descriptivos a todas las imágenes. Asegura un contraste adecuado (WCAG AA).
- **Limpieza:** NUNCA dejes `console.log()` ni código comentado. Sin `any` innecesario.
- **Optimización de Imágenes:** Usa el componente `next/image` (o formatos `.webp`) para asegurar una carga rápida.

## 🔍 6. Verificación (Trust, but verify)
- **No afirmes que algo funciona sin probarlo.**
- **Verificación Visual:** Compara tu implementación lado a lado con las referencias. Presta especial atención a los espaciados (paddings/margins), tamaños de fuente y el efecto de las animaciones.
- **Animaciones:** Verifica que los componentes de `framer-motion` no causen saltos de layout (CLS) y que se vean fluidos.
- **Consola:** Si modificas un componente, asegúrate de que no haya errores ni warnings en la consola del navegador.
- Si un test falla, corrige y vuelve a intentar. **Máximo 3 intentos.**

## 🧠 7. Memoria y Aprendizaje (`MEMORY.md`)
- Al finalizar una sección exitosa, documenta en `MEMORY.md`: qué se hizo, qué clases utilitarias de Tailwind se usaron para efectos complejos, y qué archivos se modificaron.
- Si descubres un atajo útil (ej. un componente de botón reutilizable, o una configuración de `framer-motion` que funciona bien), documéntalo en `MEMORY.md`.

## 🤖 8. Herramientas de IA (Solo modelos de Devin)
- **Devin (SWE-2 High):** Úsalo para la maquetación inicial compleja (Hero con animaciones, layout asimétrico, integración de `framer-motion`).
- **Devin (Claude Haiku 5.5 / Gemini 3.8 Flash):** Úsalos para tareas rápidas y de bajo riesgo: ajustar colores de Tailwind, corregir textos, añadir iconos SVG.
- **Chrome DevTools MCP:** Úsalo para verificar el layout en vistas móviles y de escritorio, y para asegurar que no haya scroll horizontal no deseado (`overflow-x-hidden` en el body).