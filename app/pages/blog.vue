<script setup lang="ts">
import { ref, onMounted } from 'vue'

// SEO
useSEO({
  title: 'Blog - Michel Banckaert | Bientôt disponible',
  description: 'Blog technique sur le développement web, la data engineering et les nouvelles technologies. Articles, tutoriels et retours d\'expérience à venir.'
})

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 0.5s;" />
    </div>

    <!-- Main Content -->
    <div
      class="relative z-10 max-w-4xl w-full text-center space-y-8 transition-all duration-1000"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      <!-- Icon/Illustration -->
      <div class="flex justify-center mb-8">
        <div class="relative">
          <!-- Rotating gear effect -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-32 h-32 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" style="animation-duration: 3s;" />
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-24 h-24 border-4 border-indigo-500/30 border-b-indigo-500 rounded-full animate-spin" style="animation-duration: 2s; animation-direction: reverse;" />
          </div>

          <!-- Center Icon -->
          <div class="relative glass-card p-8 rounded-3xl">
            <span class="icon-[tabler--code] text-purple-400 size-20" />
          </div>
        </div>
      </div>

      <!-- Title -->
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/20 border border-orange-500/30">
          <span class="icon-[tabler--alert-circle] text-orange-400 size-5" />
          <span class="text-orange-400 text-sm font-medium">En développement</span>
        </div>

        <h1 class="text-5xl lg:text-7xl font-bold text-white">
          Blog <span class="gradient-text">en Construction</span>
        </h1>

        <p class="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto">
          Cette section est actuellement en cours de développement. Je travaille dur pour vous proposer du contenu de qualité très prochainement !
        </p>
      </div>

      <!-- Progress/Features Cards -->
      <div class="grid md:grid-cols-3 gap-6 mt-12">
        <!-- Card 1 -->
        <div class="glass-card p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform">
          <div class="inline-flex p-3 rounded-full bg-purple-600/20 border border-purple-500/30">
            <span class="icon-[tabler--article] text-purple-400 size-6" />
          </div>
          <h3 class="text-white font-semibold">Articles techniques</h3>
          <p class="text-white/60 text-sm">
            Tutoriels, astuces et retours d'expérience sur le développement web
          </p>
        </div>

        <!-- Card 2 -->
        <div class="glass-card p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform">
          <div class="inline-flex p-3 rounded-full bg-indigo-600/20 border border-indigo-500/30">
            <span class="icon-[tabler--bulb] text-indigo-400 size-6" />
          </div>
          <h3 class="text-white font-semibold">Projets & Découvertes</h3>
          <p class="text-white/60 text-sm">
            Partage de mes projets personnels et des technologies que j'explore
          </p>
        </div>

        <!-- Card 3 -->
        <div class="glass-card p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform">
          <div class="inline-flex p-3 rounded-full bg-blue-600/20 border border-blue-500/30">
            <span class="icon-[tabler--rocket] text-blue-400 size-6" />
          </div>
          <h3 class="text-white font-semibold">Veille technologique</h3>
          <p class="text-white/60 text-sm">
            Les dernières tendances et innovations du monde du développement
          </p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="pt-8 space-y-6">
        <p class="text-white/50 text-sm">
          En attendant, n'hésitez pas à explorer mes projets ou à me contacter !
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            class="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors inline-flex items-center justify-center gap-2"
          >
            <span class="icon-[tabler--folder] size-5" />
            Voir mes projets
          </a>

          <a
            href="/contact"
            class="px-8 py-3 rounded-full btn-gradient text-white font-medium transition-all inline-flex items-center justify-center gap-2 hover:scale-105"
          >
            <span class="icon-[tabler--mail] size-5" />
            Me contacter
          </a>
        </div>
      </div>

      <!-- Estimated Completion (optional) -->
      <div class="pt-8">
        <div class="glass-card p-6 rounded-2xl inline-block">
          <div class="flex items-center gap-4">
            <span class="icon-[tabler--calendar-event] text-purple-400 size-8" />
            <div class="text-left">
              <p class="text-white/50 text-xs uppercase tracking-wider">Lancement prévu</p>
              <p class="text-white font-semibold text-lg">Fin 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating particles animation -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="particle particle-1" />
      <div class="particle particle-2" />
      <div class="particle particle-3" />
      <div class="particle particle-4" />
      <div class="particle particle-5" />
    </div>
  </div>
</template>

<style scoped>
/* Particle animations */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  opacity: 0.6;
  animation: float 15s infinite;
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 12s;
}

.particle-2 {
  top: 60%;
  left: 80%;
  animation-delay: 2s;
  animation-duration: 14s;
}

.particle-3 {
  top: 80%;
  left: 20%;
  animation-delay: 4s;
  animation-duration: 16s;
}

.particle-4 {
  top: 40%;
  left: 70%;
  animation-delay: 1s;
  animation-duration: 13s;
}

.particle-5 {
  top: 10%;
  left: 50%;
  animation-delay: 3s;
  animation-duration: 15s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.6;
  }
  25% {
    transform: translateY(-30px) translateX(20px);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-60px) translateX(-10px);
    opacity: 0.4;
  }
  75% {
    transform: translateY(-30px) translateX(-30px);
    opacity: 0.8;
  }
}

/* Pulse animation for background blobs */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.3;
  }
}
</style>