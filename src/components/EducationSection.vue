<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="educacion" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ t.education.eyebrow }}</p>
        <h2>{{ t.education.title }}</h2>
      </div>

      <div class="education-grid">
        <div class="card reveal">
          <span class="period">{{ t.education.degree.period }}</span>
          <h3>{{ t.education.degree.title }}</h3>
          <p class="company">{{ t.education.degree.school }}</p>
          <p class="location">{{ t.education.degree.location }}</p>
        </div>

        <div class="card reveal">
          <span class="period">{{ t.education.language.period }}</span>
          <h3>{{ t.education.language.title }}</h3>
          <p class="company">{{ t.education.language.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; }
.education-grid h3 { margin: 10px 0 4px; font-size: 1.1rem; }
.education-grid .company { color: var(--text-dim); font-size: 0.9rem; }
.location { color: var(--text-faint); font-size: 0.85rem; margin-top: 4px; }
@media (max-width: 768px) { .education-grid { grid-template-columns: 1fr; } }
</style>