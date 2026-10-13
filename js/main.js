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
const filterButtons = document.querySelectorAll('.filter[data-filter]');
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

// Suministros: catálogo y lista de cotización
const productsEl = document.getElementById('products');
if (productsEl && window.CATALOGO) {
  const WHATSAPP = '580000000000';      // número de WhatsApp de la empresa
  const CORREO = 'ventas@empresa.com';  // correo de ventas
  const STORE_KEY = 'listaCotizacion';
  const CAT_NAMES = { electrico: 'Eléctrico', industrial: 'Industrial', petrolero: 'Petrolero', construccion: 'Construcción' };

  const searchInput = document.getElementById('cat-search');
  const countEl = document.getElementById('cat-count');
  const catButtons = document.querySelectorAll('[data-cat-filter]');
  const panel = document.querySelector('.quote-panel');
  const itemsEl = panel.querySelector('.quote-items');
  const emptyEl = panel.querySelector('.quote-empty');
  const waBtn = document.getElementById('quote-wa');
  const mailBtn = document.getElementById('quote-mail');
  const bar = document.querySelector('.quote-bar');
  const barCount = bar.querySelector('.quote-bar-count');

  let currentCat = 'todos';
  let lista = [];
  try { lista = JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch (e) { lista = []; }
  const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(lista)); } catch (e) { /* sin almacenamiento */ } };

  const normalize = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const inList = (id) => lista.some((i) => i.id === id);

  function renderProducts() {
    const q = normalize(searchInput.value.trim());
    const items = window.CATALOGO.filter((p) =>
      (currentCat === 'todos' || p.cat === currentCat) &&
      (!q || normalize(`${p.nombre} ${p.detalle}`).includes(q)));

    productsEl.replaceChildren(...items.map((p) => {
      const li = document.createElement('li');
      li.className = 'product';
      const added = inList(p.id);
      li.innerHTML = `
        <p class="product-cat">${CAT_NAMES[p.cat]}</p>
        <h3>${p.nombre}</h3>
        <p class="product-detail">${p.detalle}</p>
        <p class="product-unit">Se cotiza por ${p.unidad}</p>
        <button type="button" class="btn ${added ? 'btn-navy' : 'btn-ghost'} product-add" aria-pressed="${added}">
          ${added ? 'En su lista' : 'Añadir a cotización'}
        </button>`;
      li.querySelector('button').addEventListener('click', () => {
        if (inList(p.id)) {
          lista = lista.filter((i) => i.id !== p.id);
        } else {
          lista.push({ id: p.id, nombre: p.nombre, unidad: p.unidad, cantidad: 1 });
        }
        save();
        renderProducts();
        renderList();
      });
      return li;
    }));

    countEl.textContent = items.length === 0
      ? 'No encontramos productos con esa búsqueda. Puede agregarlo a su lista como otro producto.'
      : `${items.length} ${items.length === 1 ? 'producto' : 'productos'}`;
  }

  function message() {
    const lines = lista.map((i) => `- ${i.cantidad} × ${i.nombre}${i.unidad ? ` (${i.unidad})` : ''}`);
    return `Hola, vengo de la página web y quiero cotizar estos suministros:\n${lines.join('\n')}`;
  }

  function renderList() {
    const empty = lista.length === 0;
    emptyEl.hidden = !empty;
    [waBtn, mailBtn].forEach((b) => b.setAttribute('aria-disabled', String(empty)));
    waBtn.href = empty ? '#' : `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message())}`;
    mailBtn.href = empty ? '#' : `mailto:${CORREO}?subject=${encodeURIComponent('Solicitud de cotización de suministros')}&body=${encodeURIComponent(message())}`;

    const total = lista.length;
    barCount.textContent = total;
    bar.hidden = empty;

    itemsEl.replaceChildren(...lista.map((i) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="qi-name"><strong></strong><span></span></div>
        <label class="qi-qty"><span class="visually-hidden">Cantidad</span><input type="number" min="1" step="1" inputmode="numeric"></label>
        <button type="button" class="qi-remove">Quitar</button>`;
      li.querySelector('strong').textContent = i.nombre;
      li.querySelector('.qi-name span').textContent = i.unidad;
      const input = li.querySelector('input');
      input.value = i.cantidad;
      input.setAttribute('aria-label', `Cantidad de ${i.nombre}`);
      input.addEventListener('change', () => {
        i.cantidad = Math.max(1, parseInt(input.value, 10) || 1);
        input.value = i.cantidad;
        save();
        renderList();
      });
      li.querySelector('.qi-remove').setAttribute('aria-label', `Quitar ${i.nombre}`);
      li.querySelector('.qi-remove').addEventListener('click', () => {
        lista = lista.filter((x) => x !== i);
        save();
        renderProducts();
        renderList();
      });
      return li;
    }));
  }

  // Los botones de enviar no hacen nada si la lista está vacía
  [waBtn, mailBtn].forEach((b) => b.addEventListener('click', (e) => {
    if (b.getAttribute('aria-disabled') === 'true') e.preventDefault();
  }));

  panel.querySelector('.quote-add').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('quote-custom');
    const name = input.value.trim();
    if (!name) { input.focus(); return; }
    lista.push({ id: `x${Date.now()}`, nombre: name, unidad: '', cantidad: 1 });
    input.value = '';
    save();
    renderList();
  });

  panel.querySelector('.quote-clear').addEventListener('click', () => {
    lista = [];
    save();
    renderProducts();
    renderList();
  });

  catButtons.forEach((b) => b.addEventListener('click', () => {
    currentCat = b.dataset.catFilter;
    catButtons.forEach((x) => {
      const active = x === b;
      x.classList.toggle('is-active', active);
      x.setAttribute('aria-pressed', String(active));
    });
    renderProducts();
  }));
  searchInput.addEventListener('input', renderProducts);

  renderProducts();
  renderList();
}

// Año del pie de página
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
