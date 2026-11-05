/* Rellena cada página desde COPY (js/copy.js) y respeta la llave CERTIFICADO. */
(function () {
  var pagina = document.body.getAttribute("data-pagina");
  var c = COPY[pagina];
  if (!c) return;
  var $ = function (s) { return document.querySelector(s); };

  var titulo = c.titulo;
  if (pagina === "m2" && !CERTIFICADO && c.titulo_sin_cert) titulo = c.titulo_sin_cert;
  $("#titulo").textContent = titulo;
  if (c.bajada) { var bj = document.createElement("p"); bj.className = "bajada"; bj.textContent = c.bajada; $("#titulo").insertAdjacentElement("afterend", bj); }

  var ul = $("#lineas");
  c.lineas.forEach(function (t) { var li = document.createElement("li"); li.textContent = t; ul.appendChild(li); });

  $("#casos-titulo").textContent = COPY.casos_titulo;
  var ol = $("#casos");
  c.casos.forEach(function (t, i) {
    var li = document.createElement("li");
    var n = document.createElement("span"); n.className = "n"; n.textContent = String(i + 1);
    var p = document.createElement("span"); p.textContent = t;
    li.appendChild(n); li.appendChild(p); ol.appendChild(li);
  });

  // Certificación: solo existe en el DOM con la llave prendida.
  if (CERTIFICADO) {
    var s = document.createElement("section");
    s.className = "bloque cert"; s.id = "cert";
    var h = document.createElement("h2"); h.textContent = COPY.cert_titulo;
    var p = document.createElement("p"); p.textContent = COPY.cert_texto;
    var ins = document.createElement("p"); ins.className = "insignia"; ins.textContent = COPY.cert_insignia; // reemplazar por la insignia de Credly
    s.appendChild(h); s.appendChild(p); s.appendChild(ins);
    // En la página del momento 2 la credencial es la protagonista: va arriba de los casos.
    var slot = $("#cert-slot");
    if (pagina === "m2") { var casosSec = $("#casos").closest("section"); casosSec.parentNode.insertBefore(s, casosSec); } else { slot.appendChild(s); }
  }

  // WhatsApp: mismo mensaje en los dos botones; cambia solo la posición para medir.
  var msg = 'Hola, vi el video de "' + c.momento + '". Quiero verlo con mis datos.';
  var href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
  document.querySelectorAll("a[data-wa]").forEach(function (a) {
    a.href = href; a.textContent = COPY.boton;
    if (COPY.boton_sub && a.getAttribute("data-wa") === "arriba") { var sb = document.createElement("p"); sb.className = "boton-sub"; sb.textContent = COPY.boton_sub; a.insertAdjacentElement("afterend", sb); }
    if (c.cierre && a.getAttribute("data-wa") === "abajo") { var ci = document.createElement("h2"); ci.className = "cierre"; ci.textContent = c.cierre; a.insertAdjacentElement("beforebegin", ci); }
    a.addEventListener("click", function () {
      TW.evento("clic_whatsapp", { pagina: pagina, posicion: a.getAttribute("data-wa") });
    });
  });

  var v = $("#video");
  v.setAttribute("aria-label", c.video_alt);
  var mitad = false;
  v.addEventListener("timeupdate", function () {
    if (!mitad && v.duration && v.currentTime / v.duration >= 0.5) {
      mitad = true; TW.evento("video_50", { pagina: pagina });
    }
  });

  $("#marca").textContent = COPY.marca;
  $("#razon").textContent = COPY.razon_social;
  $("#priv-t").textContent = COPY.privacidad_titulo;
  $("#priv-x").textContent = COPY.privacidad;
})();
