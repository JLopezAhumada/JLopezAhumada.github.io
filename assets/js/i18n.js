export const TEXTOS = {
  es: {
    'meta.title': 'Jesús López · Desarrollador Full Stack Junior',
    'meta.desc': 'Portafolio de Jesús David López Ahumada, Desarrollador Full Stack Junior en Barranquilla: Angular, TypeScript, Kotlin, Spring Boot y PostgreSQL.',

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

    'hero.sub': 'Angular · Kotlin · Spring Boot · PostgreSQL',
    'hero.cta1': 'Ver proyectos',
    'hero.cta2': 'Descargar CV',
    'hero.alt': 'Retrato de Jesús David López Ahumada',

    'about.title': 'Perfil',
    'about.p1': 'Desarrollador Full Stack Junior y estudiante de Ingeniería Telemática, en Barranquilla. Hago aplicaciones web con Angular en el frontend y APIs REST con Kotlin y Spring Boot en el backend.',
    'about.p2': 'Antes trabajé un año en soporte TI y redes, donde automaticé procesos que se llevaban en papel.',
    'about.k1': 'Rol',        'about.v1': 'Desarrollador Full Stack Junior',
    'about.k2': 'Ubicación',  'about.v2': 'Barranquilla, Colombia',
    'about.k3': 'Formación',  'about.v3': 'Ingeniería Telemática, en curso',
    'about.k4': 'Idiomas',    'about.v4': 'Español nativo · Inglés B1',
    'about.k5': 'Enfoque',    'about.v5': 'Aplicaciones web de punta a punta',

    'stack.title': 'Habilidades técnicas',

    'proy.title': 'Proyectos',
    'proy.note': 'Pulsa un proyecto para ver las capturas y el detalle.',
    'proy.stack': 'Stack',
    'proy.ver': 'Ver detalles',
    'proy.demo': 'Ver el sitio',
    'proy.privado': 'Código privado',
    'proy.cerrar': 'Cerrar',

    'exp.title': 'Experiencia',
    'form.title': 'Formación',

    'cert.title': 'Certificaciones',

    'cv.title': 'Hoja de vida',
    'cv.note': 'En español y en inglés.',
    'cv.esName': 'CV en español', 'cv.enName': 'CV in English',
    'cv.meta': 'PDF · 1 página',
    'cv.download': 'Descargar',

    'con.title': 'Contacto',
    'con.linkedin': 'LinkedIn',
    'con.github': 'GitHub',

    'foot.note': 'Barranquilla, Colombia',
    'skip': 'Saltar al contenido'
  },

  en: {
    'meta.title': 'Jesús López · Junior Full Stack Developer',
    'meta.desc': 'Portfolio of Jesús David López Ahumada, Junior Full Stack Developer in Barranquilla, Colombia: Angular, TypeScript, Kotlin, Spring Boot, and PostgreSQL.',

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

    'hero.sub': 'Angular · Kotlin · Spring Boot · PostgreSQL',
    'hero.cta1': 'See projects',
    'hero.cta2': 'Download CV',
    'hero.alt': 'Portrait of Jesús David López Ahumada',

    'about.title': 'Profile',
    'about.p1': 'Junior Full Stack Developer and Telematics Engineering student, based in Barranquilla, Colombia. I build web applications with Angular on the frontend and REST APIs with Kotlin and Spring Boot on the backend.',
    'about.p2': 'Before that I spent a year in IT and network support, where I automated processes that ran on paper.',
    'about.k1': 'Role',       'about.v1': 'Junior Full Stack Developer',
    'about.k2': 'Location',   'about.v2': 'Barranquilla, Colombia',
    'about.k3': 'Education',  'about.v3': 'Telematics Engineering, in progress',
    'about.k4': 'Languages',  'about.v4': 'Native Spanish · English B1',
    'about.k5': 'Focus',      'about.v5': 'End-to-end web applications',

    'stack.title': 'Technical skills',

    'proy.title': 'Projects',
    'proy.note': 'Open a project to see screenshots and details.',
    'proy.stack': 'Stack',
    'proy.ver': 'View details',
    'proy.demo': 'Visit site',
    'proy.privado': 'Private code',
    'proy.cerrar': 'Close',

    'exp.title': 'Experience',
    'form.title': 'Education',

    'cert.title': 'Certifications',

    'cv.title': 'Resume',
    'cv.note': 'In Spanish and English.',
    'cv.esName': 'CV en español', 'cv.enName': 'CV in English',
    'cv.meta': 'PDF · 1 page',
    'cv.download': 'Download',

    'con.title': 'Contact',
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
