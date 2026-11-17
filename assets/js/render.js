import { ROLES, STACK, PROYECTOS, EXPERIENCIA, FORMACION, CERTIFICACIONES, PERFIL } from './data.js';
import { TEXTOS } from './i18n.js';
import { ICONOS } from './icons.js';

const $ = (sel) => document.querySelector(sel);

const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const chips = (arr) =>
  arr.length ? `<ul class="chips">${arr.map((i) => `<li class="chip">${esc(i)}</li>`).join('')}</ul>` : '';

function pintarRoles(lang) {
  $('#roles').innerHTML = ROLES[lang].map((r) => `<li>${esc(r)}</li>`).join('');
}

function pintarStack(lang) {
  $('#bento').innerHTML = STACK.map((s) => `
    <article class="tile tile--${s.span} reveal">
      <div class="tile__head">
        <span class="tile__icon">${ICONOS[s.icon] || ''}</span>
        <h3 class="tile__title">${esc(s[lang].titulo)}</h3>
      </div>
      ${chips(s.items)}
    </article>`).join('');
}

function ventana(p, lang, clase = '') {
  const img = p.imagenes[0];
  const cuerpo = img
    ? `<img src="${esc(img.src)}" width="${img.ancho}" height="${img.alto}" alt="${esc(img[lang])}" loading="lazy" decoding="async">`
    : `<span class="win__vacio">${esc(p.ventana)}</span>`;
  return `
    <div class="win ${clase}">
      <div class="win__bar" aria-hidden="true">
        <span class="win__dots"><i></i><i></i><i></i></span>
        <span class="win__url">${esc(p.ventana)}</span>
      </div>
      <div class="win__body">${cuerpo}</div>
    </div>`;
}

function botones(p, lang) {
  const t = TEXTOS[lang];
  const demo = p.demo
    ? `<a class="btn btn--primary btn--sm" href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer">
         <span data-icon="external"></span>${esc(t['proy.demo'])}</a>`
    : '';
  const codigo = p.codigo
    ? `<a class="btn btn--ghost btn--sm" href="${esc(p.codigo)}" target="_blank" rel="noopener noreferrer">
         <span data-icon="github"></span>GitHub</a>`
    : `<span class="project__private"><span data-icon="lock"></span>${esc(t['proy.privado'])}</span>`;
  return demo + codigo;
}

function unProyecto(p, i, lang) {
  const c = p[lang];
  const t = TEXTOS[lang];
  return `
    <article class="project ${p.destacado ? 'project--featured' : ''} reveal">
      <button class="project__open" type="button" data-proyecto="${i}"
              aria-label="${esc(t['proy.ver'])}: ${esc(c.titulo)}">
        ${ventana(p, lang)}
      </button>
      <div class="project__body">
        <p class="project__meta">
          <span class="project__year">${esc(p.anio)}</span>
          <span class="dot"></span>
          <span>${esc(c.tipo)}</span>
        </p>
        <h3 class="project__title">${esc(c.titulo)}</h3>
        <p class="project__desc">${esc(c.resumen)}</p>
        ${chips(p.stack.slice(0, 5))}
        <div class="project__actions">
          <button class="btn btn--ghost btn--sm" type="button" data-proyecto="${i}">
            ${esc(t['proy.ver'])}
          </button>
          ${botones(p, lang)}
        </div>
      </div>
    </article>`;
}

function pintarProyectos(lang) {
  $('#proyectos-lista').innerHTML = PROYECTOS.map((p, i) => unProyecto(p, i, lang)).join('');
}

