/* The Wai — única fuente de textos. Todo lo que diga [COPY ...] se reemplaza acá.
   Una entrada por página (clave = data-pagina del <body>).
   Copy v1 del 4/11/2026: TheWai/_marketing/landing/[2026-11-04] [landing] Copy de las tres paginas.md */
const CASOS = [
  "Un sello discográfico. Clipping y radar de noticias de su roster: recolecta, clasifica y deja la lista cada mañana. Corre solo desde septiembre; la revisión humana es de dos horas por semana.",
  "Una agencia de medios. Reportes de pauta en LinkedIn para una multinacional de software, en marca blanca: cuatro reportes de dieciséis páginas armados desde los datos de la campaña.",
  "Una agencia de publicidad. Un radar de noticias que corre a las ocho de la mañana y deja la lista del día con lo que importa de cada cliente. Nadie lo abre antes de las nueve."
];

const COPY = {
  marca: "The Wai",
  razon_social: "The Wai · Buenos Aires",
  privacidad_titulo: "Privacidad",
  privacidad: "Esta página no pide datos. Si nos escribís por WhatsApp, usamos tu mensaje solo para responderte. Medimos visitas con herramientas de analítica para saber qué funciona; no vendemos ni cedemos esa información.",
  boton: "¿Lo vemos con tus datos?",
  boton_sub: "Una maqueta andando con lo tuyo, antes de que decidas nada.",
  casos_titulo: "Ya está andando",
  cert_titulo: "Claude Certified Architect – Professional",
  cert_texto: "La certificación de arquitecto de Anthropic, la empresa que hace Claude. Se rinde en un examen de 63 preguntas; la insignia es pública y se verifica en Credly.",
  cert_insignia: "",

  home: {
    momento: "sé que tengo que invertir en inteligencia artificial",
    titulo: "Sabés que tenés que invertir en inteligencia artificial. ¿Y después qué?",
    bajada: "Después, un sistema andando en tu empresa. No un curso, no una herramienta más.",
    lineas: [
      "Lo que hoy se hace a mano y se repite (pedidos, cobranzas, atención, reportes) lo hace solo.",
      "Se diseña desde tu proceso, no desde una herramienta.",
      "Lo construimos, lo mantenemos y, si querés, lo operamos."
    ],
    casos: CASOS,
    cierre: "Primero lo ves con tus datos. Después decidís.",
    video_alt: "Una oficina a las once de la noche, una sola luz prendida; al día siguiente, la planilla se llenó sola."
  },
  m2: { // página /certificado (la clave evita la palabra en el DOM)
    momento: "gurúes de la inteligencia artificial",
    titulo: "¿Ya te quemaste con los gurúes de la inteligencia artificial? Probá con alguien certificado.",
    // Titular alternativo (CERTIFICADO = false). Con la llave prendida se usa "titulo".
    titulo_sin_cert: "¿Ya te quemaste con los gurúes de la inteligencia artificial? Probá con un sistema andando.",
    bajada: "Las credenciales se rinden. Después se construye.",
    lineas: [
      "Un sistema a medida, diseñado por quien construye sistemas con inteligencia artificial en producción, no por quien da charlas.",
      "Arquitectura documentada, pruebas medibles, revisión humana donde el resultado tiene consecuencias.",
      "Mantenimiento por escrito: cuando se rompe, atendemos nosotros."
    ],
    casos: CASOS,
    cierre: "Le pedís matrícula a todo el mundo. Pedísela también al que te hace la inteligencia artificial.",
    video_alt: "Un escenario con humo y promesas; al día siguiente, en la empresa, el mismo pedido se sigue cargando a mano."
  },
  sistemas: {
    momento: "sistemas andando",
    titulo: "No tenés que aprender inteligencia artificial. Tenés que tenerla andando.",
    bajada: "En dos semanas, con tus datos. Sin que nadie en tu empresa tenga que estudiar.",
    lineas: [
      "Día 1, una charla sobre tu proceso. Día 5, la maqueta con tus datos. Día 14, andando.",
      "Se cobra por proyecto, nunca por hora. Mantenimiento mensual por escrito.",
      "Si querés, lo operamos nosotros: vos abrís el lunes y está hecho."
    ],
    casos: CASOS,
    cierre: "Lo vemos con tus datos. Si no te sirve, no seguimos.",
    video_alt: "Dos semanas en una empresa, día por día: la charla, la maqueta con sus datos, el sistema andando."
  }
};
