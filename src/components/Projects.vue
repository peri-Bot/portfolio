<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  features: string[]
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    id: 'f1-telemetry',
    title: 'F1 Telemetry Dashboard',
    description:
      'Real-time Formula 1 telemetry streaming platform with gRPC microservices, React frontend, and Kubernetes deployment.',
    longDescription:
      'A full-stack telemetry platform that ingests live Formula 1 race data via a Python sidecar, streams it through gRPC server-streaming to a Go backend, and displays real-time analytics on a React dashboard. The entire infrastructure is provisioned with Terraform on AWS and orchestrated via Kubernetes.',
    tech: ['Go', 'gRPC', 'React', 'Kubernetes', 'Terraform', 'Python', 'AWS'],
    features: [
      'gRPC server-streaming for sub-second latency',
      'Go backend with concurrent data processing',
      'React dashboard with live-updating charts',
      'Kubernetes deployment with auto-scaling',
      'Terraform-managed AWS infrastructure',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 'pacman-wasm',
    title: 'Pac-Man WASM',
    description:
      'Classic Pac-Man game with a Rust/WebAssembly backend and Vue.js frontend, built with a Nix-based reproducible pipeline.',
    longDescription:
      'A faithful recreation of the classic Pac-Man arcade game, with the game logic written in safe Rust and compiled to WebAssembly for near-native browser performance. The frontend is built with Vue 3 and renders the maze, ghosts, and animations. The entire build pipeline is managed through a Nix flake for full reproducibility.',
    tech: ['Rust', 'WebAssembly', 'Vue 3', 'Nix', 'wasm-bindgen', 'Crane'],
    features: [
      'Game engine written in safe Rust',
      'Compiled to WASM for browser performance',
      'Vue 3 frontend with canvas rendering',
      'Ghost AI with scatter/chase/frightened modes',
      'Nix flake for reproducible builds and CI',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 'iac-toolkit',
    title: 'Infrastructure as Code Toolkit',
    description:
      'Terraform modules and Nix flakes for provisioning cloud infrastructure with zero-touch deployments on AWS.',
    longDescription:
      'A collection of production-ready Terraform modules and Nix flakes designed for bootstrapping cloud infrastructure. Includes VPC networking, ECS clusters, RDS databases, S3 buckets with lifecycle policies, and IAM role management — all parameterized for multi-environment deployment.',
    tech: ['Terraform', 'Nix', 'AWS', 'Bash', 'HCL', 'GitHub Actions'],
    features: [
      'Modular Terraform with remote state',
      'Multi-environment (dev/staging/prod) support',
      'Nix flakes for reproducible dev shells',
      'Automated CI/CD with GitHub Actions',
      'Cost-optimized resource configurations',
    ],
    github: '#',
  },
  {
    id: 'devops-pipeline',
    title: 'DevOps Pipeline Engine',
    description:
      'Custom CI/CD pipeline orchestrator built in Go with Docker-based runners and webhook integrations.',
    longDescription:
      'A lightweight CI/CD pipeline engine written in Go that receives webhooks from Git providers, spins up isolated Docker containers as build runners, and executes user-defined pipeline steps. Features a web dashboard for monitoring builds and a PostgreSQL-backed job queue for reliable task execution.',
    tech: ['Go', 'Docker', 'PostgreSQL', 'Redis', 'WebSockets'],
    features: [
      'Webhook-triggered builds from GitHub/GitLab',
      'Docker-isolated build runners',
      'PostgreSQL job queue with retries',
      'Real-time build logs via WebSockets',
      'Redis-cached build artifacts',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'This very website! A Gruvbox-themed portfolio built with Vue 3, Tailwind CSS v4, and Vite — all wrapped in Nix.',
    longDescription:
      'A modern, retro-themed portfolio website featuring a Gruvbox color palette with forest green accents. Built as a single-page application with smooth scrolling, dark/light mode toggle, and fully responsive design. The dev environment is managed with a Nix flake providing Bun and Node.js.',
    tech: ['Vue 3', 'Tailwind CSS', 'Vite', 'TypeScript', 'Nix', 'Bun'],
    features: [
      'Gruvbox + Forest/Leaf color theme',
      'Class-based dark/light mode toggle',
      'Smooth anchor scrolling SPA',
      'Responsive mobile-first design',
      'Nix dev shell with Bun',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 'api-gateway',
    title: 'API Gateway Service',
    description:
      'High-performance API gateway with rate limiting, JWT auth, and request routing, built as a serverless function.',
    longDescription:
      'A serverless API gateway deployed on AWS Lambda behind API Gateway. It handles JWT authentication, per-client rate limiting via DynamoDB, and intelligent request routing to downstream services. Designed for low-latency, cost-effective operation at scale.',
    tech: ['Go', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'JWT'],
    features: [
      'JWT-based authentication & authorization',
      'DynamoDB-backed rate limiting',
      'Intelligent request routing',
      'Sub-100ms cold start with Go',
      'Terraform-managed infrastructure',
    ],
    github: '#',
  },
]

const selectedProject = ref<Project | null>(null)
const isPanelOpen = ref(false)

function openProject(project: Project) {
  selectedProject.value = project
  isPanelOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closePanel() {
  isPanelOpen.value = false
  document.body.style.overflow = ''
  setTimeout(() => {
    selectedProject.value = null
  }, 300)
}

const panelProject = computed(() => selectedProject.value)
</script>

<template>
  <section id="projects" class="py-24 px-6">
    <div class="mx-auto max-w-6xl">
      <!-- Section header -->
      <div class="mb-16 text-center">
        <h2
          class="text-3xl md:text-4xl font-bold text-gruv-text-dark dark:text-gruv-text-light mb-3"
        >
          Featured
          <span class="text-forest dark:text-leaf">Projects</span>
        </h2>
        <div class="mx-auto w-16 h-1 bg-forest dark:bg-leaf rounded-full" />
      </div>

      <!-- Project grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in projects"
          :key="project.id"
          @click="openProject(project)"
          class="group flex flex-col p-6 rounded-2xl bg-gruv-card-light dark:bg-gruv-card-dark border border-gruv-border-light dark:border-gruv-border-dark transition-all duration-300 hover:border-forest/50 dark:hover:border-leaf/50 hover:shadow-xl hover:shadow-forest/5 dark:hover:shadow-leaf/5 hover:-translate-y-1 cursor-pointer"
        >
          <!-- Project icon + links row -->
          <div class="mb-4 flex items-center justify-between">
            <div
              class="w-12 h-12 rounded-xl bg-forest/10 dark:bg-leaf/10 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-forest dark:text-leaf"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
            </div>

            <!-- Open indicator -->
            <span
              class="text-xs font-mono text-gruv-muted-light dark:text-gruv-muted-dark opacity-0 group-hover:opacity-100 transition-opacity"
            >
              click to open →
            </span>
          </div>

          <!-- Title -->
          <h3
            class="text-lg font-bold text-gruv-text-dark dark:text-gruv-text-light mb-2 group-hover:text-forest dark:group-hover:text-leaf transition-colors"
          >
            {{ project.title }}
          </h3>

          <!-- Description -->
          <p
            class="text-sm text-gruv-muted-light dark:text-gruv-muted-dark leading-relaxed mb-5 flex-1"
          >
            {{ project.description }}
          </p>

          <!-- Tech tags -->
          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="tech in project.tech.slice(0, 4)"
              :key="tech"
              class="px-2.5 py-1 text-xs font-mono text-forest dark:text-leaf bg-forest/5 dark:bg-leaf/5 rounded-md"
            >
              {{ tech }}
            </span>
            <span
              v-if="project.tech.length > 4"
              class="px-2.5 py-1 text-xs font-mono text-gruv-muted-light dark:text-gruv-muted-dark"
            >
              +{{ project.tech.length - 4 }}
            </span>
          </div>
        </article>
      </div>
    </div>

    <!-- ─── Slide-out detail panel (Notion-style) ─── -->
    <teleport to="body">
      <!-- Backdrop -->
      <transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isPanelOpen"
          class="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          @click="closePanel"
        />
      </transition>

      <!-- Panel -->
      <transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="isPanelOpen && panelProject"
          class="fixed top-0 right-0 z-[70] h-full w-full sm:w-[480px] md:w-[560px] lg:w-[640px] bg-gruv-bg-light dark:bg-gruv-bg-dark border-l border-gruv-border-light dark:border-gruv-border-dark shadow-2xl overflow-y-auto"
        >
          <!-- Panel header -->
          <div
            class="sticky top-0 z-10 bg-gruv-bg-light/95 dark:bg-gruv-bg-dark/95 backdrop-blur-sm border-b border-gruv-border-light dark:border-gruv-border-dark px-6 py-4 flex items-center justify-between"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-lg bg-forest/10 dark:bg-leaf/10 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-forest dark:text-leaf"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
              </div>
              <span class="text-sm font-mono text-gruv-muted-light dark:text-gruv-muted-dark">
                Project Details
              </span>
            </div>

            <button
              @click="closePanel"
              class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gruv-card-light dark:hover:bg-gruv-card-dark transition-colors cursor-pointer"
              aria-label="Close panel"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gruv-muted-light dark:text-gruv-muted-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Panel content -->
          <div class="px-6 py-8 space-y-8">
            <!-- Title -->
            <h2
              class="text-2xl md:text-3xl font-bold text-gruv-text-dark dark:text-gruv-text-light"
            >
              {{ panelProject.title }}
            </h2>

            <!-- Action buttons -->
            <div class="flex gap-3">
              <a
                v-if="panelProject.github"
                :href="panelProject.github"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gruv-card-light dark:bg-gruv-card-dark border border-gruv-border-light dark:border-gruv-border-dark text-sm font-medium text-gruv-text-dark dark:text-gruv-text-light hover:border-forest dark:hover:border-leaf transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Source Code
              </a>
              <a
                v-if="panelProject.live"
                :href="panelProject.live"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-forest text-gruv-bg-light dark:bg-leaf dark:text-forest text-sm font-semibold hover:shadow-lg hover:shadow-forest/25 dark:hover:shadow-leaf/25 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Live Demo
              </a>
            </div>

            <!-- Divider -->
            <div class="border-t border-gruv-border-light dark:border-gruv-border-dark" />

            <!-- Description -->
            <div>
              <h3
                class="text-xs font-mono uppercase tracking-wider text-gruv-muted-light dark:text-gruv-muted-dark mb-3"
              >
                Overview
              </h3>
              <p class="text-base leading-relaxed text-gruv-text-dark dark:text-gruv-text-light">
                {{ panelProject.longDescription }}
              </p>
            </div>

            <!-- Key Features -->
            <div>
              <h3
                class="text-xs font-mono uppercase tracking-wider text-gruv-muted-light dark:text-gruv-muted-dark mb-3"
              >
                Key Features
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="(feature, i) in panelProject.features"
                  :key="i"
                  class="flex items-start gap-3 text-sm text-gruv-text-dark dark:text-gruv-text-light"
                >
                  <span class="mt-1 w-1.5 h-1.5 rounded-full bg-forest dark:bg-leaf shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Tech Stack -->
            <div>
              <h3
                class="text-xs font-mono uppercase tracking-wider text-gruv-muted-light dark:text-gruv-muted-dark mb-3"
              >
                Tech Stack
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in panelProject.tech"
                  :key="tech"
                  class="px-3 py-1.5 text-sm font-mono rounded-lg bg-gruv-card-light dark:bg-gruv-card-dark border border-forest/20 dark:border-leaf/20 text-forest dark:text-leaf"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </section>
</template>
