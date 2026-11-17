const trazo = (d) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

const relleno = (d) =>
  `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${d}</svg>`;

export const ICONOS = {
  code: trazo('<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>'),

  network: trazo(
    '<rect x="16" y="16" width="6" height="6" rx="1"/>' +
    '<rect x="2" y="16" width="6" height="6" rx="1"/>' +
    '<rect x="9" y="2" width="6" height="6" rx="1"/>' +
    '<path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>'
  ),

  database: trazo(
    '<ellipse cx="12" cy="5" rx="9" ry="3"/>' +
    '<path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>'
  ),

  server: trazo(
    '<rect x="2" y="3" width="20" height="8" rx="2"/>' +
    '<rect x="2" y="13" width="20" height="8" rx="2"/>' +
    '<path d="M6 7h.01"/><path d="M6 17h.01"/>'
  ),

  lifebuoy: trazo(
    '<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="4"/>' +
    '<path d="m5.2 5.2 3.6 3.6"/><path d="m15.2 8.8 3.6-3.6"/>' +
    '<path d="m15.2 15.2 3.6 3.6"/><path d="m8.8 15.2-3.6 3.6"/>'
  ),

  download: trazo(
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>' +
    '<path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>'
  ),

  mail: trazo(
    '<rect x="2" y="4" width="20" height="16" rx="2"/>' +
    '<path d="m22 7-9 5.7a2 2 0 0 1-2 0L2 7"/>'
  ),

  file: trazo(
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>' +
    '<path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h8"/><path d="M8 17h6"/>'
  ),

  globe: trazo(
    '<circle cx="12" cy="12" r="9.5"/>' +
    '<path d="M2.5 12h19"/>' +
    '<path d="M12 2.5a15 15 0 0 1 0 19a15 15 0 0 1 0-19"/>'
  ),

  menu: trazo('<path d="M3.5 9h17"/><path d="M3.5 15h17"/>'),
  close: trazo('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
  check: trazo('<path d="m20 6-11 11-5-5"/>'),
  external: trazo('<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
  lock: trazo('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),

  github: relleno(
    '<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.67.79.56A11.5 11.5 0 0 0 12 .5Z"/>'
  ),

  linkedin: relleno(
    '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z"/>'
  )

};

export function pintarIconos(raiz = document) {
  raiz.querySelectorAll('[data-icon]').forEach((el) => {
    const svg = ICONOS[el.dataset.icon];
    if (svg && !el.firstElementChild) el.innerHTML = svg;
  });
}
