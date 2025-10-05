<script setup lang="ts">
import brand from '~/assets/images/brand.png'

const props = defineProps<{
  isLoading: boolean
}>()

const logoRef = ref<HTMLElement | null>(null)
const navbarLogoPosition = ref({ x: 0, y: 0 })
const hasCalculated = ref(false)

const calculateNavbarPosition = () => {
  // Attendre un frame pour s'assurer que le DOM est prêt
  nextTick(() => {
    // Trouver le logo dans la navbar
    const navbarLogo = document.querySelector('nav img[alt="logo"]') as HTMLElement
    if (navbarLogo && logoRef.value) {
      const navRect = navbarLogo.getBoundingClientRect()
      const loaderRect = logoRef.value.getBoundingClientRect()

      // Calculer le déplacement nécessaire
      navbarLogoPosition.value = {
        x: navRect.left + navRect.width / 2 - (loaderRect.left + loaderRect.width / 2),
        y: navRect.top + navRect.height / 2 - (loaderRect.top + loaderRect.height / 2)
      }

      hasCalculated.value = true
      console.log('Position calculée:', navbarLogoPosition.value)
    }
  })
}

// Calculer la position au montage
onMounted(() => {
  setTimeout(() => {
    calculateNavbarPosition()
  }, 100)
})

// Recalculer quand isLoading devient false
watch(() => props.isLoading, (newVal) => {
  if (!newVal && !hasCalculated.value) {
    calculateNavbarPosition()
  }
})
</script>

<template>
  <!-- Loading Screen -->
  <Teleport to="body">
    <Transition name="loader-fade">
      <div v-if="isLoading" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
        <div class="text-center space-y-6">
          <!-- Loader Circle Animation -->
          <div class="relative w-32 h-32 mx-auto">
            <div class="absolute inset-0 rounded-full border-4 border-purple-500/20 loader-ring" />
            <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-indigo-500 animate-spin" />
            <div class="absolute inset-4 rounded-full border-4 border-transparent border-t-indigo-500 border-r-purple-500 animate-spin" style="animation-duration: 1.5s; animation-direction: reverse;" />
            <div class="absolute inset-0 flex items-center justify-center">
              <img
                ref="logoRef"
                :src="brand"
                alt="logo"
                class="rounded-full w-16 h-16 logo-spin"
                :style="{
                  '--target-x': `${navbarLogoPosition.x}px`,
                  '--target-y': `${navbarLogoPosition.y}px`
                }"
                width="64"
                height="64"
              />
            </div>
          </div>

          <!-- Loading Text -->
          <div class="space-y-2 loader-text">
            <h2 class="text-2xl font-bold gradient-text">Chargement en cours...</h2>
            <div class="flex justify-center gap-1">
              <div class="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style="animation-delay: 0s;" />
              <div class="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style="animation-delay: 0.2s;" />
              <div class="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style="animation-delay: 0.4s;" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Loader Fade Transition */
.loader-fade-enter-active {
  transition: opacity 0.5s ease;
}

.loader-fade-leave-active {
  transition: opacity 0.8s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}

/* Logo Spin Animation */
.logo-spin {
  animation: logo-spin 2s linear infinite;
}

@keyframes logo-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Logo Exit Animation - Monte et disparaît */
.loader-fade-leave-active .logo-spin {
  animation: logo-exit 0.8s ease-in-out forwards;
}

@keyframes logo-exit {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--target-x, -200px), var(--target-y, -100px)) rotate(720deg) scale(0.75);
    opacity: 1;
  }
}

/* Rings Exit Animation */
.loader-fade-leave-active .loader-ring,
.loader-fade-leave-active .animate-spin {
  animation: ring-exit 0.8s ease-in-out forwards;
}

@keyframes ring-exit {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

/* Text Exit Animation */
.loader-fade-leave-active .loader-text {
  animation: text-exit 0.6s ease-in-out forwards;
}

@keyframes text-exit {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(50px);
    opacity: 0;
  }
}
</style>