<script setup lang="ts">
interface Experience {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

const experiences: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'ByteFarm Software and Electromechanical Company',
    location: 'Addis Ababa, Ethiopia',
    period: 'Feb 2025 — Apr 2025',
    highlights: [
      'Developed and deployed applications using React, Node.js, and Azure Cloud Infrastructure.',
      'Managed database integrations, load balancing, and secure data handling for high-traffic environments.',
      'Collaborated closely with clients in an Agile workflow to gather requirements, streamline business processes, and enhance user engagement.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'BahriApp',
    location: 'Addis Ababa, Ethiopia',
    period: 'Jul 2024 — Jan 2025',
    highlights: [
      'Supported backend cloud infrastructure and data collection platforms for a multi-modal behavioral research initiative.',
      'Monitored system availability and implemented data quality controls to ensure system capacities aligned with the Ethiopian national identity system requirements.',
    ],
  },
  {
    role: 'Cloud Infrastructure Engineer Intern',
    company: 'Edgio, Inc. (formerly Limelight Networks)',
    location: 'Remote (EMEA)',
    period: 'Jan 2023 — May 2024',
    highlights: [
      'Monitored system health dashboards for RedHat Linux Enterprise, Windows Server, and VMware DC environments, escalating critical alerts to senior administrators.',
      'Documented deployment workflows for Kubernetes and Tanzu; shadowed senior engineers troubleshooting Virtual Network Functions (VNFs).',
      'Participated in 24/7 shift-rotation as a Tier-1 support trainee, logging support tickets and running diagnostic scripts for Cloud and OpenStack environments.',
      'Compiled weekly capacity reports from Brocade SAN Platforms (Switches & Storage) to assist the storage team with capacity planning.',
      'Participated in daily Agile stand-ups and tracked SLAs using internal ticketing tools.',
    ],
  },
]
</script>

<template>
  <section id="experience" class="py-24 px-6">
    <div class="mx-auto max-w-4xl">
      <!-- Section header -->
      <div class="mb-16 text-center">
        <h2
          class="text-3xl md:text-4xl font-bold text-gruv-text-dark dark:text-gruv-text-light mb-3"
        >
          Work
          <span class="text-forest dark:text-leaf">Experience</span>
        </h2>
        <div class="mx-auto w-16 h-1 bg-forest dark:bg-leaf rounded-full" />
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div
          class="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gruv-border-light dark:bg-gruv-border-dark"
        />

        <!-- Experience entries -->
        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative pl-12 md:pl-16 group"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2 border-forest dark:border-leaf bg-gruv-bg-light dark:bg-gruv-bg-dark transition-colors group-hover:bg-forest dark:group-hover:bg-leaf"
            />

            <!-- Card -->
            <div
              class="p-6 rounded-2xl bg-gruv-card-light dark:bg-gruv-card-dark border border-gruv-border-light dark:border-gruv-border-dark transition-all duration-300 hover:border-forest/40 dark:hover:border-leaf/40 hover:shadow-lg hover:shadow-forest/5 dark:hover:shadow-leaf/5"
            >
              <!-- Period badge -->
              <span
                class="inline-block px-3 py-1 mb-3 text-xs font-mono rounded-full bg-forest/10 dark:bg-leaf/10 text-forest dark:text-leaf"
              >
                {{ exp.period }}
              </span>

              <!-- Role -->
              <h3 class="text-lg font-bold text-gruv-text-dark dark:text-gruv-text-light mb-1">
                {{ exp.role }}
              </h3>

              <!-- Company & location -->
              <p
                class="text-sm text-gruv-muted-light dark:text-gruv-muted-dark mb-4 flex flex-wrap items-center gap-x-2"
              >
                <span class="font-medium text-forest dark:text-leaf">{{ exp.company }}</span>
                <span class="text-gruv-border-light dark:text-gruv-border-dark">•</span>
                <span>{{ exp.location }}</span>
              </p>

              <!-- Highlights -->
              <ul class="space-y-2">
                <li
                  v-for="(item, i) in exp.highlights"
                  :key="i"
                  class="flex items-start gap-3 text-sm text-gruv-text-dark dark:text-gruv-text-light leading-relaxed"
                >
                  <span
                    class="mt-1.5 w-1.5 h-1.5 rounded-full bg-forest/50 dark:bg-leaf/50 shrink-0"
                  />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
