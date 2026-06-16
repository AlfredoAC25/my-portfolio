import { computed, ref } from 'vue'
import { translations } from '../data/translations'

const locale = ref(localStorage.getItem('locale') || 'es')

export function useI18n() {
  const t = computed(() => translations[locale.value])

  function toggleLocale() {
    locale.value = locale.value === 'es' ? 'en' : 'es'
    localStorage.setItem('locale', locale.value)
  }

  return {
    locale,
    t,
    toggleLocale,
  }
}