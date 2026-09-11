export const TEXTOS = {
  es: {
    'meta.title': 'Jesús López · Frontend Developer y Analista de Sistemas',
    'meta.desc': 'Portafolio de Jesús David López Ahumada. Frontend Developer y Analista de Sistemas en Barranquilla: JavaScript, Java, MySQL, redes y servidores Linux Debian.',

    'nav.perfil': 'Perfil',
    'nav.stack': 'Stack',
    'nav.proyectos': 'Proyectos',
    'nav.experiencia': 'Experiencia',
    'nav.cv': 'Hoja de vida',
    'nav.contacto': 'Contacto',
    'nav.cta': 'Hablemos',
    'lang.switch': 'Ver el sitio en inglés',
    'nav.menu': 'Abrir menú',
    'nav.cerrar': 'Cerrar menú',

    'hero.sub': 'Web Developer · Java · PostgreSQL · Linux Debian',
    'hero.cta1': 'Ver proyectos',
    'hero.cta2': 'Descargar CV',
    'hero.alt': 'Retrato de Jesús David López Ahumada',

    'about.title': 'Perfil',
    'about.p1': 'Analista de Sistemas y estudiante de Ingeniería Telemática, en Barranquilla. Sostengo la infraestructura, la red y los servidores de una empresa, y desarrollo sus aplicaciones web y de escritorio.',
    'about.p2': 'Del lado del cliente trabajo con JavaScript, HTML y CSS. Del lado del servidor, con Java, PHP y MySQL sobre Linux Debian. En redes manejo VLAN, enrutamiento, VLSM y diagnóstico con Wireshark.',
    'about.k1': 'Rol',        'about.v1': 'Frontend Developer · Analista de Sistemas',
    'about.k2': 'Ubicación',  'about.v2': 'Barranquilla, Colombia',
    'about.k3': 'Formación',  'about.v3': 'Ingeniería Telemática, en curso',
    'about.k4': 'Idiomas',    'about.v4': 'Español nativo · Inglés B1',
    'about.k5': 'Enfoque',    'about.v5': 'Frontend, redes y servidores Linux',

    'stack.title': 'Núcleo técnico',
    'stack.note': 'Lo que uso a diario, agrupado por dominio.',

    'proy.title': 'Proyectos',
    'proy.note': 'Sistemas y sitios que están en uso.',
    'proy.stack': 'Stack',

    'exp.title': 'Experiencia',
    'form.title': 'Formación',

    'cert.title': 'Certificaciones',
    'cert.note': 'Redes, nube y desarrollo.',

    'cv.title': 'Hoja de vida',
    'cv.note': 'El documento completo, en los dos idiomas.',
    'cv.esName': 'CV en español', 'cv.enName': 'CV in English',
    'cv.meta': 'PDF · 2 páginas',
    'cv.download': 'Descargar',

    'con.title': 'Contacto',
    'con.note': 'Escríbeme al correo o búscame en LinkedIn.',
    'con.linkedin': 'LinkedIn',
    'con.github': 'GitHub',

    'foot.note': 'Barranquilla, Colombia',
    'skip': 'Saltar al contenido'
  },

  en: {
    'meta.title': 'Jesús López · Frontend Developer and Systems Analyst',
    'meta.desc': 'Portfolio of Jesús David López Ahumada. Frontend Developer and Systems Analyst in Barranquilla, Colombia: JavaScript, Java, MySQL, networking, and Linux Debian servers.',

    'nav.perfil': 'Profile',
    'nav.stack': 'Stack',
    'nav.proyectos': 'Projects',
    'nav.experiencia': 'Experience',
    'nav.cv': 'Resume',
    'nav.contacto': 'Contact',
    'nav.cta': 'Let’s talk',
    'lang.switch': 'View the site in Spanish',
    'nav.menu': 'Open menu',
    'nav.cerrar': 'Close menu',

    'hero.sub': 'Web Developer · Java · PostgreSQL · Linux Debian',
    'hero.cta1': 'See projects',
    'hero.cta2': 'Download CV',
    'hero.alt': 'Portrait of Jesús David López Ahumada',

    'about.title': 'Profile',
    'about.p1': 'Systems Analyst and Telematics Engineering student, based in Barranquilla, Colombia. I keep a company’s infrastructure, network, and servers running, and I build its web and desktop applications.',
    'about.p2': 'On the client side I work with JavaScript, HTML, and CSS. On the server side, with Java, PHP, and MySQL on Linux Debian. In networking I handle VLANs, routing, VLSM, and Wireshark diagnostics.',
    'about.k1': 'Role',       'about.v1': 'Frontend Developer · Systems Analyst',
    'about.k2': 'Location',   'about.v2': 'Barranquilla, Colombia',
    'about.k3': 'Education',  'about.v3': 'Telematics Engineering, in progress',
    'about.k4': 'Languages',  'about.v4': 'Native Spanish · English B1',
    'about.k5': 'Focus',      'about.v5': 'Frontend, networking, and Linux servers',

    'stack.title': 'Technical core',
    'stack.note': 'What I use day to day, grouped by domain.',

    'proy.title': 'Projects',
    'proy.note': 'Systems and sites that are in use.',
    'proy.stack': 'Stack',

    'exp.title': 'Experience',
    'form.title': 'Education',

    'cert.title': 'Certifications',
    'cert.note': 'Networking, cloud, and development.',

    'cv.title': 'Resume',
    'cv.note': 'The full document, in both languages.',
    'cv.esName': 'CV en español', 'cv.enName': 'CV in English',
    'cv.meta': 'PDF · 2 pages',
    'cv.download': 'Download',

    'con.title': 'Contact',
    'con.note': 'Write to me by email or find me on LinkedIn.',
    'con.linkedin': 'LinkedIn',
    'con.github': 'GitHub',

    'foot.note': 'Barranquilla, Colombia',
    'skip': 'Skip to content'
  }
};

const CLAVE = 'jdl-idioma';

export function idiomaInicial() {
  const url = new URLSearchParams(location.search).get('lang');
  if (url === 'es' || url === 'en') return url;

  const guardado = localStorage.getItem(CLAVE);
  if (guardado === 'es' || guardado === 'en') return guardado;

  return (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function guardarIdioma(lang) {
  try { localStorage.setItem(CLAVE, lang); } catch {  }
}

export function aplicarIdioma(lang) {
  const t = TEXTOS[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = t[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = t[el.dataset.i18nHtml];
    if (v != null) el.innerHTML = v;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(',').forEach((par) => {
      const [attr, clave] = par.split(':').map((s) => s.trim());
      const v = t[clave];
      if (attr && v != null) el.setAttribute(attr, v);
    });
  });

  document.title = t['meta.title'];
  document.querySelector('meta[name="description"]')?.setAttribute('content', t['meta.desc']);

  document.dispatchEvent(new CustomEvent('idioma:cambio', { detail: { lang } }));
}
