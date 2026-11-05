/* The Wai — configuración. Es el único archivo que se toca para prender IDs y la llave. */

// Llave de la certificación. false = el bloque (y la palabra «certificado») no existe en el DOM.
// Prenderla: cambiar a true y deployar.
const CERTIFICADO = false;

// IDs de medición. Vacío = ese tag no se carga.
const IDS = {
  gtm: "",
  ga4: "G-FDCYWBJKMH",
  clarity: "",
  meta_pixel: "",
  tiktok_pixel: "",
  linkedin_partner: "",
  linkedin_conversion_id: "" // conversion_id numérico del evento de LinkedIn; sin él no se dispara lintrk
};

// true = si hay GTM, solo GTM (los demás tags se configuran adentro del contenedor).
const SOLO_GTM = false;

const WHATSAPP = "5491157045808";
