<script setup lang="ts">
import { ref } from 'vue'
import confetti from 'canvas-confetti'

// SEO
useSEO({
  title: 'Contact - Michel Banckaert | Travaillons ensemble',
  description: 'Contactez-moi pour discuter de vos projets web, cybersécurité ou pour toute opportunité professionnelle. Formulaire de contact sécurisé.'
})

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Form state
const isSubmitting = ref(false)
const showSuccessMessage = ref(false)
const errors = ref<Record<string, string>>({})

// Long press state
const pressTimer = ref<number | null>(null)
const pressProgress = ref(0)
const isPressing = ref(false)
const PRESS_DURATION = 2000 // 2 seconds

// Validation
const validateForm = () => {
  errors.value = {}

  if (!formData.value.name.trim()) {
    errors.value.name = 'Le nom est requis'
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'L\'email est requis'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Email invalide'
  }

  if (!formData.value.subject.trim()) {
    errors.value.subject = 'Le sujet est requis'
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Le message est requis'
  } else if (formData.value.message.trim().length < 10) {
    errors.value.message = 'Le message doit contenir au moins 10 caractères'
  }

  return Object.keys(errors.value).length === 0
}

// Long press handlers
const startPress = () => {
  if (isSubmitting.value || !validateForm()) return

  isPressing.value = true
  pressProgress.value = 0

  const startTime = Date.now()
  const interval = 16 // ~60fps

  const updateProgress = () => {
    const elapsed = Date.now() - startTime
    pressProgress.value = Math.min((elapsed / PRESS_DURATION) * 100, 100)

    if (elapsed >= PRESS_DURATION) {
      submitForm()
    } else if (isPressing.value) {
      pressTimer.value = window.setTimeout(updateProgress, interval)
    }
  }

  pressTimer.value = window.setTimeout(updateProgress, interval)
}

const endPress = () => {
  isPressing.value = false
  if (pressTimer.value) {
    clearTimeout(pressTimer.value)
    pressTimer.value = null
  }

  // Reset progress if not completed
  if (pressProgress.value < 100) {
    pressProgress.value = 0
  }
}

// Submit form
const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  isPressing.value = false

  try {
    // Call API to send email
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value
    })

    // Show success
    showSuccessMessage.value = true

    // Fire confetti
    fireConfetti()

    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)

  } catch (error: any) {
    console.error('Error submitting form:', error)

    // Show error message
    const errorMessage = error?.data?.statusMessage || 'Une erreur est survenue lors de l\'envoi du message'
    alert(errorMessage)
  } finally {
    isSubmitting.value = false
    pressProgress.value = 0
  }
}

