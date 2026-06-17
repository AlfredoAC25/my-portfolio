export const translations = {
  es: {
    nav: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación',
      contact: 'Contactar',
      menu: 'Abrir menú',
    },

    hero: {
      eyebrow: '// fullstack developer · celaya, méxico',
      title: 'Alfredo Arámburo',
      lead: 'Construyo sistemas backend y frontend confiables: ERPs, CRMs, facturación electrónica y plataformas de movilidad, con Laravel, Golang y Java.',
      projects: 'Ver proyectos',
      contact: 'Contactar',
      years: 'años de experiencia',
      backendStacks: 'stacks backend',
      english: 'inglés',

      terminal: [
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'Alfredo Arámburo — Fullstack Developer' },
        { type: 'cmd', text: 'cat stack.txt' },
        { type: 'out', text: 'Laravel · Golang · Java · Vue.js' },
        { type: 'cmd', text: './experiencia.sh --resumen' },
        {
          type: 'out',
          text: '3 años construyendo ERPs, CRMs, facturación electrónica y plataformas de movilidad.',
        },
      ],
    },

    contact: {
      eyebrow: '// contacto',
      title: '¿Construimos algo juntos?',
      sub: 'Disponible para proyectos backend, integraciones y administración de servidores.',
      copied: 'copiado ✓',
      copy: 'copiar',
      phone: 'teléfono',
      location: 'ubicación',
    },

    experience: {
      eyebrow: '// experiencia',
      title: 'Historial profesional',
      sub: 'Tres años construyendo software backend y frontend en producción, de sistemas CRM y ERP a microservicios de facturación.',
      jobs: [
        {
          role: 'Desarrollador Fullstack Laravel',
          company: 'RED SMS PRO / Celaya FC',
          period: 'Abr 2025 — Presente',
          bullets: [
            'Desarrollé y mantuve sistemas CRM y ERP en Laravel usados por usuarios internos y externos, automatizando procesos operativos.',
            'Construí el sistema de registro y pagos de la Academia de Fútbol Celaya FC, reduciendo la carga administrativa.',
            'Implementé servidores de correo en Debian 12 con Postfix y Dovecot para envío masivo y monitoreo.',
            'Administré servidores Linux: firewalls, respaldos, detección de malware y mitigación básica de DDoS.',
          ],
          tags: ['Laravel', 'MariaDB', 'PostgreSQL', 'Debian', 'Postfix', 'MVC'],
        },
        {
          role: 'Desarrollador Backend Golang',
          company: 'Struct Software',
          period: 'Dic 2024 — Abr 2025',
          bullets: [
            'Desarrollé microservicios en Golang para facturación electrónica y logística, integrando timbrado fiscal y paqueterías.',
            'Diseñé una base de datos en MongoDB para trazabilidad de facturas y auditoría de solicitudes.',
            'Refactoricé la lógica de un sistema POS en paquetes de Composer para una arquitectura orientada a servicios.',
          ],
          tags: ['Golang', 'MongoDB', 'Clean Architecture', 'Microservicios'],
        },
        {
          role: 'Desarrollador Android / WordPress',
          company: 'Alio México',
          period: 'Nov 2022 — Dic 2024',
          bullets: [
            'Desarrollé y mantuve apps Android para plataformas de movilidad urbana.',
            'Integré APIs REST y Firebase para autenticación y sincronización en tiempo real.',
            'Colaboré en proyectos web basados en WordPress.',
          ],
          tags: ['Android', 'Java', 'Firebase', 'WordPress'],
        },
      ],
    },

    projects: {
      eyebrow: '// proyectos',
      title: 'Proyectos destacados',
      imageAlt: 'imagen',

      items: [
        {
          id: 'academia-celaya-fc',
          name: 'Sistema de registro y pagos — Academia Celaya FC',
          period: '2026',
          description:
            'Plataforma de inscripciones y cobros automatizando procesos administrativos del equipo.',
          tags: ['Laravel', 'MariaDB', 'Vue.js'],
          link: 'https://github.com/AlfredoAC25',
          images: [
            '/my-portfolio/img/projects/celayafc/erpfc_1.png',
            '/my-portfolio/img/projects/celayafc/erpfc_2.png',
            '/my-portfolio/img/projects/celayafc/erpfc_3.png',
          ],
        },
        {
          id: 'crm-administrativo',
          name: 'CRM para gestión administrativa',
          period: '2025',
          description: 'Sistema interno en Laravel para automatizar procesos operativos.',
          tags: ['Laravel', 'MariaDB', 'Bootstrap'],
          link: 'https://github.com/AlfredoAC25',
          images: [
            '/my-portfolio/img/projects/crm/crm_1.png',
            '/my-portfolio/img/projects/crm/crm_2.png',
            '/my-portfolio/img/projects/crm/crm_3.png',
          ],
        },
        {
          id: 'asistencia-control-acceso',
          name: 'Sistema de Asistencia y Control de Acceso',
          period: '2025',
          description:
            'Sistema para gestionar la asistencia y el control de acceso de asistentes a eventos.',
          tags: ['Laravel', 'MariaDB', 'Vue.js'],
          link: 'https://github.com/AlfredoAC25',
          images: [
            '/my-portfolio/img/projects/attendance/attendance_1.png',
            '/my-portfolio/img/projects/attendance/attendance_2.png',
            '/my-portfolio/img/projects/attendance/attendance_3.png',
          ],
        },
      ],
    },

    skills: {
      eyebrow: '// habilidades',
      title: 'Stack técnico',
      items: [
        { id: 'backend', category: 'Backend', items: ['Laravel', 'Golang', 'Java'] },
        { id: 'frontend', category: 'Frontend', items: ['Vue.js'] },
        {
          id: 'databases',
          category: 'Bases de datos',
          items: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB'],
        },
        {
          id: 'devops',
          category: 'DevOps e infraestructura',
          items: ['Linux', 'Cloudflare', 'Git', 'GitHub Actions'],
        },
        { id: 'mobile', category: 'Desarrollo móvil', items: ['Android (Java)', 'Flutter'] },
      ],
    },

    education: {
      eyebrow: '// educación',
      title: 'Formación',

      degree: {
        period: '2020 — 2025',
        title: 'Ingeniería en Sistemas Computacionales',
        school: 'Tecnológico Nacional de México, Campus Celaya',
        location: 'Celaya, Guanajuato, México',
      },

      language: {
        period: 'idiomas',
        title: 'Inglés',
        level: 'Nivel B1',
      },
    },
  },

  en: {
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      menu: 'Open menu',
    },

    hero: {
      eyebrow: '// fullstack developer · celaya, mexico',
      title: 'Alfredo Arámburo',
      lead: 'I build reliable backend and frontend systems: ERPs, CRMs, electronic invoicing platforms, and mobility systems using Laravel, Golang, and Java.',
      projects: 'View projects',
      contact: 'Contact',
      years: 'years of experience',
      backendStacks: 'backend stacks',
      english: 'english',

      terminal: [
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'Alfredo Arámburo — Fullstack Developer' },
        { type: 'cmd', text: 'cat stack.txt' },
        { type: 'out', text: 'Laravel · Golang · Java · Vue.js' },
        { type: 'cmd', text: './experience.sh --summary' },
        {
          type: 'out',
          text: '3 years building ERPs, CRMs, electronic invoicing systems, and mobility platforms.',
        },
      ],
    },

    contact: {
      eyebrow: '// contact',
      title: 'Shall we build something together?',
      sub: 'Available for backend projects, integrations, and server administration.',
      copied: 'copied ✓',
      copy: 'copy',
      phone: 'phone',
      location: 'location',
    },

    experience: {
      eyebrow: '// experience',
      title: 'Professional experience',
      sub: 'Three years building production backend and frontend software, from CRM and ERP systems to electronic invoicing microservices.',
      jobs: [
        {
          role: 'Fullstack Laravel Developer',
          company: 'RED SMS PRO / Celaya FC',
          period: 'Apr 2025 — Present',
          bullets: [
            'Developed and maintained CRM and ERP systems in Laravel used by internal and external users, automating operational processes.',
            'Built the registration and payment system for the Celaya FC Football Academy, reducing administrative workload.',
            'Implemented mail servers on Debian 12 with Postfix and Dovecot for bulk email delivery and monitoring.',
            'Managed Linux servers, including firewalls, backups, malware detection, and basic DDoS mitigation.',
          ],
          tags: ['Laravel', 'MariaDB', 'PostgreSQL', 'Debian', 'Postfix', 'MVC'],
        },
        {
          role: 'Golang Backend Developer',
          company: 'Struct Software',
          period: 'Dec 2024 — Apr 2025',
          bullets: [
            'Developed Golang microservices for electronic invoicing and logistics, integrating fiscal stamping and shipping providers.',
            'Designed a MongoDB database for invoice traceability and request auditing.',
            'Refactored the logic of a POS system into Composer packages for a service-oriented architecture.',
          ],
          tags: ['Golang', 'MongoDB', 'Clean Architecture', 'Microservices'],
        },
        {
          role: 'Android / WordPress Developer',
          company: 'Alio México',
          period: 'Nov 2022 — Dec 2024',
          bullets: [
            'Developed and maintained Android apps for urban mobility platforms.',
            'Integrated REST APIs and Firebase for authentication and real-time synchronization.',
            'Collaborated on WordPress-based web projects.',
          ],
          tags: ['Android', 'Java', 'Firebase', 'WordPress'],
        },
      ],
    },

    projects: {
      eyebrow: '// projects',
      title: 'Featured projects',
      imageAlt: 'image',

      items: [
        {
          id: 'academia-celaya-fc',
          name: 'Registration and Payment System — Celaya FC Academy',
          period: '2026',
          description:
            'Platform for registrations and payments, automating the team’s administrative processes.',
          tags: ['Laravel', 'MariaDB', 'Vue.js'],
          link: 'https://github.com/AlfredoAC25',
          images: [
            '/my-portfolio/img/projects/celayafc/erpfc_1.png',
            '/my-portfolio/img/projects/celayafc/erpfc_2.png',
            '/my-portfolio/img/projects/celayafc/erpfc_3.png',
            '/my-portfolio/img/projects/celayafc/erpfc_4.png',
            '/my-portfolio/img/projects/celayafc/erpfc_5.png',
            '/my-portfolio/img/projects/celayafc/erpfc_6.png',
            '/my-portfolio/img/projects/celayafc/erpfc_7.png',
          ],
        },
        {
          id: 'crm-administrativo',
          name: 'CRM for Administrative Management',
          period: '2025',
          description: 'Internal Laravel system designed to automate operational processes.',
          tags: ['Laravel', 'MariaDB', 'Bootstrap'],
          link: 'https://github.com/AlfredoAC25',
          images: [
            '/my-portfolio/img/projects/crm/crm_1.png',
            '/my-portfolio/img/projects/crm/crm_2.png',
            '/my-portfolio/img/projects/crm/crm_3.png',
          ],
        },
        {
          id: 'asistencia-control-acceso',
          name: 'Attendance and Access Control System',
          period: '2025',
          description: 'System for managing attendance and access control for event attendees.',
          tags: ['Laravel', 'MariaDB', 'Vue.js'],
          link: 'https://github.com/AlfredoAC25',
          images: [
            '/my-portfolio/img/projects/attendance/attendance_1.png',
            '/my-portfolio/img/projects/attendance/attendance_2.png',
            '/my-portfolio/img/projects/attendance/attendance_3.png',
          ],
        },
      ],
    },

    skills: {
      eyebrow: '// skills',
      title: 'Technical stack',
      items: [
        { id: 'backend', category: 'Backend', items: ['Laravel', 'Golang', 'Java'] },
        { id: 'frontend', category: 'Frontend', items: ['Vue.js', 'Bootstrap'] },
        {
          id: 'databases',
          category: 'Databases',
          items: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB'],
        },
        {
          id: 'devops',
          category: 'DevOps and infrastructure',
          items: ['Linux', 'Cloudflare', 'Git', 'GitHub Actions'],
        },
        { id: 'mobile', category: 'Mobile development', items: ['Android (Java)', 'Flutter'] },
      ],
    },

    education: {
      eyebrow: '// education',
      title: 'Education',

      degree: {
        period: '2020 — 2025',
        title: 'Computer Systems Engineering',
        school: 'National Technological Institute of Mexico, Celaya Campus',
        location: 'Celaya, Guanajuato, Mexico',
      },

      language: {
        period: 'languages',
        title: 'English',
        level: 'B1 Level',
      },
    },
  },
}
