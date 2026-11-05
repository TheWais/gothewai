/* The Wai — suite de medición. IDs en js/config.js (vacío = no se carga).
   Todo va envuelto en try/catch: un tag bloqueado o caído nunca rompe la página.
   CONSENT: no hay banner (B2B Argentina). Si hiciera falta, acá se engancharía:
   envolver cargarTags() en un `if (consentimiento)` o llamarla desde el callback del banner. */
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  function script(src, attrs) {
    var s = document.createElement("script"); s.async = true; s.src = src;
    for (var k in (attrs || {})) s.setAttribute(k, attrs[k]);
    document.head.appendChild(s);
  }
  function seguro(f) { try { f(); } catch (e) { /* tag caído: se ignora */ } }

  var gtmActivo = !!IDS.gtm;
  var directos = !(gtmActivo && SOLO_GTM);

  function cargarTags() {
    if (gtmActivo) seguro(function () {
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      script("https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(IDS.gtm));
    });
    if (!directos) return;

    if (IDS.ga4) seguro(function () {
      script("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(IDS.ga4));
      gtag("js", new Date()); gtag("config", IDS.ga4);
    });
    if (IDS.clarity) seguro(function () {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", IDS.clarity);
    });
    if (IDS.meta_pixel) seguro(function () {
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
        t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
      }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      fbq("init", IDS.meta_pixel); fbq("track", "PageView");
    });
    if (IDS.tiktok_pixel) seguro(function () {
      !function (w, d, t) {
        w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
        ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
        ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }; };
        for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
        ttq.load = function (e) {
          var n = "https://analytics.tiktok.com/i18n/pixel/events.js";
          ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._t = ttq._t || {}; ttq._t[e] = +new Date;
          var o = d.createElement("script"); o.type = "text/javascript"; o.async = !0; o.src = n + "?sdkid=" + e + "&lib=" + t;
          var a = d.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a);
        };
        ttq.load(IDS.tiktok_pixel); ttq.page();
      }(window, document, "ttq");
    });
    if (IDS.linkedin_partner) seguro(function () {
      window._linkedin_partner_id = IDS.linkedin_partner;
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(IDS.linkedin_partner);
      script("https://snap.licdn.com/li.lms-analytics/insight.min.js");
    });
  }
  seguro(cargarTags);

  window.TW = {
    evento: function (nombre, p) {
      p = p || {};
      // dataLayer: lo leen GTM y las pruebas. Objeto con `event` para disparadores de GTM.
      seguro(function () { var o = { event: nombre }; for (var k in p) o[k] = p[k]; window.dataLayer.push(o); });
      if (!directos) return;
      if (IDS.ga4) seguro(function () { gtag("event", nombre, p); });
      if (IDS.meta_pixel) seguro(function () {
        if (window.fbq) { fbq("trackCustom", nombre, p); if (nombre === "clic_whatsapp") fbq("track", "Contact"); }
      });
      if (IDS.tiktok_pixel) seguro(function () {
        if (window.ttq) ttq.track(nombre === "clic_whatsapp" ? "Contact" : nombre);
      });
      if (IDS.linkedin_partner && IDS.linkedin_conversion_id) seguro(function () {
        if (window.lintrk && nombre === "clic_whatsapp") lintrk("track", { conversion_id: IDS.linkedin_conversion_id });
      });
      if (IDS.clarity) seguro(function () {
        if (window.clarity) { for (var k in p) clarity("set", k, String(p[k])); clarity("event", nombre); }
      });
    }
  };
})();