export function pintarDetalle(i, lang) {
  const p = PROYECTOS[i];
  const c = p[lang];
  const t = TEXTOS[lang];

  const miniaturas = p.imagenes.length > 1
    ? `<div class="gal__thumbs" role="list">${p.imagenes.map((img, n) => `
        <button class="gal__thumb" type="button" role="listitem" data-foto="${n}"
                aria-label="${esc(img[lang])}" ${n === 0 ? 'aria-current="true"' : ''}>
          <img src="${esc(img.src)}" alt="" loading="lazy" decoding="async">
        </button>`).join('')}</div>`
    : '';

  $('#detalle-contenido').innerHTML = `
    <div class="gal">
      ${ventana(p, lang, 'win--grande')}
      ${p.imagenes.length ? `<p class="gal__pie" id="gal-pie">${esc(p.imagenes[0][lang])}</p>` : ''}
      ${miniaturas}
    </div>
    <div class="detalle__info">
      <p class="project__meta">
        <span class="project__year">${esc(p.anio)}</span>
        <span class="dot"></span>
        <span>${esc(c.tipo)}</span>
      </p>
      <h2 class="detalle__title" id="detalle-titulo">${esc(c.titulo)}</h2>
      <p class="project__desc">${esc(c.resumen)}</p>
      <ul class="project__points">${c.puntos.map((x) => `<li><span>${x}</span></li>`).join('')}</ul>
      <p class="project__stackLabel">${esc(t['proy.stack'])}</p>
      ${chips(p.stack)}
      <div class="project__actions">${botones(p, lang)}</div>
    </div>`;

  const grande = $('#detalle-contenido .win--grande img');
  $('#detalle-contenido').querySelectorAll('.gal__thumb').forEach((b) => {
    b.addEventListener('click', () => {
      const img = p.imagenes[Number(b.dataset.foto)];
      grande.src = img.src;
      grande.width = img.ancho;
      grande.height = img.alto;
      grande.alt = img[lang];
      $('#gal-pie').textContent = img[lang];
      grande.closest('.win').classList.toggle('win--vertical', img.alto > img.ancho);
      b.parentElement.querySelectorAll('.gal__thumb').forEach((x) => x.removeAttribute('aria-current'));
      b.setAttribute('aria-current', 'true');
    });
  });
}

function unaEntrada(e, lang) {
  const c = e[lang];
  return `
    <article class="tl reveal">
      <div class="tl__when">
        ${esc(lang === 'en' ? e.anioEn : e.anio)}
        <span class="tl__where">${esc(e.lugar)}</span>
      </div>
      <div>
        <h3 class="tl__role">${esc(c.rol)}</h3>
        <p class="tl__org">${esc(c.org)}<span class="tag">${esc(c.etiqueta)}</span></p>
      </div>
    </article>`;
}

function pintarExperiencia(lang) {
  $('#experiencia-lista').innerHTML = EXPERIENCIA.map((e) => unaEntrada(e, lang)).join('');
}

function pintarFormacion(lang) {
  $('#formacion-lista').innerHTML = FORMACION.map((e) => unaEntrada(e, lang)).join('');
}

function pintarCertificaciones(lang) {
  $('#certs').innerHTML = CERTIFICACIONES.map((g) => `
    <div class="reveal">
      <h3 class="cert__issuer">${esc(g.emisor)}</h3>
      <ul class="cert__list">
        ${g[lang].map((i) => `<li>${ICONOS.check}<span>${esc(i)}</span></li>`).join('')}
      </ul>
    </div>`).join('');
}

function pintarCV(lang) {
  const t = TEXTOS[lang];
  const archivo = (idioma, nombre) => `
    <a class="cv__file" href="${PERFIL.cv[idioma]}" target="_blank" rel="noopener"
       download hreflang="${idioma}">
      <span class="cv__fileIcon">${ICONOS.file}</span>
      <span>
        <span class="cv__fileName">${esc(nombre)}</span>
        <span class="cv__fileMeta">${esc(t['cv.meta'])} · ${esc(t['cv.download'])}</span>
      </span>
    </a>`;
  $('#cv-files').innerHTML = archivo('es', t['cv.esName']) + archivo('en', t['cv.enName']);
}

export function renderizar(lang) {
  pintarRoles(lang);
  pintarStack(lang);
  pintarProyectos(lang);
  pintarExperiencia(lang);
  pintarFormacion(lang);
  pintarCertificaciones(lang);
  pintarCV(lang);
}
