# Portafolio — Jorge Uriel Gorgonio Cobaxin

Portafolio personal bilingüe (ES/EN) estilo "Editorial Tech" para búsqueda de oportunidades como Full Stack Developer.

## Stack

- **Next.js 15** (App Router) + TypeScript — exportación estática (`output: 'export'`)
- **Tailwind CSS v4** + **framer-motion** + **lucide-react**
- Tipografía **Inter** vía `next/font`
- Contenido centralizado en `data/portfolio.ts` (ES/EN tipados)

## Comandos

```bash
npm run dev    # desarrollo en localhost:3000
npm run lint   # eslint
npm run build  # build + export estático a out/
```

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Redirect a `/es` (con selector de idioma de respaldo) |
| `/es` | Sitio en español |
| `/en` | Sitio en inglés |

## Editar contenido

Todo el contenido (experiencia, proyectos, stack, educación, certificaciones, redes) se edita en **`data/portfolio.ts`**. Ver `DECISIONS.md` para los datos pendientes de confirmar (correo, URLs de proyectos, redes sociales, fechas).

## Deploy en Vercel

1. Ir a [vercel.com/new](https://vercel.com/new) e importar `jorgeuriel89-rgb/portafolio-jorge-uriel`
2. Framework preset: **Next.js** (se detecta automáticamente)
3. Deploy — Vercel detecta `output: 'export'` y sirve `out/`
4. Cada push a `main` dispara un nuevo deploy automático
