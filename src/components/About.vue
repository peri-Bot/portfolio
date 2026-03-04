<script setup lang="ts">
const highlights = [
  { label: '3+', desc: 'Years Experience' },
  { label: '20+', desc: 'Projects Built' },
  { label: '∞', desc: 'Cups of Coffee' },
]
</script>

<template>
  <section id="about" class="py-24 px-6">
    <div class="mx-auto max-w-6xl">
      <!-- Section header -->
      <div class="mb-16 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gruv-text-dark dark:text-gruv-text-light mb-3">
          About
          <span class="text-forest dark:text-leaf">Me</span>
        </h2>
        <div class="mx-auto w-16 h-1 bg-forest dark:bg-leaf rounded-full" />
      </div>

      <div class="justify-center md:grid-cols-5 gap-12 items-center">

        <!-- Bio text -->
        <div class="justify-center md:col-span-3 space-y-5">
          <p class="text-base md:text-lg leading-relaxed text-gruv-text-dark dark:text-gruv-text-light">
            I'm a passionate
            <span class="font-semibold text-forest dark:text-leaf">Fullstack &amp; DevOps Engineer</span>
            based in Ethiopia, with a love for building software that's both beautiful and robust.
            My journey in tech started with tinkering on Linux systems and has since evolved into
            crafting full-stack applications and automating infrastructure.
          </p>

          <p class="text-base md:text-lg leading-relaxed text-gruv-muted-light dark:text-gruv-muted-dark">
            I thrive at the intersection of development and operations — whether it's designing a
            reactive user interface, architecting microservices in Go, or setting up reproducible
            environments with Nix. I believe in clean code, developer ergonomics, and the power of
            open source.
          </p>

          <!-- Highlight stats -->
          <div class="grid grid-cols-3 gap-4 pt-4">
            <div v-for="item in highlights" :key="item.label"
              class="text-center p-4 rounded-xl bg-gruv-card-light dark:bg-gruv-card-dark border border-gruv-border-light dark:border-gruv-border-dark">
              <p class="text-2xl font-bold font-mono text-forest dark:text-leaf">
                {{ item.label }}
              </p>
              <p class="text-xs text-gruv-muted-light dark:text-gruv-muted-dark mt-1">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
