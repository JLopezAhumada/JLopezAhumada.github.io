export const PERFIL = {
  nombre: 'Jesús David López Ahumada',
  email: 'jlahumada1430@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/jdlopez30',
  github: 'https://github.com/JLopezAhumada',
  cv: {
    es: 'assets/cv/Jesus_David_Lopez_Ahumada_CV_ES.pdf',
    en: 'assets/cv/Jesus_David_Lopez_Ahumada_CV_EN.pdf'
  }
};

export const ROLES = {
  es: ['Frontend Developer', 'Analista de Sistemas', 'Soporte TI'],
  en: ['Frontend Developer', 'Systems Analyst', 'IT Support']
};

export const STACK = [
  {
    span: 'wide', icon: 'code',
    es: { titulo: 'Desarrollo' }, en: { titulo: 'Development' },
    items: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Java', 'POO', 'Swing', 'JDBC', 'PHP', 'VBA', 'SQL', 'Git']
  },
  {
    span: 'wide', icon: 'network',
    es: { titulo: 'Redes' }, en: { titulo: 'Networking' },
    items: ['TCP/IP', 'DHCP', 'VLAN', 'Enrutamiento', 'Conmutación', 'VLSM', 'VPN', 'Wireshark', 'Packet Tracer']
  },
  {
    span: 'third', icon: 'server',
    es: { titulo: 'Sistemas' }, en: { titulo: 'Systems' },
    items: ['Linux Debian', 'Windows', 'XAMPP', 'Usuarios', 'Permisos', 'Backups', 'AWS']
  },
  {
    span: 'third', icon: 'database',
    es: { titulo: 'Bases de datos' }, en: { titulo: 'Databases' },
    items: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQL Server', 'Modelado', 'DBeaver']
  },
  {
    span: 'third', icon: 'lifebuoy',
    es: { titulo: 'Soporte TI' }, en: { titulo: 'IT Support' },
    items: ['Mesa de ayuda N1', 'Diagnóstico', 'AnyDesk', 'RustDesk', 'UltraViewer']
  }
];

