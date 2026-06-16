<script setup>
import { ref } from 'vue'

const projects = [
  {
    name: 'Sistema de registro y pagos — Academia Celaya FC',
    period: '2026',
    description: 'Plataforma de inscripciones y cobros automatizando procesos administrativos del equipo.',
    tags: ['Laravel', 'MariaDB', 'Vue.js'],
    link: 'https://github.com/AlfredoAC25',
    images: [
      '/img/proyectos/crm-1.png',
      '/img/proyectos/crm-2.png',
      '/img/proyectos/crm-3.png'
    ]
  },
  {
    name: 'CRM para gestión administrativa.',
    period: '2025',
    description: 'Sistema interno en Laravel para automatizar procesos operativos',
    tags: ['Laravel', 'MariaDB', 'Bootstrap'],
    link: 'https://github.com/AlfredoAC25',
    images: [
      '/img/proyectos/crm-1.png',
      '/img/proyectos/crm-2.png',
      '/img/proyectos/crm-3.png'
    ]
  },
  {
    name: 'Sistema de Asistencia y Control de Acceso',
    period: '2025',
    description: 'Sistema para gestionar la asistencia y el control de acceso de asistentes a eventos.',
    tags: ['Laravel', 'MariaDB', 'Vue.js'],
    link: 'https://github.com/AlfredoAC25',
    images: [
      '/img/proyectos/crm-1.png',
      '/img/proyectos/crm-2.png',
      '/img/proyectos/crm-3.png'
    ]
  },
]

const selectedProject = ref(null)
const currentImage = ref(0)

const openModal = (project) => {
  selectedProject.value = project
  currentImage.value = 0
}

const closeModal = () => {
  selectedProject.value = null
}

const nextImage = () => {
  currentImage.value =
    (currentImage.value + 1) % selectedProject.value.images.length
}

const prevImage = () => {
  currentImage.value =
    (currentImage.value - 1 + selectedProject.value.images.length) %
    selectedProject.value.images.length
}
</script>

<template>
  <section id="proyectos" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">// proyectos</p>
        <h2>Proyectos destacados</h2>
        <!-- <p class="section-sub">
          Ejemplos basados en sistemas reales que he construido.
        </p> -->
      </div>

      <div class="projects-grid">
        <article
          v-for="p in projects"
          :key="p.name"
          class="card project-card reveal"
          tabindex="0"
          @click="openModal(p)"
          @keydown.enter="openModal(p)"
        >
          <span class="period">{{ p.period }}</span>
          <h3>{{ p.name }}</h3>
          <p class="desc">{{ p.description }}</p>

          <div class="tag-row">
            <span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span>
          </div>

          <!-- <a
            :href="p.link"
            target="_blank"
            rel="noopener"
            class="project-link"
            @click.stop
          >
            Ver en GitHub →
          </a> -->
        </article>
      </div>
    </div>

    <div v-if="selectedProject" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="modal-close" @click="closeModal">×</button>

        <h3>{{ selectedProject.name }}</h3>
        <p class="modal-desc">{{ selectedProject.description }}</p>

        <div class="carousel">
          <button class="carousel-btn" @click="prevImage">‹</button>

          <img
            :src="selectedProject.images[currentImage]"
            :alt="`${selectedProject.name} imagen ${currentImage + 1}`"
            class="carousel-img"
          />

          <button class="carousel-btn" @click="nextImage">›</button>
        </div>

        <div class="carousel-dots">
          <button
            v-for="(_, index) in selectedProject.images"
            :key="index"
            class="dot"
            :class="{ active: index === currentImage }"
            @click="currentImage = index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.project-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-card h3 {
  font-size: 1.1rem;
  margin: 10px 0;
}

.project-card .desc {
  color: var(--text-dim);
  font-size: 0.92rem;
  margin-bottom: 18px;
  flex-grow: 1;
}

.project-card .tag-row {
  margin-bottom: 18px;
}

.project-link {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
  text-decoration: none;
}

.project-link:hover {
  text-decoration: underline;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: grid;
  place-items: center;
  z-index: 999;
  padding: 20px;
}

.modal {
  position: relative;
  width: min(900px, 100%);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 18px;
  border: 0;
  background: transparent;
  color: var(--text);
  font-size: 2rem;
  cursor: pointer;
}

.modal-desc {
  color: var(--text-dim);
  margin-bottom: 20px;
}

.carousel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;
}

.carousel-img {
  width: 100%;
  max-height: 520px;
  object-fit: contain;
  border-radius: 14px;
}

.carousel-btn {
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 18px;
}

.dot {
  width: 10px;
  height: 10px;
  border: 0;
  border-radius: 50%;
  background: var(--text-dim);
  cursor: pointer;
}

.dot.active {
  background: var(--accent);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .carousel {
    grid-template-columns: 1fr;
  }

  .carousel-btn {
    display: none;
  }
}
</style>