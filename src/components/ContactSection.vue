<script setup>
import { ref } from 'vue'

const copied = ref(false)
const email = 'alfredo.aramburo240@gmail.com'

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch {
    window.location.href = `mailto:${email}`
  }
}
</script>

<template>
  <section id="contacto" class="section">
    <div class="container">
      <div class="contact-box card reveal">
        <p class="eyebrow">// contacto</p>
        <h2>¿Construimos algo juntos?</h2>
        <p class="section-sub">Disponible para proyectos backend, integraciones y administración de servidores.</p>
        <div class="contact-rows">
          <button class="contact-row" @click="copyEmail">
            <span class="label">email</span>
            <span class="value">{{ email }}</span>
            <span class="hint">{{ copied ? 'copiado ✓' : 'copiar' }}</span>
          </button>
          <a class="contact-row" href="tel:+524613528839">
            <span class="label">teléfono</span>
            <span class="value">461 352 8839</span>
          </a>
          <a class="contact-row" href="https://github.com/AlfredoAC25" target="_blank" rel="noopener">
            <span class="label">github</span>
            <span class="value">github.com/AlfredoAC25</span>
          </a>
          <div class="contact-row static">
            <span class="label">ubicación</span>
            <span class="value">Celaya, Guanajuato, México</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-box { padding: 48px; }
.contact-rows { margin-top: 32px; display: flex; flex-direction: column; border-top: 1px solid var(--border); }
.contact-row {
  display: flex; align-items: center; justify-content: space-between; padding: 18px 0;
  border-bottom: 1px solid var(--border); background: none; border-left: none; border-right: none; border-top: none;
  color: var(--text); text-decoration: none; cursor: pointer; font-family: inherit; text-align: left; width: 100%;
}
.contact-row.static { cursor: default; }
.label { font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-cool); width: 110px; flex-shrink: 0; }
.value { flex: 1; font-size: 0.98rem; }
.hint { font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-faint); }
.contact-row:hover .value { color: var(--accent); }
@media (max-width: 600px) { .contact-box { padding: 32px 24px; } .label { width: 90px; font-size: 0.7rem; } }
</style>