// Confetti animation
const fireConfetti = () => {
  const duration = 3000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min
  }

  const interval: any = setInterval(() => {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    })
  }, 250)
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 relative z-10">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-6">
            <span class="icon-[tabler--mail] text-purple-600 size-5"/>
            <span class="text-purple-400 text-sm font-medium">Contactez-moi</span>
          </div>
          <h1 class="text-5xl lg:text-6xl font-bold text-white mb-4">
            Travaillons <span class="gradient-text">Ensemble</span>
          </h1>
          <p class="text-white/70 text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <!-- Success Message -->
        <Transition name="fade">
          <div
            v-if="showSuccessMessage"
            class="mb-8 glass-card p-6 rounded-2xl border-2 border-green-500/30 bg-gradient-to-r from-green-600/20 to-emerald-600/20"
          >
            <div class="flex items-center gap-4">
              <div class="flex-shrink-0">
                <span class="icon-[tabler--circle-check] text-green-400 size-8" />
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg">Message envoyé avec succès !</h3>
                <p class="text-white/70 text-sm mt-1">Merci pour votre message. Je vous répondrai très prochainement.</p>
              </div>
            </div>
          </div>
        </Transition>

        <!-- Contact Form -->
        <div class="glass-card p-8 lg:p-12 rounded-3xl">
          <form @submit.prevent class="space-y-6">
            <!-- Name & Email -->
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Name -->
              <div class="space-y-2">
                <label for="name" class="text-white text-sm font-medium flex items-center gap-2">
                  <span class="icon-[tabler--user] size-4" />
                  Nom complet
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  placeholder="Jean Dupont"
                  :class="[
                    'w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500/50 backdrop-blur-sm transition-colors',
                    errors.name ? 'border-red-500/50' : 'border-white/20'
                  ]"
                >
                <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
              </div>

              <!-- Email -->
              <div class="space-y-2">
                <label for="email" class="text-white text-sm font-medium flex items-center gap-2">
                  <span class="icon-[tabler--mail] size-4" />
                  Email
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  placeholder="jean.dupont@email.com"
                  :class="[
                    'w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500/50 backdrop-blur-sm transition-colors',
                    errors.email ? 'border-red-500/50' : 'border-white/20'
                  ]"
                >
                <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
              </div>
            </div>

            <!-- Subject -->
            <div class="space-y-2">
              <label for="subject" class="text-white text-sm font-medium flex items-center gap-2">
                <span class="icon-[tabler--writing] size-4" />
                Sujet
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                placeholder="Ex: Proposition de collaboration"
                :class="[
                  'w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500/50 backdrop-blur-sm transition-colors',
                  errors.subject ? 'border-red-500/50' : 'border-white/20'
                ]"
              >
              <p v-if="errors.subject" class="text-red-400 text-xs mt-1">{{ errors.subject }}</p>
            </div>

            <!-- Message -->
            <div class="space-y-2">
              <label for="message" class="text-white text-sm font-medium flex items-center gap-2">
                <span class="icon-[tabler--message-2] size-4" />
                Message
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="6"
                placeholder="Décrivez votre projet ou votre demande..."
                :class="[
                  'w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500/50 backdrop-blur-sm transition-colors resize-none',
                  errors.message ? 'border-red-500/50' : 'border-white/20'
                ]"
              />
              <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
            </div>

            <!-- Submit Button with Long Press -->
            <div class="space-y-4">
              <button
                type="button"
                :disabled="isSubmitting"
                @mousedown="startPress"
                @mouseup="endPress"
                @mouseleave="endPress"
                @touchstart="startPress"
                @touchend="endPress"
                @touchcancel="endPress"
                class="relative w-full py-4 rounded-full overflow-hidden font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <!-- Progress Background -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all"
                  :style="{ width: `${pressProgress}%` }"
                />

                <!-- Default Background -->
                <div class="absolute inset-0 btn-gradient" :class="{ 'opacity-0': pressProgress > 0 }" />

                <!-- Button Content -->
                <span class="relative z-10 flex items-center justify-center gap-2 text-white">
                  <span v-if="isSubmitting" class="icon-[tabler--loader-2] size-5 animate-spin" />
                  <span v-else-if="isPressing" class="icon-[tabler--hand-stop] size-5" />
                  <span v-else class="icon-[tabler--send] size-5" />

                  <span v-if="isSubmitting">Envoi en cours...</span>
                  <span v-else-if="isPressing">Maintenez pour envoyer...</span>
                  <span v-else>Maintenir pour envoyer</span>
                </span>

                <!-- Ripple effect on press -->
                <div
                  v-if="isPressing"
                  class="absolute inset-0 bg-white/20 animate-pulse"
                />
              </button>

              <p class="text-white/50 text-xs text-center">
                <span class="icon-[tabler--info-circle] size-4 inline-block align-middle mr-1" />
                Maintenez le bouton pendant 2 secondes pour envoyer le message
              </p>
            </div>
          </form>
        </div>

        <!-- Contact Info Cards -->
        <div class="grid md:grid-cols-3 gap-6 mt-12">
          <!-- Email Card -->
          <a
            href="mailto:michel.banckaert@epitech.eu"
            class="glass-card p-6 rounded-2xl hover:scale-105 transition-transform group"
          >
            <div class="flex flex-col items-center text-center space-y-3">
              <div class="p-3 rounded-full bg-purple-600/20 border border-purple-500/30 group-hover:bg-purple-600/30 transition-colors">
                <span class="icon-[tabler--mail] text-purple-400 size-6" />
              </div>
              <div>
                <h3 class="text-white font-semibold">Email</h3>
                <p class="text-white/70 text-sm mt-1">michel.banckaert@epitech.eu</p>
              </div>
            </div>
          </a>

          <!-- LinkedIn Card -->
          <a
            href="https://www.linkedin.com/in/michel-banckaert-54-devweb"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-card p-6 rounded-2xl hover:scale-105 transition-transform group"
          >
            <div class="flex flex-col items-center text-center space-y-3">
              <div class="p-3 rounded-full bg-blue-600/20 border border-blue-500/30 group-hover:bg-blue-600/30 transition-colors">
                <span class="icon-[tabler--brand-linkedin] text-blue-400 size-6" />
              </div>
              <div>
                <h3 class="text-white font-semibold">LinkedIn</h3>
                <p class="text-white/70 text-sm mt-1">Connectons-nous</p>
              </div>
            </div>
          </a>

          <!-- GitHub Card -->
          <a
            href="https://github.com/MichelBKT"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-card p-6 rounded-2xl hover:scale-105 transition-transform group"
          >
            <div class="flex flex-col items-center text-center space-y-3">
              <div class="p-3 rounded-full bg-gray-600/20 border border-gray-500/30 group-hover:bg-gray-600/30 transition-colors">
                <span class="icon-[tabler--brand-github] text-gray-400 size-6" />
              </div>
              <div>
                <h3 class="text-white font-semibold">GitHub</h3>
                <p class="text-white/70 text-sm mt-1">Voir mes projets</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Fade transition for success message */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>