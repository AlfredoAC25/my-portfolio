<script setup>
// TODO: reemplaza con tus proyectos reales (nombre, descripción, link de GitHub/demo)
const projects = [
  { name: 'CRM/ERP para gestión académica y deportiva', period: '2025', description: 'Sistema interno en Laravel para automatizar procesos operativos de la universidad y la academia Celaya FC.', tags: ['Laravel', 'MySQL', 'Linux'], link: 'https://github.com/AlfredoAC25' },
  { name: 'Sistema de registro y pagos — Academia Celaya FC', period: '2025', description: 'Plataforma de inscripciones y cobros que redujo la carga administrativa del equipo.', tags: ['Laravel', 'PostgreSQL'], link: 'https://github.com/AlfredoAC25' },
  { name: 'Microservicios de facturación electrónica', period: '2024 — 2025', description: 'Servicios en Golang para timbrado fiscal y logística, con trazabilidad de facturas en MongoDB.', tags: ['Golang', 'MongoDB'], link: 'https://github.com/AlfredoAC25' },
  { name: 'App Android de movilidad urbana', period: '2022 — 2024', description: 'Aplicación con autenticación y sincronización en tiempo real vía APIs REST y Firebase.', tags: ['Android', 'Java', 'Firebase'], link: 'https://github.com/AlfredoAC25' },
]
</script>

<template>
  <section id="proyectos" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">// proyectos</p>
        <h2>Proyectos destacados</h2>
        <p class="section-sub">Ejemplos basados en sistemas reales que he construido. Cuando tengas links de GitHub o demos, los actualizamos.</p>
      </div>
      <div class="projects-grid">
        <article v-for="p in projects" :key="p.name" class="card project-card reveal">
          <span class="period">{{ p.period }}</span>
          <h3>{{ p.name }}</h3>
          <p class="desc">{{ p.description }}</p>
          <div class="tag-row">
            <span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span>
          </div>
          <a :href="p.link" target="_blank" rel="noopener" class="project-link">Ver en GitHub →</a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.project-card { display: flex; flex-direction: column; }
.project-card h3 { font-size: 1.1rem; margin: 10px 0; }
.project-card .desc { color: var(--text-dim); font-size: 0.92rem; margin-bottom: 18px; flex-grow: 1; }
.project-card .tag-row { margin-bottom: 18px; }
.project-link { font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent); text-decoration: none; }
.project-link:hover { text-decoration: underline; }
@media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr; } }
</style>