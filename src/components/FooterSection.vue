<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span>// built with Vue 3 + Vite</span>
      <span>&copy; {{ year }} Alfredo Arámburo</span>
    </div>
  </footer>
</template>

<style scoped>
.footer { border-top: 1px solid var(--border); padding: 28px 0; }
.footer-inner { display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-faint); flex-wrap: wrap; gap: 8px; }
</style>