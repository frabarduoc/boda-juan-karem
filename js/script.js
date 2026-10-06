// Cuenta regresiva hasta la ceremonia (hora de Chile, UTC-3)
var target = new Date("2026-11-28T18:00:00-03:00");

function pad(n){ return String(n).padStart(2, "0"); }

function tick(){
  var diff = target - new Date();
  if (diff < 0) diff = 0;
  var d = Math.floor(diff / 86400000);
  var h = Math.floor(diff / 3600000) % 24;
  var m = Math.floor(diff / 60000) % 60;
  var s = Math.floor(diff / 1000) % 60;
  document.getElementById("cd-d").textContent = d;
  document.getElementById("cd-h").textContent = pad(h);
  document.getElementById("cd-m").textContent = pad(m);
  document.getElementById("cd-s").textContent = pad(s);
}
tick();
setInterval(tick, 1000);

// Enlaces a Google Maps
document.getElementById("link-ceremonia").href =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Capilla XXX, XXX");
document.getElementById("link-fiesta").href =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Av. Recoleta 5377, Santiago");

// Abrir el sobre: revela el contenido e intenta iniciar la música
var cover = document.getElementById("cover");
var contenido = document.getElementById("contenido");
var musicBtn = document.getElementById("music-toggle");
var bgm = document.getElementById("bgm");
var opened = false;

function abrirInvitacion(){
  if (opened) return;
  opened = true;
  cover.classList.add("opened");
  contenido.hidden = false;
  musicBtn.hidden = false;
  setTimeout(function(){ cover.hidden = true; }, 900);
  bgm.play().catch(function(){ /* el navegador bloqueó el autoplay; el botón de música queda disponible */ });
}
cover.addEventListener("click", abrirInvitacion);

musicBtn.addEventListener("click", function(){
  if (bgm.paused){
    bgm.play().catch(function(){});
    musicBtn.style.color = "var(--sage-deep)";
  } else {
    bgm.pause();
    musicBtn.style.color = "var(--ink-soft)";
  }
});
