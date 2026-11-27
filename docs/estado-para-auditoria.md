# The WAI — Estado del rediseño comercial (para revisión del auditor)

**Fecha:** 27 de noviembre de 2026
**Producción (versión anterior, intacta):** https://www.gothewai.com/
**Staging (versión nueva, en trabajo):** https://gothewai-git-staging-gothewai.vercel.app/ — hoy requiere login de Vercel; quedará pública en breve. Versión en inglés en `/en/`.

Contexto: tras tu auditoría, el dueño armó un brief de evolución y venimos ejecutándolo por fases: revisión crítica primero, decisiones una por una con el dueño, implementación solo en staging (producción congelada hasta aprobación final). Nada de lo publicado inventa clientes, métricas, capturas ni capacidades. Como no podés navegar staging todavía, la sección "El sitio hoy" de abajo lo describe completo, con el copy textual.

---

## El sitio hoy, sección por sección (staging)

Una sola página larga (one-page), en español en `/` y espejo completo en inglés en `/en/`. Estética: fondo blanco, tipografía Satoshi bold para titulares (negro, tracking apretado), Inter para texto, Roboto Mono para labels tipo `/SECCIÓN` en mayúsculas; acentos en celeste (#d2e9fe) y detalles en azul; secciones separadas por líneas finas con una barrita de progreso oscura que se desliza al entrar en viewport; los labels mono se "descifran" letra a letra (efecto scramble) al aparecer.

### 0. Intro de entrada (overlay, ~3 s, una vez por sesión)
Pantalla negra con tres frases en secuencia: "El futuro de tu empresa." → "Ya está acá." → logo "The WAI®" en celeste; luego el overlay se desliza hacia arriba y revela el sitio. Se puede saltear con un click; en visitas repetidas de la misma sesión no aparece; respeta `prefers-reduced-motion`. (La frase de marca de la versión anterior vive acá ahora.)

### 1. Navegación
Barra fija translúcida con blur: logo "The WAI®" — links PROYECTOS · SERVICIOS · CÓMO TRABAJAMOS · CONTACTO (mono, mayúsculas; hover solo cambia color) — selector de idioma como pill segmentado [ES|EN] con el activo relleno — botón negro "Hablemos" (con flechita en caja celeste que se intercambia animada al hover; abre WhatsApp con mensaje prellenado).
En mobile: hamburguesa → overlay negro fullscreen con links gigantes numerados /01-/04, pill de idioma, botón blanco "Hablemos por WhatsApp" y label "Buenos Aires, Argentina — 2026".

### 2. Hero
Tipografía monumental (hasta ~80px), tres líneas que emergen de máscaras una tras otra:

> **Hacemos que tu empresa**
> **funcione mejor con**
> **inteligencia artificial.**

Lead: "Diseñamos, construimos e integramos soluciones en tu operación: automatización de procesos, agentes y herramientas a medida. Sin tecnicismos. Con resultados concretos."
Botones: "Hablemos" (negro, → WhatsApp) y "Ver proyectos" (gris claro, ancla a la sección de evidencia).
Debajo, una franja con label `/ESPECIALIDADES` y un marquee en mono que rota: Automatización · Agentes conversacionales · Análisis de datos · Asistentes internos · Consultoría estratégica.
EN: "We make your business run better with AI." / "We design, build and integrate solutions into your operations: process automation, agents and custom tools. No jargon. Just concrete results." / "Let's talk" · "See projects".

### 3. Pain points
Cuatro chips grises con ícono de alerta naranja, alternados izquierda/derecha, que aparecen escalonados alrededor de una frase central grande en Satoshi:
- "Tareas repetitivas que frenan al equipo"
- "Decisiones lentas por falta de datos"
- **"Conocemos estos desafíos. Por eso tu camino hacia el impacto con IA empieza acá."** (statement central)
- "Cuellos de botella en la operación"
- "Crecer solo a fuerza de más gente"

### 4. Proyectos — "Qué construimos" (sección nueva, la evidencia)
Label `/PROYECTOS`, título "Qué construimos", subtítulo apilado debajo: "Tres sistemas que muestran cómo resolvemos un problema concreto de punta a punta." Tres bloques editoriales (no cards), separados por líneas finas, cada uno con kicker mono, título, párrafos "El problema:" / "La solución:" con esos prefijos en negrita, tags mono de contexto, y a la derecha un esquema animado del mecanismo en SVG azul (diagramas abstractos del flujo, no capturas de producto):

**/01 — RRHH · Operaciones — "Agente de trámites internos"**
El problema: solicitudes, licencias y consultas del personal que se acumulan en mails y chats, y un equipo administrativo que pierde horas clasificando y persiguiendo papeles.
La solución: un agente que recibe cada solicitud, la clasifica, verifica la documentación, consulta los sistemas internos y la deriva al circuito que corresponde. Las personas siguen decidiendo; el agente hace el trabajo de mesa de entrada, a toda hora.
Tags: WhatsApp y mail · Sistemas internos · Supervisión humana. Esquema: documentos que entran, nodo de clasificación, derivación a dos destinos con líneas punteadas animadas.

**/02 — Ventas · Marketing — "Motor de generación de demanda"**
El problema: prospección manual — listas frías, poca personalización y un seguimiento que depende de la memoria de cada vendedor.
La solución: un sistema que identifica empresas objetivo, enriquece los datos, personaliza el contacto y sostiene el seguimiento midiendo cada paso. El equipo comercial llega a la conversación con el trabajo previo hecho.
Tags: Identificación · Enriquecimiento · Seguimiento medido. Esquema: radar de anillos concéntricos con puntos satélite pulsando.

**/03 — Contenido · Media — "Línea de producción de contenido"**
El problema: horas de material grabado que nunca se convierten en piezas publicables, porque editar, subtitular y publicar consume al equipo.
La solución: un pipeline que detecta los mejores segmentos, los edita, los subtitula y los deja listos para publicar. De material crudo a piezas en serie, con control editorial humano.
Tags: Video · Edición automática · Subtitulado. Esquema: tira de film con segmentos que se encienden en secuencia y una pieza de salida.

*(Redactados a nivel capacidad: sin clientes, métricas ni capturas porque las fichas con permisos siguen pendientes de validación con el dueño.)*

### 5. Servicios — "Qué hacemos"
Label `/SERVICIOS`, subtítulo: "Diseñamos y construimos soluciones de IA que resuelven problemas reales de negocio y generan impacto medible." Tres cards gris claro con ícono lineal azul:
- **Automatización de procesos** — "Identificamos los cuellos de botella en tu operación y los resolvemos con flujos inteligentes que trabajan solos, las 24 horas."
- **Desarrollo de soluciones AI** — "Construimos herramientas a medida: agentes conversacionales, análisis de datos, asistentes internos y mucho más."
- **Consultoría estratégica** (card ancha) — "Te acompañamos en el diseño de una hoja de ruta clara para integrar IA en tu empresa de forma rentable y sostenible."

### 6. Metodología — "Cómo trabajamos" (intacta de la versión anterior)
Label `/CÓMO TRABAJAMOS`, título "Simple. Directo. Efectivo." Scrollytelling con sección fija: número gigante /01→/04, ilustración azul animada que cambia por paso (radar que escanea, planos que levitan, bloques que se ensamblan, órbita continua) y texto que hace crossfade:
1. **Diagnóstico rápido** — "Entendemos tu negocio, tus procesos y dónde está el mayor potencial de mejora. Sin vueltas."
2. **Diseño de solución** — "Definimos juntos qué construir, con qué tecnología y en qué tiempos. Todo medible desde el día uno."
3. **Implementación** — "Desarrollamos, testeamos e integramos la solución en tu operación con el menor impacto posible en el día a día."
4. **Soporte continuo** — "No entregamos y desaparecemos. Seguimos con vos para iterar, mejorar y escalar según crezca tu negocio."
En mobile colapsa a lista simple.

### 7. CTA de contacto
Label `/CONTACTO`, título grande "¿Listo para trabajar diferente?", botón negro "Hablemos" (WhatsApp) y debajo, discreta: "¿Preferís escribir? contact@gothewai.com" (casilla operativa).

### 8. Footer (oscuro, #131313, con glow azul)
Tres columnas: "Sobre The WAI" ("Estudio de inteligencia artificial aplicada, con base en Buenos Aires. Optimizamos procesos y desarrollamos soluciones de IA para empresas. Sin tecnicismos. Con resultados concretos."), "Navegación" (Proyectos/Servicios/Cómo trabajamos/Contacto) y "Contacto" (contact@gothewai.com, WhatsApp, Buenos Aires). Barra final: "The WAI®" y "2026".

### 9. Extras
404 propia en la estética del sitio (bilingüe por JS, botón "Volver al inicio"). OG images propias por idioma para compartir en redes. JSON-LD de negocio (ProfessionalService con teléfono, mail y Buenos Aires).

---

## Decisiones tomadas respecto de tu auditoría

- **Adoptado**: tu headline preferido (opción 1, elegido por el dueño); posicionamiento de partner de implementación; separación home institucional / landings de performance; calculadora fuera de la home; evidencia como prioridad nº 1; mail como alternativa de contacto.
- **Ajustado**: la evidencia se publicó a nivel capacidad hasta validar fichas — nada se ejecutó inventando datos; el catálogo se mantuvo en 3 servicios (no 6 verticales).
- **Decisiones de diseño del dueño en esta ronda**: conservar sistema visual y animaciones; hero tipográfico monumental sin mockups (se eliminó un chat simulado); subtítulos apilados; efecto scramble solo en labels de sección (se quitó del hover del menú).
- **Pendiente de decisión del dueño**: respaldo (logos con permisos, equipo con o sin nombres, tecnologías defendibles), mercado prioritario por idioma, primera landing (esperando definir canal comercial activo).

## Estado técnico

Estático sin framework (HTML/CSS/JS vanilla). Bilingüe con hreflang, canonical por idioma, sitemap bilingüe, detección de idioma por navegador (crawlers exentos) + selector persistente. Lighthouse de la base: Performance 95, Accesibilidad 100, Best Practices 100, SEO 100; cookieless (sin banner). Medición instrumentada (pageviews + eventos de click en WhatsApp/mail por sección) pero no activada aún, por decisión del dueño. Deploy continuo por GitHub: `main` → producción, `staging` → preview.

## Roadmap restante (en orden propuesto)

1. Validación visual del staging por el dueño y primer pase a producción de lo aprobado.
2. Respaldo: inventario de logos/experiencia con permisos → sección de credibilidad.
3. Fichas de proyectos con datos reales (estado, cliente, métricas, video de 60 s) → enriquecer la evidencia.
4. Primera landing de performance (vertical según canal comercial activo), con oferta de diagnóstico de 30 min, formulario/agenda y medición; sin intro animado en landings.
5. Activar analytics; Search Console e indexación bilingüe.

## Feedback que nos sería útil de tu lado

1. La jerarquía narrativa de la nueva home (hero → dolores → evidencia → servicios → método → CTA): ¿la cambiarías?
2. El copy de "Qué construimos" a nivel capacidad (está completo arriba): ¿algún claim suena inflado o vago? ¿Cómo lo afilarías sin inventar datos?
3. ¿Priorizarías el respaldo (logos/equipo) o la primera landing, si el dueño solo puede dedicar tiempo a una?
4. El lead del hero: ¿comunica "para quién" con suficiente claridad o le falta segmento?
