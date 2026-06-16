<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const open = ref(false)
const { locale, t, toggleLocale } = useI18n()

const links = [
  { id: 'experiencia', key: 'experience' },
  { id: 'proyectos', key: 'projects' },
  { id: 'habilidades', key: 'skills' },
  { id: 'educacion', key: 'education' },
]

function close() { open.value = false }
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a href="#inicio" class="logo" @click="close">~/alfredo</a>

      <nav class="nav-links" :class="{ open }">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          @click="close"
        >
          {{ t.nav[link.key] }}
        </a>

        <a href="#contacto" class="btn btn-primary nav-cta" @click="close">
          {{ t.nav.contact }}
        </a>

        <button class="lang-btn" @click="toggleLocale">
          {{ locale === 'es' ? 'EN' : 'ES' }}
        </button>
      </nav>

      <button
        class="menu-btn"
        @click="open = !open"
        :aria-expanded="open"
        :aria-label="t.nav.menu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(11, 14, 20, 0.72);
  border-bottom: 1px solid var(--border);
}
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }
.logo { font-family: var(--font-mono); color: var(--accent); text-decoration: none; font-size: 0.95rem; }
.nav-links { display: flex; align-items: center; gap: 28px; }
.nav-links a { color: var(--text-dim); text-decoration: none; font-size: 0.9rem; transition: color var(--transition); }
.nav-links a:hover { color: var(--text); }
.nav-cta { font-size: 0.85rem; padding: 8px 16px; }
.menu-btn { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; }
.menu-btn span { width: 22px; height: 2px; background: var(--text); display: block; }

@media (max-width: 768px) {
  .nav-links {
    position: fixed; top: 64px; left: 0; right: 0; flex-direction: column; align-items: flex-start;
    gap: 18px; background: var(--bg-elevated); border-bottom: 1px solid var(--border); padding: 24px 20px;
    transform: translateY(-12px); opacity: 0; pointer-events: none;
    transition: transform var(--transition), opacity var(--transition);
  }
  .nav-links.open { transform: translateY(0); opacity: 1; pointer-events: auto; }
  .menu-btn { display: flex; }
}
.lang-btn {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
}

.lang-btn:hover {
  background: var(--bg-elevated);
}
</style>