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

function unProyecto(p, lang, destacado) {
  const c = p[lang];
  const enlaces = (p.enlaces || []).map((e) => `
    <a class="link" href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">
      ${esc(e.texto)}
    </a>`).join('');

  return `
    <article class="project ${destacado ? 'project--featured' : ''} reveal">
      <div class="project__main">
        <p class="project__meta">
          <span class="project__year">${esc(p.anio)}</span>
          <span class="dot"></span>
          <span>${esc(c.tipo)}</span>
        </p>
        <h3 class="project__title">${esc(c.titulo)}</h3>
        <p class="project__desc">${esc(c.resumen)}</p>
        <ul class="project__points">${c.puntos.map((t) => `<li><span>${t}</span></li>`).join('')}</ul>
      </div>
      <div class="project__side">
        <div>
          <p class="project__stackLabel">${esc(TEXTOS[lang]['proy.stack'])}</p>
          ${chips(p.stack)}
        </div>
        ${enlaces ? `<div class="project__links">${enlaces}</div>` : ''}
      </div>
    </article>`;
}

function pintarProyectos(lang) {
  const [primero, ...resto] = PROYECTOS;
  const tarjetas = resto.map((p) => unProyecto(p, lang, false));

  const parejas = [];
  for (let i = 0; i < tarjetas.length; i += 2) {
    const fila = tarjetas.slice(i, i + 2);
    const solo = fila.length === 1 ? ' projects__pair--solo' : '';
    parejas.push(`<div class="projects__pair${solo}">${fila.join('')}</div>`);
  }

  $('#proyectos-lista').innerHTML = unProyecto(primero, lang, true) + parejas.join('');
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
        <ul class="tl__points">${c.puntos.map((t) => `<li><span>${t}</span></li>`).join('')}</ul>
        ${e.stack.length ? `<div class="tl__stack">${chips(e.stack)}</div>` : ''}
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