export const PROYECTOS = [
  {
    destacado: true,
    anio: '2026',
    stack: ['HTML5', 'CSS3', 'JavaScript ES6', 'JSON-LD', 'WebP', 'PWA', 'Git'],
    enlaces: [],
    es: {
      tipo: 'Proyecto independiente',
      titulo: 'Sitio institucional · Fundación Los Fuertes del Pueblo de Dios',
      resumen: 'Sitio completo de una fundación social, diseñado y desarrollado de extremo a extremo con HTML5, CSS3 y JavaScript, sin frameworks.',
      puntos: [
        'Nueve secciones: inicio, nosotros, galería, noticias, donaciones, apadrinamiento, voluntariado, contacto y páginas legales, con <b>maquetación responsive</b> para móvil, tablet y escritorio.',
        'CSS estructurado <b>por capas</b> sobre tokens de diseño reutilizables: variables, reset, base, layout, componentes y animaciones.',
        'Componentes propios en JavaScript: menú accesible, <b>lightbox navegable por teclado</b>, validación de formularios y <b>cambio de idioma sin recargar</b>.',
        '<b>SEO, rendimiento y accesibilidad</b>: datos estructurados JSON-LD, Open Graph, imágenes WebP diferidas, sitemap, manifiesto PWA, ARIA y soporte de <code>prefers-reduced-motion</code>.',
        'Entregado versionado en Git y con <b>guía de mantenimiento</b>, para que la fundación actualice noticias y fotos por su cuenta.'
      ]
    },
    en: {
      tipo: 'Independent project',
      titulo: 'Institutional website · Los Fuertes del Pueblo de Dios Foundation',
      resumen: 'A complete website for a social foundation, designed and built end to end with HTML5, CSS3, and vanilla JavaScript, no frameworks.',
      puntos: [
        'Nine sections: home, about, gallery, news, donations, sponsorship, volunteering, contact, and legal pages, with a <b>responsive layout</b> for mobile, tablet, and desktop.',
        'CSS structured <b>in layers</b> on top of reusable design tokens: variables, reset, base, layout, components, and animations.',
        'Custom JavaScript components: accessible menu, <b>keyboard-navigable lightbox</b>, form validation, and <b>language switching without a reload</b>.',
        '<b>SEO, performance, and accessibility</b>: JSON-LD structured data, Open Graph, lazy-loaded WebP images, sitemap, PWA manifest, ARIA, and <code>prefers-reduced-motion</code> support.',
        'Delivered version-controlled in Git with a <b>maintenance guide</b>, so the foundation can update news and photos on its own.'
      ]
    }
  },
  {
    anio: '2026',
    stack: ['Java SE', 'Swing', 'JDBC', 'MySQL', 'jBCrypt', 'iText 5', 'Apache POI'],
    enlaces: [],
    es: {
      tipo: 'Académico · IUB · equipo de 2',
      titulo: 'Sistema de control de nómina y vacacional',
      resumen: 'Aplicación de escritorio para liquidar nómina y vacaciones, con control de acceso por roles, auditoría y exportación de reportes.',
      puntos: [
        'Jerarquía de empleados modelada con una <b>clase abstracta</b> y tres subclases <b>polimórficas</b>: administrativo con subsidio de transporte, ventas con comisión y sistemas con bono técnico.',
        'Once ventanas en <b>Java Swing</b> implementando <code>ActionListener</code> y <code>ChangeListener</code>: login, gestión, búsqueda, historial de pagos, bitácora y reportes por departamento.',
        '<b>Control de acceso por roles</b> con permisos en base de datos, contraseñas con <b>hash BCrypt</b> y bitácora de auditoría.',
        'Persistencia en <b>MySQL vía JDBC</b> y exportación de reportes a <b>PDF con iText</b> y <b>Excel con Apache POI</b>.'
      ]
    },
    en: {
      tipo: 'Academic · IUB · team of 2',
      titulo: 'Payroll and vacation control system',
      resumen: 'A desktop application for payroll and vacation settlement, with role-based access control, auditing, and report export.',
      puntos: [
        'Employee hierarchy modeled with an <b>abstract class</b> and three <b>polymorphic</b> subclasses: administrative staff with a transport subsidy, sales with commission, and systems with a technical bonus.',
        'Eleven <b>Java Swing</b> windows implementing <code>ActionListener</code> and <code>ChangeListener</code>: login, management, search, payment history, activity log, and department reports.',
        '<b>Role-based access control</b> with database-level permissions, <b>BCrypt password hashing</b>, and an audit log.',
        'Persistence in <b>MySQL via JDBC</b>, with report export to <b>PDF using iText</b> and <b>Excel using Apache POI</b>.'
      ]
    }
  },
  {
    anio: '2025',
    stack: ['Excel', 'VBA', 'Formularios', 'Validación de datos'],
    enlaces: [],
    es: {
      tipo: 'Agropecuaria y Movilidad S.A.S.',
      titulo: 'Automatización de procesos de planta',
      resumen: 'Tres procesos de planta que se llevaban en papel, convertidos en macros de Excel. La consolidación por turno bajó de dos horas a veinte minutos.',
      puntos: [
        '<b>Estadística de desposte</b>: control de pesos por corte en cada canastilla, con consolidación automática de la producción del turno.',
        '<b>Guía de transporte</b>: generación de la orden para conductores a partir de la guía presentada y el peso transportado.',
        '<b>Inventario de canastillas</b>: conteo por proveedor para controlar despachos y devoluciones.'
      ]
    },
    en: {
      tipo: 'Agropecuaria y Movilidad S.A.S.',
      titulo: 'Plant process automation',
      resumen: 'Three plant processes that ran on paper, turned into Excel macros. Shift consolidation dropped from two hours to twenty minutes.',
      puntos: [
        '<b>Deboning statistics</b>: weight-per-cut control for each crate, with automatic consolidation of the shift output.',
        '<b>Transport waybill</b>: driver order generation from the submitted waybill and the transported weight.',
        '<b>Crate inventory</b>: per-supplier counting to control shipments and returns.'
      ]
    }
  }
];

