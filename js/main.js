// Menú móvil
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
    nav.classList.toggle('is-open', !open);
  });
}

// Cifras del cajetín: cuentan desde 0 una sola vez al cargar
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  document.querySelectorAll('.count').forEach((el) => {
    const to = Number(el.dataset.to);
    const duration = 1400;
    const start = performance.now();
    el.textContent = '0';
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(to * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

// Medición: registra en Google Analytics los clics en WhatsApp, cotizar, brochure, etc.
// Solo funciona cuando se activa el código de Analytics en el <head>.
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-track]');
  if (el && typeof window.gtag === 'function') {
    window.gtag('event', el.dataset.track, { link_url: el.href });
  }
});

// Proyectos: filtro por área
const filterButtons = document.querySelectorAll('.filter');
const fichas = document.querySelectorAll('.ficha[data-cat]');
const filterCount = document.querySelector('.filter-count');
function applyFilter(cat) {
  let visible = 0;
  fichas.forEach((f) => {
    const show = cat === 'todos' || f.dataset.cat === cat;
    f.hidden = !show;
    if (show) visible++;
  });
  filterButtons.forEach((b) => {
    const active = b.dataset.filter === cat;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  if (filterCount) {
    filterCount.textContent = visible === 0
      ? 'Todavía no hay proyectos publicados en esta área.'
      : `${visible} ${visible === 1 ? 'proyecto' : 'proyectos'}`;
  }
}
if (filterButtons.length) {
  filterButtons.forEach((b) => b.addEventListener('click', () => applyFilter(b.dataset.filter)));
  applyFilter('todos');
}

// Proyectos: galería con fotos y ficha técnica
const gallery = document.querySelector('dialog.gallery');
if (gallery) {
  const PHOTOS = 4; // fotos por proyecto (marcadores hasta tener las reales)
  const title = gallery.querySelector('#gallery-title');
  const counter = gallery.querySelector('.gallery-counter');
  const thumbs = gallery.querySelector('.gallery-thumbs');
  const info = gallery.querySelector('.gallery-info');

  const show = (i) => {
    counter.textContent = `Foto ${i + 1} de ${PHOTOS}`;
    thumbs.querySelectorAll('button').forEach((t, j) => t.setAttribute('aria-current', String(i === j)));
  };

  document.querySelectorAll('[data-gallery]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const ficha = document.getElementById(btn.dataset.gallery);
      title.textContent = ficha.querySelector('h3').textContent;
      info.replaceChildren(
        ficha.querySelector('.ficha-result').cloneNode(true),
        ficha.querySelector('dl').cloneNode(true)
      );
      thumbs.replaceChildren(...Array.from({ length: PHOTOS }, (_, i) => {
        const t = document.createElement('button');
        t.type = 'button';
        t.textContent = i + 1;
        t.setAttribute('aria-label', `Ver foto ${i + 1}`);
        t.addEventListener('click', () => show(i));
        return t;
      }));
      show(0);
      gallery.showModal();
    });
  });

  gallery.querySelector('.gallery-close').addEventListener('click', () => gallery.close());
  // Cerrar al hacer clic fuera del contenido
  gallery.addEventListener('click', (e) => { if (e.target === gallery) gallery.close(); });
}

// Año del pie de página
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
