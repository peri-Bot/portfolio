<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
  >
    <!-- Subtle background decoration -->
    <div
      class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
      style="
        background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0);
        background-size: 40px 40px;
      "
    />

    <!-- Floating accent blobs -->
    <div
      class="absolute top-1/4 -left-32 w-96 h-96 bg-forest/10 dark:bg-leaf/5 rounded-full blur-3xl animate-pulse"
    />
    <div
      class="absolute bottom-1/4 -right-32 w-80 h-80 bg-leaf/10 dark:bg-forest/10 rounded-full blur-3xl animate-pulse"
      style="animation-delay: 1s"
    />

    <div
      class="relative z-10 max-w-3xl text-center transition-all duration-1000"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <!-- Greeting -->
      <p
        class="font-mono text-sm md:text-base text-forest dark:text-leaf mb-4 tracking-wider"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        style="transition: opacity 0.8s ease 0.2s"
      >
        &lt;hello world /&gt;
      </p>

      <!-- Main headline -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
        <span class="text-gruv-text-dark dark:text-gruv-text-light">Hi, I'm </span>
        <span class="text-forest dark:text-leaf">Kidus Abebe</span>
      </h1>

      <!-- Subtitle -->
      <p
        class="text-lg md:text-xl text-gruv-muted-light dark:text-gruv-muted-dark max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        A
        <span class="font-semibold text-gruv-text-dark dark:text-gruv-text-light"
          >Fullstack &amp; DevOps Engineer</span
        >
        who builds digital experiences that are fast, accessible, and beautifully grounded.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#projects"
          id="cta-view-work"
          class="group inline-flex items-center gap-2 px-8 py-3.5 bg-forest text-gruv-bg-light dark:bg-leaf dark:text-forest font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-forest/25 dark:hover:shadow-leaf/25 hover:-translate-y-0.5"
        >
          View My Work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <a
          href="#contact"
          id="cta-contact"
          class="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gruv-text-dark dark:border-gruv-text-light text-gruv-text-dark dark:text-gruv-text-light font-semibold rounded-lg transition-all duration-300 hover:border-forest hover:text-forest dark:hover:border-leaf dark:hover:text-leaf hover:-translate-y-0.5"
        >
          Contact Me
        </a>
      </div>

      <!-- Scroll indicator -->
      <div
        class="mt-16 flex justify-center"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        style="transition: opacity 1s ease 1s"
      >
        <a
          href="#about"
          class="group flex flex-col items-center gap-2 text-gruv-muted-light dark:text-gruv-muted-dark hover:text-forest dark:hover:text-leaf transition-colors"
        >
          <span class="text-xs font-mono">scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
