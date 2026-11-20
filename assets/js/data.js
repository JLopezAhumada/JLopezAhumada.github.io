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
  es: ['Desarrollador Full Stack Junior', 'Estudiante de Ingeniería Telemática'],
  en: ['Junior Full Stack Developer', 'Telematics Engineering Student']
};

export const STACK = [
  {
    span: 'wide', icon: 'code',
    es: { titulo: 'Frontend' }, en: { titulo: 'Frontend' },
    items: ['Angular', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive', 'Accesibilidad', 'SEO']
  },
  {
    span: 'wide', icon: 'server',
    es: { titulo: 'Backend' }, en: { titulo: 'Backend' },
    items: ['Kotlin', 'Java', 'Spring Boot', 'Spring Security', 'API REST', 'JWT', 'JPA/Hibernate']
  },
  {
    span: 'third', icon: 'database',
    es: { titulo: 'Bases de datos' }, en: { titulo: 'Databases' },
    items: ['PostgreSQL', 'MySQL', 'SQL', 'Modelado relacional']
  },
  {
    span: 'third', icon: 'lifebuoy',
    es: { titulo: 'Herramientas' }, en: { titulo: 'Tools' },
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'Python', 'Groq', 'Ollama']
  },
  {
    span: 'third', icon: 'network',
    es: { titulo: 'Redes y soporte' }, en: { titulo: 'Networking and support' },
    items: ['TCP/IP', 'Cisco CCNA', 'Soporte TI', 'Excel', 'VBA']
  }
];

export const PROYECTOS = [
  {
    destacado: true,
    anio: '2026',
    ventana: 'fundacionlfpd.org',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Web3Forms', 'Google Analytics 4', 'JSON-LD', 'Hostinger'],
    demo: 'https://fundacionlfpd.org',
    codigo: null,
    imagenes: [
      { src: 'assets/img/proyectos/fundacion-inicio.webp', ancho: 1280, alto: 800,
        es: 'Página de inicio del sitio de la fundación', en: 'Foundation website home page' },
      { src: 'assets/img/proyectos/fundacion-galeria.webp', ancho: 1280, alto: 800,
        es: 'Galería de fotos de las jornadas', en: 'Photo gallery of the foundation activities' },
      { src: 'assets/img/proyectos/fundacion-donar.webp', ancho: 1280, alto: 800,
        es: 'Formulario previo a la donación', en: 'Form shown before donating' },
      { src: 'assets/img/proyectos/fundacion-movil.webp', ancho: 600, alto: 1298,
        es: 'El sitio en un teléfono', en: 'The website on a phone' }
    ],
    es: {
      tipo: 'Proyecto independiente',
      titulo: 'Sitio web de la Fundación Los Fuertes del Pueblo de Dios',
      resumen: 'Sitio bilingüe de 10 páginas para una fundación social de Barranquilla, publicado con dominio propio.',
      puntos: [
        'Diseñado y programado con <b>HTML5, CSS3 y JavaScript</b>, sin frameworks, responsive y con cambio de idioma sin recargar.',
        'Formularios de contacto, voluntariado y donantes con <b>Web3Forms</b>, validación en el navegador y respaldo por WhatsApp.',
        '<b>Google Analytics 4</b> con consentimiento de cookies, Search Console, sitemap y datos estructurados JSON-LD.',
        'Publicado en <b>Hostinger</b> con un script en Python que genera la versión de producción.'
      ]
    },
    en: {
      tipo: 'Independent project',
      titulo: 'Los Fuertes del Pueblo de Dios Foundation website',
      resumen: 'A bilingual 10-page website for a social foundation in Barranquilla, live on its own domain.',
      puntos: [
        'Designed and built with <b>HTML5, CSS3, and JavaScript</b>, no frameworks, responsive, with language switching without a reload.',
        'Contact, volunteer, and donor forms with <b>Web3Forms</b>, client-side validation, and a WhatsApp fallback.',
        '<b>Google Analytics 4</b> with cookie consent, Search Console, a sitemap, and JSON-LD structured data.',
        'Deployed on <b>Hostinger</b> with a Python script that builds the production version.'
      ]
    }
  },
  {
    anio: '2026',
    ventana: 'proyecto-nomina-angular.vercel.app',
    stack: ['Angular', 'TypeScript', 'Kotlin', 'Spring Boot', 'PostgreSQL', 'Supabase', 'Docker', 'JWT', 'Groq'],
    demo: 'https://proyecto-nomina-angular.vercel.app',
    codigo: null,

    aviso: {
      es: 'La primera carga puede tardar unos 2 minutos mientras el servidor despierta.',
      en: 'The first load may take about 2 minutes while the server wakes up.'
    },
    imagenes: [
      { src: 'assets/img/proyectos/nomina-chat.webp', ancho: 1280, alto: 800,
        es: 'El asistente responde con la nómina por departamento', en: 'The assistant answers with payroll by department' },
      { src: 'assets/img/proyectos/nomina-permisos.webp', ancho: 1280, alto: 800,
        es: 'Un empleado pregunta por otro y el asistente solo le muestra sus propios datos', en: 'An employee asks about a coworker and the assistant only shows their own data' },
      { src: 'assets/img/proyectos/nomina-panel.webp', ancho: 1280, alto: 800,
        es: 'Panel con trabajadores, nómina liquidada y vacaciones por aprobar', en: 'Dashboard with employees, payroll totals, and pending vacations' },
      { src: 'assets/img/proyectos/nomina-inicio.webp', ancho: 1280, alto: 800,
        es: 'Pantalla inicial del asistente con preguntas sugeridas', en: 'Assistant start screen with suggested questions' }
    ],
    es: {
      tipo: 'Académico · IUB · equipo de 2',
      titulo: 'Sistema de nómina y vacaciones',
      resumen: 'Aplicación web full stack para liquidar nómina y vacaciones, con un asistente de IA que responde preguntas sobre los datos.',
      puntos: [
        'Migración de una aplicación de escritorio en Java Swing a una <b>API REST en Kotlin y Spring Boot</b> con 10 módulos y un <b>frontend en Angular</b>.',
        '<b>Autenticación JWT</b> con Spring Security, control de acceso por roles, contraseñas con BCrypt y bitácora de auditoría.',
        '<b>Asistente con IA</b> sobre un modelo de Groq: consulta la base de datos con <b>tool calling</b>, y cada consulta respeta los permisos del usuario. Un empleado solo ve sus propios datos.',
        'Al pasar de Ollama local a Groq, la respuesta bajó de <b>2 minutos a 1 segundo</b>.',
        'Desplegado con el frontend en <b>Vercel</b>, el backend en <b>Render</b> con Docker y la base de datos en <b>Supabase</b>.'
      ]
    },
    en: {
      tipo: 'Academic · IUB · team of 2',
      titulo: 'Payroll and vacation system',
      resumen: 'A full stack web application for payroll and vacation settlement, with an AI assistant that answers questions about the data.',
      puntos: [
        'Migrated a Java Swing desktop app to a <b>Kotlin and Spring Boot REST API</b> with 10 modules and an <b>Angular frontend</b>.',
        '<b>JWT authentication</b> with Spring Security, role-based access control, BCrypt password hashing, and an audit log.',
        '<b>AI assistant</b> on a Groq model: it queries the database through <b>tool calling</b>, and every query respects the user’s permissions. An employee only sees their own data.',
        'Moving from local Ollama to Groq cut response time from <b>2 minutes to 1 second</b>.',
        'Deployed with the frontend on <b>Vercel</b>, the backend on <b>Render</b> with Docker, and the database on <b>Supabase</b>.'
      ]
    }
  },
  {
    anio: '2025',
    ventana: 'Excel · VBA',
    stack: ['Excel', 'VBA', 'Formularios'],
    demo: null,
    codigo: null,
    imagenes: [],
    es: {
      tipo: 'Agropecuaria y Movilidad S.A.S.',
      titulo: 'Automatización de procesos de planta',
      resumen: 'Tres procesos que se llevaban en papel, convertidos en macros de Excel. La consolidación por turno bajó de dos horas a veinte minutos.',
      puntos: [
        '<b>Estadística de desposte</b>: control de pesos por corte en cada canastilla, con consolidación automática del turno.',
        '<b>Guía de transporte</b>: la orden para conductores sale de la guía presentada y el peso transportado.',
        '<b>Inventario de canastillas</b>: conteo por proveedor para controlar despachos y devoluciones.'
      ]
    },
    en: {
      tipo: 'Agropecuaria y Movilidad S.A.S.',
      titulo: 'Plant process automation',
      resumen: 'Three paper-based processes turned into Excel macros. Shift consolidation dropped from two hours to twenty minutes.',
      puntos: [
        '<b>Deboning statistics</b>: weight-per-cut control for each crate, with automatic shift consolidation.',
        '<b>Transport waybill</b>: the driver order is generated from the submitted waybill and the transported weight.',
        '<b>Crate inventory</b>: per-supplier counting to control shipments and returns.'
      ]
    }
  }
];

