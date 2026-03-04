<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitted = ref(false)

function handleSubmit() {
  isSubmitting.value = true
  // Simulate submission
  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      submitted.value = false
    }, 4000)
  }, 1000)
}
</script>

<template>
  <section id="contact" class="py-24 px-6 bg-gruv-card-light/40 dark:bg-gruv-card-dark/40">
    <div class="mx-auto max-w-3xl">
      <!-- Section header -->
      <div class="mb-16 text-center">
        <h2
          class="text-3xl md:text-4xl font-bold text-gruv-text-dark dark:text-gruv-text-light mb-3"
        >
          Get In
          <span class="text-forest dark:text-leaf">Touch</span>
        </h2>
        <div class="mx-auto w-16 h-1 bg-forest dark:bg-leaf rounded-full mb-4" />
        <p class="text-gruv-muted-light dark:text-gruv-muted-dark max-w-lg mx-auto">
          Have a project in mind, want to collaborate, or just want to say hi? Drop me a message and
          I'll get back to you as soon as I can.
        </p>
      </div>

      <!-- Contact form -->
      <form
        @submit.prevent="handleSubmit"
        class="space-y-6 p-8 rounded-2xl bg-gruv-bg-light dark:bg-gruv-bg-dark border border-gruv-border-light dark:border-gruv-border-dark shadow-lg"
      >
        <div class="grid sm:grid-cols-2 gap-6">
          <!-- Name -->
          <div>
            <label
              for="contact-name"
              class="block text-sm font-medium text-gruv-text-dark dark:text-gruv-text-light mb-2"
            >
              Name
            </label>
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              required
              placeholder="Your name"
              class="w-full px-4 py-3 rounded-lg bg-gruv-card-light dark:bg-gruv-card-dark border border-gruv-border-light dark:border-gruv-border-dark text-gruv-text-dark dark:text-gruv-text-light placeholder:text-gruv-muted-light dark:placeholder:text-gruv-muted-dark focus:outline-none focus:border-forest dark:focus:border-leaf focus:ring-1 focus:ring-forest dark:focus:ring-leaf transition-all duration-200"
            />
          </div>

          <!-- Email -->
          <div>
            <label
              for="contact-email"
              class="block text-sm font-medium text-gruv-text-dark dark:text-gruv-text-light mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              required
              placeholder="you@example.com"
              class="w-full px-4 py-3 rounded-lg bg-gruv-card-light dark:bg-gruv-card-dark border border-gruv-border-light dark:border-gruv-border-dark text-gruv-text-dark dark:text-gruv-text-light placeholder:text-gruv-muted-light dark:placeholder:text-gruv-muted-dark focus:outline-none focus:border-forest dark:focus:border-leaf focus:ring-1 focus:ring-forest dark:focus:ring-leaf transition-all duration-200"
            />
          </div>
        </div>

        <!-- Message -->
        <div>
          <label
            for="contact-message"
            class="block text-sm font-medium text-gruv-text-dark dark:text-gruv-text-light mb-2"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            v-model="form.message"
            required
            rows="5"
            placeholder="Tell me about your project..."
            class="w-full px-4 py-3 rounded-lg bg-gruv-card-light dark:bg-gruv-card-dark border border-gruv-border-light dark:border-gruv-border-dark text-gruv-text-dark dark:text-gruv-text-light placeholder:text-gruv-muted-light dark:placeholder:text-gruv-muted-dark focus:outline-none focus:border-forest dark:focus:border-leaf focus:ring-1 focus:ring-forest dark:focus:ring-leaf transition-all duration-200 resize-none"
          />
        </div>

        <!-- Submit button -->
        <div class="flex items-center gap-4">
          <button
            id="contact-submit"
            type="submit"
            :disabled="isSubmitting"
            class="inline-flex items-center gap-2 px-8 py-3.5 bg-forest text-gruv-bg-light dark:bg-leaf dark:text-forest font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-forest/25 dark:hover:shadow-leaf/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
          >
            <svg
              v-if="isSubmitting"
              class="w-5 h-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>

          <!-- Success message -->
          <transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 translate-x-4"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <span v-if="submitted" class="text-sm font-medium text-forest dark:text-leaf">
              ✓ Message sent!
            </span>
          </transition>
        </div>
      </form>
    </div>
  </section>
</template>
