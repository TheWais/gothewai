# The WAI — Estado del rediseño comercial (para revisión del auditor)

**Fecha:** 27 de noviembre de 2026
**Producción (versión anterior, intacta):** https://www.gothewai.com/
**Staging (versión nueva, en trabajo):** https://gothewai-git-staging-gothewai.vercel.app/ — hoy requiere login de Vercel; quedará pública en breve. Versión en inglés en `/en/`.

Contexto: tras tu auditoría, el dueño armó un brief de evolución y venimos ejecutándolo por fases: revisión crítica primero, decisiones una por una con el dueño, implementación solo en staging (producción congelada hasta aprobación final). Nada de lo publicado inventa clientes, métricas, capturas ni capacidades.

## Decisiones tomadas y ya implementadas en staging

1. **Headline**: se adoptó tu opción preferida — "Hacemos que tu empresa funcione mejor con inteligencia artificial." — elegida por el dueño. El lead se reescribió para decir el cómo y el qué ("Diseñamos, construimos e integramos soluciones en tu operación: automatización de procesos, agentes y herramientas a medida. Sin tecnicismos. Con resultados concretos."). La frase anterior ("El futuro de tu empresa ya está acá") se conservó como momento de marca en el intro animado. EN: "We make your business run better with AI."

2. **Evidencia — sección "Qué construimos"**: nueva sección con 3 proyectos, redactados a *nivel capacidad* (mecanismo, problema, solución) porque las fichas con cliente, estado, métricas y permisos siguen pendientes de validación con el dueño. Los tres: **Agente de trámites internos** (RRHH/operaciones), **Motor de generación de demanda** (B2B) y **Línea de producción de contenido** (media). En lugar de capturas ficticias, esquemas animados del mecanismo en el sistema visual propio del sitio. Cuando haya datos reales validados (cliente autorizado, estado producción/piloto/demo, números medidos, video de un flujo real), cada bloque se enriquece sin rediseñar.

3. **Arquitectura de la home**: hero → pain points → proyectos (evidencia) → servicios → metodología (scrollytelling, intacto) → CTA → footer. "Proyectos" se sumó a la navegación y el botón secundario del hero ahora es "Ver proyectos".

4. **Contacto**: WhatsApp sigue como CTA principal (mercado primario AR). Se sumó `contact@gothewai.com` como vía secundaria visible (CTA y footer) — la casilla ya funciona. Sin formulario en la home: reservado para las landings, como planteaba la separación home/landings de tu auditoría.

5. **Medición**: instrumentación completa lista (pageviews + eventos `cta_whatsapp` / `cta_email` con sección de origen, cookieless, sin banner). La activación quedó pospuesta por decisión del dueño.

6. **Dirección de arte**: se preservó el sistema visual y las animaciones (regla explícita del dueño). Cambios de esta ronda: el hero volvió a tipografía monumental y se eliminó un mockup de chat simulado que no convencía (coherente con la regla anti-slop); subtítulos de sección apilados bajo el título; varios micro-fixes de animación (el efecto "scramble" se quitó del hover del menú por causar saltos de layout en algunos entornos; sigue en labels de sección y footer).

## Qué se adoptó, ajustó o descartó de la auditoría

- **Adoptado**: posicionamiento de partner de implementación (reflejado en copy y metodología), separación home institucional / landings de performance, calculadora fuera de la home, evidencia como prioridad nº 1, mail y agenda como alternativas de contacto.
- **Ajustado**: la evidencia se publicó a nivel capacidad hasta validar fichas — ninguna recomendación se ejecutó inventando datos. Los sliders de 6 verticales se mantuvieron como 3 servicios (el sitio ya evitaba el catálogo genérico).
- **Pendiente de decisión del dueño**: respaldo (inventario de logos con permisos, equipo con o sin nombres, tecnologías defendibles), mercado prioritario por idioma, y la primera landing (esperando saber qué canal comercial está activo).

## Estado técnico (contexto que la auditoría original no pudo ver)

Sitio estático sin framework (HTML/CSS/JS vanilla), bilingüe ES `/` + EN `/en/` con hreflang, canonical por idioma, sitemap bilingüe, detección de idioma por navegador (con exención de crawlers) + selector persistente. Lighthouse de la base en producción: Performance 95, Accesibilidad 100, Best Practices 100, SEO 100. OG images propias por idioma, JSON-LD de negocio, favicons completos, 404 bilingüe de marca. Deploy continuo por GitHub (rama `main` → producción; rama `staging` → preview con URL propia).

## Roadmap restante (en orden propuesto)

1. Validación visual del staging por el dueño y primer pase a producción de lo ya aprobado.
2. Respaldo: inventario de logos/experiencia con permisos → sección de credibilidad.
3. Fichas de proyectos con datos reales (estado, cliente, métricas, video de 60s) → enriquecer la sección de evidencia.
4. Primera landing de performance (vertical a definir según canal comercial activo) con oferta de diagnóstico de 30 min, formulario/agenda y medición de conversión; sin intro animado en landings.
5. Activar analytics y, con tráfico, iterar.
6. Search Console + seguimiento de indexación bilingüe.

## Feedback que nos sería útil de tu lado

1. La jerarquía narrativa de la nueva home (hero → dolores → evidencia → servicios → método → CTA): ¿la cambiarías?
2. El copy de "Qué construimos" a nivel capacidad: ¿algún claim suena inflado o vago? ¿Cómo lo afilarías sin inventar datos?
3. ¿Priorizarías el respaldo (logos/equipo) o la primera landing, si el dueño solo puede dedicar tiempo a una?
4. El lead del hero: ¿comunica "para quién" con suficiente claridad o le falta segmento?