export const EXPERIENCIA = [
  {
    anio: 'Sep 2025 - Sep 2026', anioEn: 'Sep 2025 - Sep 2026',
    lugar: 'Barranquilla, Colombia',
    stack: ['VBA', 'Linux Debian', 'Redes N1', 'HTML', 'CSS', 'JavaScript'],
    es: {
      rol: 'Analista de Sistemas', org: 'Agropecuaria y Movilidad S.A.S.', etiqueta: 'Empleo',
      puntos: [
        'Automaticé <b>tres procesos de planta</b> con macros VBA. La consolidación de datos bajó de <b>dos horas a veinte minutos por turno</b> y se eliminó el registro en papel.',
        'Administré el servidor de la compañía y el <b>soporte TI y de redes nivel 1</b> de la sede: conectividad, cuentas de usuario, estaciones de trabajo y soporte remoto.',
        'Construí una <b>aplicación de escritorio</b> que genera cuentas de cobro con consecutivo automático, en reemplazo del llenado manual de plantillas.'
      ]
    },
    en: {
      rol: 'Systems Analyst', org: 'Agropecuaria y Movilidad S.A.S.', etiqueta: 'Employment',
      puntos: [
        'Automated <b>three plant processes</b> with VBA macros. Data consolidation dropped from <b>two hours to twenty minutes per shift</b> and paper logging was eliminated.',
        'Administered the company server and <b>Tier-1 IT and network support</b> for the site: connectivity, user accounts, workstations, and remote support.',
        'Built a <b>desktop application</b> that generates invoices with automatic sequencing, replacing manual template filling.'
      ]
    }
  },
  {
    anio: '2026', anioEn: '2026',
    lugar: 'Barranquilla, Colombia',
    stack: ['HTML5', 'CSS3', 'JavaScript ES6', 'Git'],
    es: {
      rol: 'Desarrollador Web Front-End', org: 'Fundación Social Los Fuertes del Pueblo de Dios', etiqueta: 'Independiente',
      puntos: [
        'Diseñé y desarrollé el <b>sitio institucional completo</b> con HTML5, CSS3 y JavaScript, sin frameworks.',
        'Programé componentes propios: menú accesible, lightbox por teclado, validación de formularios y <b>cambio de idioma sin recargar</b>.',
        'Optimicé SEO, rendimiento y accesibilidad, y entregué el proyecto con <b>guía de mantenimiento</b>.'
      ]
    },
    en: {
      rol: 'Front-End Web Developer', org: 'Los Fuertes del Pueblo de Dios Social Foundation', etiqueta: 'Independent',
      puntos: [
        'Designed and built the <b>full institutional website</b> with HTML5, CSS3, and vanilla JavaScript, no frameworks.',
        'Built custom components: accessible menu, keyboard lightbox, form validation, and <b>language switching without a reload</b>.',
        'Optimized SEO, performance, and accessibility, and delivered the project with a <b>maintenance guide</b>.'
      ]
    }
  }
];

export const FORMACION = [
  {
    anio: '2024 - 2028 est.', anioEn: '2024 - 2028 est.',
    lugar: 'IUB · Barranquilla',
    stack: [],
    es: {
      rol: 'Ingeniería Telemática', org: 'Institución Universitaria de Barranquilla', etiqueta: 'En curso',
      puntos: [
        'Carrera universitaria por ciclos propedéuticos. Termino el ciclo de <b>Tecnólogo en Gestión de Sistemas Informáticos</b> y paso al <b>ciclo profesional</b> de Ingeniería Telemática.'
      ]
    },
    en: {
      rol: 'Telematics Engineering', org: 'Institución Universitaria de Barranquilla', etiqueta: 'In progress',
      puntos: [
        'University degree in propaedeutic cycles. Completing the <b>Technologist in Information Systems Management</b> cycle and moving on to the <b>professional cycle</b> of Telematics Engineering.'
      ]
    }
  },
  {
    anio: '2023 - 2024', anioEn: '2023 - 2024',
    lugar: 'Litoral · Barranquilla',
    stack: [],
    es: {
      rol: 'Técnico Profesional en Programación Web', org: 'Litoral', etiqueta: 'Titulado',
      puntos: ['Título obtenido, con <b>reconocimientos por liderazgo y trabajo en equipo</b>.']
    },
    en: {
      rol: 'Professional Technician in Web Programming', org: 'Litoral', etiqueta: 'Degree awarded',
      puntos: ['Degree awarded, with <b>recognition for leadership and teamwork</b>.']
    }
  }
];

export const CERTIFICACIONES = [
  {
    emisor: 'Cisco NetAcad',
    es: ['CCNA: Introducción a las Redes', 'CCNA: Conmutación, Enrutamiento y Redes Inalámbricas'],
    en: ['CCNA: Introduction to Networks', 'CCNA: Switching, Routing and Wireless Essentials']
  },
  {
    emisor: 'AWS',
    es: ['Introduction to Serverless Development', 'Introduction to Containers'],
    en: ['Introduction to Serverless Development', 'Introduction to Containers']
  },
  {
    emisor: 'Meta / Coursera',
    es: ['Introducción al Desarrollo Web', 'Resolución de Problemas'],
    en: ['Introduction to Web Development', 'Problem Solving']
  }
];
