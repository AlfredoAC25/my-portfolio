<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="experiencia" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ t.experience.eyebrow }}</p>
        <h2>{{ t.experience.title }}</h2>
        <p class="section-sub">{{ t.experience.sub }}</p>
      </div>

      <div class="timeline">
        <article
          v-for="job in t.experience.jobs"
          :key="job.company"
          class="timeline-item"
        >
          <div class="timeline-rail">
            <span class="timeline-dot"></span>
          </div>

          <div class="card timeline-card reveal">
            <span class="period">{{ job.period }}</span>
            <h3>{{ job.role }}</h3>
            <p class="company">{{ job.company }}</p>

            <ul>
              <li v-for="(b, j) in job.bullets" :key="j">
                {{ b }}
              </li>
            </ul>

            <div class="tag-row">
              <span
                v-for="tag in job.tags"
                :key="tag"
                class="chip"
              >
                {{ tag }}
              </span>
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