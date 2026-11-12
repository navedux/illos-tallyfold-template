// Light and dark switch.
document.getElementById("theme").addEventListener("click", function () {
  var root = document.documentElement;
  var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("tallyfold-theme", next); } catch (e) {}
});

// Mobile menu: close after a pick, on outside click and on Escape.
var menu = document.querySelector(".menu");
menu.addEventListener("click", function (e) { if (e.target.closest("a")) menu.open = false; });
document.addEventListener("click", function (e) { if (menu.open && !menu.contains(e.target)) menu.open = false; });
document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary").focus(); } });

// Desk tabs. Without JavaScript all three desks stay visible, stacked.
var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
function pick(tab, focus) {
  tabs.forEach(function (t) {
    var on = t === tab;
    t.setAttribute("aria-selected", on ? "true" : "false");
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  });
  if (focus) tab.focus();
}
tabs.forEach(function (t, i) {
  t.addEventListener("click", function () { pick(t); });
  t.addEventListener("keydown", function (e) {
    var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (d) { e.preventDefault(); pick(tabs[(i + d + tabs.length) % tabs.length], true); }
  });
});
pick(tabs[0]);

// Demo form: no backend, so confirm in place.
var form = document.getElementById("signup");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var note = document.getElementById("signup-note"), email = form.elements.email;
  if (!email.checkValidity()) { note.textContent = "Type your firm email to pick a time."; note.className = "note"; email.focus(); return; }
  note.textContent = "Sent. Three times for the call will reach your inbox today.";
  note.className = "note ok";
  form.reset();
});

// Illos: each illustration loops while it is on screen and pauses when it is not.
if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
  document.querySelectorAll("[data-illos]").forEach(function (el) {
    el.style.setProperty("--illos-play", "paused");
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { el.style.setProperty("--illos-play", e.isIntersecting ? "running" : "paused"); });
    }).observe(el);
  });
