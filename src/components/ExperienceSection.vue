<script setup>
const jobs = [
  {
    role: 'Desarrollador Backend Laravel',
    company: 'Universidad ICEMéxico / Celaya FC',
    period: 'Abr 2025 — Presente',
    bullets: [
      'Desarrollé y mantuve sistemas CRM y ERP en Laravel usados por usuarios internos y externos, automatizando procesos operativos.',
      'Construí el sistema de registro y pagos de la Academia de Fútbol Celaya FC, reduciendo la carga administrativa.',
      'Implementé servidores de correo en Debian 12 con Postfix y Dovecot para envío masivo y monitoreo.',
      'Administré servidores Linux: firewalls, respaldos, detección de malware y mitigación básica de DDoS.',
    ],
    tags: ['Laravel', 'MariaDB', 'PostgreSQL','Debian', 'Postfix', 'MVC'],
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
]
</script>

<template>
  <section id="experiencia" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">// 01 — experiencia</p>
        <h2>Historial profesional</h2>
        <p class="section-sub">Tres años construyendo software backend en producción, de sistemas ERP a microservicios de facturación.</p>
      </div>
      <div class="timeline">
        <article v-for="job in jobs" :key="job.company" class="timeline-item">
          <div class="timeline-rail"><span class="timeline-dot"></span></div>
          <div class="card timeline-card reveal">
            <span class="period">{{ job.period }}</span>
            <h3>{{ job.role }}</h3>
            <p class="company">{{ job.company }}</p>
            <ul>
              <li v-for="(b, j) in job.bullets" :key="j">{{ b }}</li>
            </ul>
            <div class="tag-row">
              <span v-for="tag in job.tags" :key="tag" class="chip">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline { display: flex; flex-direction: column; margin-top: 8px; }
.timeline-item { display: grid; grid-template-columns: 24px 1fr; column-gap: 20px; }
.timeline-rail { position: relative; display: flex; justify-content: center; }
.timeline-rail::before { content: ''; position: absolute; top: 24px; bottom: -32px; width: 2px; background: var(--border); }
.timeline-item:last-child .timeline-rail::before { display: none; }
.timeline-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--bg); border: 2px solid var(--accent-cool); margin-top: 6px; }
.timeline-card { margin-bottom: 32px; }
.timeline-card h3 { margin: 8px 0 2px; font-size: 1.2rem; }
.timeline-card .company { color: var(--text-dim); font-size: 0.9rem; margin-bottom: 16px; }
.timeline-card ul { padding-left: 18px; color: var(--text-dim); display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; font-size: 0.92rem; }
</style>