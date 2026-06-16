<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const groups = computed(() => t.value.skills?.items ?? [])
</script>

<template>
  <section id="habilidades" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ t.skills?.eyebrow }}</p>
        <h2>{{ t.skills?.title }}</h2>
      </div>

      <div class="skills-grid">
        <div
          v-for="g in groups"
          :key="g.id"
          class="card skill-card reveal is-visible"
        >
          <h3>{{ g.category }}</h3>

          <div class="tag-row">
            <span
              v-for="item in g.items"
              :key="item"
              class="chip"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.skill-card h3 { font-size: 1rem; margin-bottom: 14px; }
@media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr; } }
</style>