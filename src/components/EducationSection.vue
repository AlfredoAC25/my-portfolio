<template>
  <section id="educacion" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">// educación</p>
        <h2>Formación</h2>
      </div>
      <div class="education-grid">
        <div class="card reveal">
          <span class="period">2020 — 2025</span>
          <h3>Ingeniería en Sistemas Computacionales</h3>
          <p class="company">Tecnológico Nacional de México, Campus Celaya</p>
          <p class="location">Celaya, Guanajuato, México</p>
        </div>
        <div class="card reveal">
          <span class="period">idiomas</span>
          <h3>Inglés</h3>
          <p class="company">Nivel B1</p>
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