export const EXPERIENCIA = [
  {
    anio: 'Mar 2026 - Actualidad', anioEn: 'Mar 2026 - Present',
    lugar: 'Barranquilla, Colombia',
    es: { rol: 'Desarrollador Web', org: 'Fundación Social Los Fuertes del Pueblo de Dios', etiqueta: 'Independiente' },
    en: { rol: 'Web Developer', org: 'Los Fuertes del Pueblo de Dios Social Foundation', etiqueta: 'Freelance' }
  },
  {
    anio: 'Sep 2025 - Sep 2026', anioEn: 'Sep 2025 - Sep 2026',
    lugar: 'Barranquilla, Colombia',
    es: { rol: 'Analista de Sistemas', org: 'Agropecuaria y Movilidad S.A.S.', etiqueta: 'Empleo' },
    en: { rol: 'Systems Analyst', org: 'Agropecuaria y Movilidad S.A.S.', etiqueta: 'Employment' }
  }
];

export const FORMACION = [
  {
    anio: 'Abr 2024 - 2028', anioEn: 'Apr 2024 - 2028',
    lugar: 'Barranquilla, Colombia',
    es: { rol: 'Ingeniería Telemática', org: 'Institución Universitaria de Barranquilla · Tecnólogo en Gestión de Sistemas Informáticos', etiqueta: 'En curso' },
    en: { rol: 'Telematics Engineering', org: 'Institución Universitaria de Barranquilla · Technologist in Information Systems Management', etiqueta: 'In progress' }
  },
  {
    anio: 'Ago 2023 - Ago 2024', anioEn: 'Aug 2023 - Aug 2024',
    lugar: 'Barranquilla, Colombia',
    es: { rol: 'Técnico Profesional en Programación Web', org: 'Litoral', etiqueta: 'Titulado' },
    en: { rol: 'Professional Technician in Web Programming', org: 'Litoral', etiqueta: 'Degree awarded' }
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
