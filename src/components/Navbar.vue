<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'

const { isDark, toggle } = useDarkMode()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-gruv-bg-light/90 dark:bg-gruv-bg-dark/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent',
    ]"
  >
    <div class="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#"
        class="text-xl font-bold font-mono tracking-tight text-forest dark:text-leaf transition-colors"
      >
        &lt;KA /&gt;
      </a>

      <!-- Desktop nav links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="relative text-sm font-medium text-gruv-text-dark dark:text-gruv-text-light hover:text-forest dark:hover:text-leaf transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-forest dark:after:bg-leaf after:transition-all after:duration-300 hover:after:w-full"
        >
          {{ link.label }}
        </a>

        <!-- Dark mode toggle -->
        <button
          id="dark-mode-toggle"
          @click="toggle"
          class="relative w-10 h-10 rounded-full flex items-center justify-center border border-gruv-border-light dark:border-gruv-border-dark hover:border-forest dark:hover:border-leaf transition-all duration-300 hover:scale-110 cursor-pointer"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Sun icon -->
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-leaf"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <!-- Moon icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-forest"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.005 9.005 0 0012 21a9.005 9.005 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile hamburger -->
      <div class="flex items-center gap-3 md:hidden">
        <button
          @click="toggle"
          class="w-9 h-9 rounded-full flex items-center justify-center border border-gruv-border-light dark:border-gruv-border-dark cursor-pointer"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-leaf"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-forest"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.005 9.005 0 0012 21a9.005 9.005 0 008.354-5.646z"
            />
          </svg>
        </button>

        <button
          id="mobile-menu-toggle"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="w-9 h-9 flex items-center justify-center cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          <div class="space-y-1.5">
            <span
              class="block w-6 h-0.5 bg-gruv-text-dark dark:bg-gruv-text-light transition-all duration-300"
              :class="isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
            />
            <span
              class="block w-6 h-0.5 bg-gruv-text-dark dark:bg-gruv-text-light transition-all duration-300"
              :class="isMobileMenuOpen ? 'opacity-0' : ''"
            />
            <span
              class="block w-6 h-0.5 bg-gruv-text-dark dark:bg-gruv-text-light transition-all duration-300"
              :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
            />
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-gruv-card-light/95 dark:bg-gruv-card-dark/95 backdrop-blur-md border-t border-gruv-border-light dark:border-gruv-border-dark"
      >
        <div class="px-6 py-4 flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="closeMobileMenu"
            class="text-base font-medium text-gruv-text-dark dark:text-gruv-text-light hover:text-forest dark:hover:text-leaf transition-colors"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>
