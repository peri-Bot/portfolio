<script setup lang="ts">
interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

const categories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '⚡',
    skills: ['TypeScript', 'Go', 'Python', 'Rust', 'JavaScript', 'Bash', 'SQL', 'Nix'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['Vue 3', 'React', 'Tailwind CSS', 'HTML/CSS', 'Vite', 'Nuxt'],
  },
  {
    title: 'Backend',
    icon: '🔧',
    skills: ['Node.js', 'Express', 'gRPC', 'REST APIs', 'PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    title: 'DevOps & Infra',
    icon: '☁️',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Nix/NixOS', 'AWS', 'CI/CD', 'Linux', 'Git'],
  },
]
</script>

<template>
  <section id="skills" class="py-24 px-6 bg-gruv-card-light/40 dark:bg-gruv-card-dark/40">
    <div class="mx-auto max-w-6xl">
      <!-- Section header -->
      <div class="mb-16 text-center">
        <h2
          class="text-3xl md:text-4xl font-bold text-gruv-text-dark dark:text-gruv-text-light mb-3"
        >
          My
          <span class="text-forest dark:text-leaf">Skills</span>
        </h2>
        <div class="mx-auto w-16 h-1 bg-forest dark:bg-leaf rounded-full" />
      </div>

      <!-- Skill categories -->
      <div class="grid sm:grid-cols-2 gap-8">
        <div
          v-for="cat in categories"
          :key="cat.title"
          class="group p-6 rounded-2xl bg-gruv-bg-light dark:bg-gruv-bg-dark border border-gruv-border-light dark:border-gruv-border-dark transition-all duration-300 hover:border-forest/50 dark:hover:border-leaf/50 hover:shadow-lg hover:shadow-forest/5 dark:hover:shadow-leaf/5"
        >
          <div class="flex items-center gap-3 mb-5">
            <span class="text-2xl">{{ cat.icon }}</span>
            <h3 class="text-lg font-semibold text-gruv-text-dark dark:text-gruv-text-light">
              {{ cat.title }}
            </h3>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in cat.skills"
              :key="skill"
              class="px-3 py-1.5 text-sm font-medium rounded-full bg-gruv-card-light dark:bg-gruv-card-dark border border-forest/20 dark:border-leaf/20 text-gruv-text-dark dark:text-gruv-text-light transition-all duration-200 hover:border-forest dark:hover:border-leaf hover:text-forest dark:hover:text-leaf cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
