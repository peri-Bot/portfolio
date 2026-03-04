import { ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-dark-mode'

function getInitialDark(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored !== null) return stored === 'true'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const isDark = ref(getInitialDark())

function applyDark(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
}

// Apply immediately on module load
applyDark(isDark.value)

watch(isDark, (val) => {
  localStorage.setItem(STORAGE_KEY, String(val))
  applyDark(val)
})

export function useDarkMode() {
  const toggle = () => {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}
