import { PERFIL } from './data.js';
import { idiomaInicial, guardarIdioma, aplicarIdioma, TEXTOS } from './i18n.js';
import { pintarIconos } from './icons.js';
import { renderizar } from './render.js';

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const sinMovimiento = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function enlazarPerfil() {
  $$('[data-href]').forEach((el) => {
    const valor = {
      email: `mailto:${PERFIL.email}`,
      linkedin: PERFIL.linkedin,
      github: PERFIL.github
    }[el.dataset.href];
    if (valor) el.href = valor;
  });
  $$('[data-text="email"]').forEach((el) => { el.textContent = PERFIL.email; });
}

function iniciarIdioma() {
  const btn = $('#langbtn');
  const code = $('#langbtn-code');
  let actual = idiomaInicial();

  const usar = (lang, guardar = true) => {
    actual = lang;
    aplicarIdioma(lang);
    renderizar(lang);
    observarRevelado();
    pintarIconos();
    code.textContent = lang === 'es' ? 'EN' : 'ES';
    const cv = $('#hero-cv');
    if (cv) cv.href = PERFIL.cv[lang];
    if (guardar) guardarIdioma(lang);
    colocarIndicador();
  };

  btn.addEventListener('click', () => usar(actual === 'es' ? 'en' : 'es'));
  usar(actual, false);
}

let colocarIndicador = () => {};

function iniciarNav() {
  const nav   = $('#nav');
  const lista = $('#nav-links');
  const ind   = $('#nav-ind');
  const links = $$('.nav__link', lista);

  const BASE = 100;
  const INSET = 11;

  const colocar = (el) => {
    if (!el) return;
    ind.style.setProperty('--ind-x', `${el.offsetLeft + INSET}px`);
    ind.style.setProperty('--ind-s', `${Math.max(0, el.offsetWidth - INSET * 2) / BASE}`);
  };
  const activo = () => links.find((l) => l.getAttribute('aria-current') === 'true');

  colocarIndicador = () => {
    const a = activo();
    ind.classList.toggle('is-on', Boolean(a));
    colocar(a);
  };

  links.forEach((l) => {
    const entrar = () => { ind.classList.add('is-on'); colocar(l); };
    l.addEventListener('mouseenter', entrar);
    l.addEventListener('focus', entrar);
  });
  lista.addEventListener('mouseleave', colocarIndicador);

  const secciones = links
    .map((l) => ({ link: l, el: $(l.getAttribute('href')) }))
    .filter((s) => s.el);

  const spy = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      const s = secciones.find((x) => x.el === e.target);
      links.forEach((l) => l.removeAttribute('aria-current'));
      s.link.setAttribute('aria-current', 'true');
      if (!lista.matches(':hover')) colocarIndicador();
    });
  }, { rootMargin: '-18% 0px -72% 0px' });
  secciones.forEach((s) => spy.observe(s.el));

  addEventListener('resize', () => colocarIndicador(), { passive: true });

  new IntersectionObserver(
    ([e]) => nav.classList.toggle('is-stuck', !e.isIntersecting),
    { threshold: 0 }
  ).observe($('#top-sentinel'));
}

function iniciarMenu() {
  const sheet  = $('#sheet');
  const abrir  = $('#burger');
  const cerrar = $('#sheet-close');
  const links  = $$('.sheet__link', sheet);
  let  ultimoFoco = null;

  const set = (abierto) => {
    sheet.dataset.open = String(abierto);
    sheet.setAttribute('aria-hidden', String(!abierto));
    abrir.setAttribute('aria-expanded', String(abierto));
    document.body.style.overflow = abierto ? 'hidden' : '';
    if (abierto) {
      ultimoFoco = document.activeElement;

      setTimeout(() => cerrar.focus(), 60);
    } else {
      ultimoFoco?.focus();
    }
  };

  abrir.addEventListener('click', () => set(true));
  cerrar.addEventListener('click', () => set(false));
  links.forEach((l) => l.addEventListener('click', () => set(false)));

  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sheet.dataset.open === 'true') set(false);

    if (e.key === 'Tab' && sheet.dataset.open === 'true') {
      const foco = [cerrar, ...links];
      const i = foco.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); foco.at(-1).focus(); }
      else if (!e.shiftKey && i === foco.length - 1) { e.preventDefault(); foco[0].focus(); }
    }
  });

  matchMedia('(min-width: 60.0625rem)').addEventListener('change', (e) => {
    if (e.matches && sheet.dataset.open === 'true') set(false);
  });
}

let observador = null;
let salvavidas = null;

export function observarRevelado() {
  const items = $$('.reveal:not(.is-in)');
  const puedeAnimar = 'IntersectionObserver' in window && !sinMovimiento();

  if (!puedeAnimar) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }

  document.documentElement.classList.add('reveal-on');

  observador?.disconnect();
  observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      obs.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .06 });

  items.forEach((el) => observador.observe(el));

  requestAnimationFrame(() => {
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) el.classList.add('is-in');
    });
  });

  clearTimeout(salvavidas);
  salvavidas = setTimeout(() => {
    if (!document.querySelector('.reveal.is-in')) {
      document.documentElement.classList.remove('reveal-on');
    }
  }, 2000);
}

function iniciar() {
  document.documentElement.classList.remove('no-js');
  pintarIconos();
  enlazarPerfil();
  iniciarNav();
  iniciarMenu();
  iniciarIdioma();
  $('#year').textContent = new Date().getFullYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciar);
} else {
  iniciar();
}
