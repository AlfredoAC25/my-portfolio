<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const script = computed(() => t.value.hero.terminal)

const renderedLines = ref([])
const done = ref(false)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function typeLine(line) {
  if (line.type === 'out') {
    renderedLines.value.push({ type: 'out', text: line.text })
    await sleep(280)
    return
  }

  const current = { type: 'cmd', text: '' }
  renderedLines.value.push(current)

  for (const char of line.text) {
    current.text += char
    await sleep(28)
  }

  await sleep(220)
}

async function runTerminalAnimation() {
  renderedLines.value = []
  done.value = false

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    renderedLines.value = script.value.map((l) => ({ ...l }))
    done.value = true
    return
  }

  for (const line of script.value) {
    await typeLine(line)
  }

  done.value = true
}

onMounted(() => {
  runTerminalAnimation()
})

watch(
  () => script.value,
  () => {
    renderedLines.value = script.value.map((l) => ({ ...l }))
    done.value = true
  }
)
</script>

<template>
  <section id="inicio" class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">{{ t.hero.eyebrow }}</p>
        <h1>{{ t.hero.title }}</h1>

        <p class="hero-lead">
          {{ t.hero.lead }}
        </p>

        <div class="hero-actions">
          <a href="#proyectos" class="btn btn-primary">
            {{ t.hero.projects }}
          </a>

          <a href="#contacto" class="btn btn-secondary">
            {{ t.hero.contact }}
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">3+</span>
            <span class="stat-label">{{ t.hero.years }}</span>
          </div>

          <div class="stat">
            <span class="stat-num">3</span>
            <span class="stat-label">{{ t.hero.backendStacks }}</span>
          </div>

          <div class="stat">
            <span class="stat-num">B1</span>
            <span class="stat-label">{{ t.hero.english }}</span>
          </div>
        </div>
      </div>

      <div class="terminal reveal">
        <div class="terminal-bar">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <span class="terminal-title">alfredo@backend: ~</span>
        </div>

        <div class="terminal-body">
          <div
            v-for="(line, i) in renderedLines"
            :key="i"
            :class="['line', line.type]"
          >
            <span v-if="line.type === 'cmd'" class="prompt">
              alfredo@backend:~$
            </span>
            <span>{{ line.text }}</span>
          </div>

          <span class="cursor" v-if="!done"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { padding-top: 160px; padding-bottom: 96px; }
.hero-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
h1 { font-size: clamp(2.4rem, 5vw, 3.6rem); margin: 8px 0 20px; }
.hero-lead { color: var(--text-dim); font-size: 1.05rem; max-width: 520px; margin-bottom: 32px; }
.hero-actions { display: flex; gap: 16px; margin-bottom: 48px; flex-wrap: wrap; }
.hero-stats { display: flex; gap: 36px; flex-wrap: wrap; }
.stat { display: flex; flex-direction: column; }
.stat-num { font-family: var(--font-display); font-size: 1.6rem; color: var(--accent); }
.stat-label { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-faint); }

.terminal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.terminal-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  background: var(--bg-elevated);
}

.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: #e5635b; }
.dot.yellow { background: #e3b341; }
.dot.green { background: #57ab5a; }

.terminal-title {
  margin-left: 8px;
  color: var(--text-faint);
  font-size: 0.75rem;
}

.terminal-body { padding: 20px; min-height: 220px; }

.line {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  line-height: 1.5;
}

.line.out { color: var(--text-dim); }

.prompt {
  color: var(--accent-cool);
  white-space: nowrap;
}

.cursor {
  display: inline-block;
  width: 8px;
  height: 16px;
  background: var(--accent);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

@media (max-width: 900px) {
  .hero { padding-top: 120px; }
  .hero-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>