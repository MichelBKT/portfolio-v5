<script setup lang="ts">
import { ref, onMounted } from 'vue'
import logoVPDive from '~/assets/images/logo-VPDive.png'
import logoSOGETREL from '~/assets/images/logo-SOGETREL.png'
import logoALMH from '~/assets/images/logo-ALMH.png'
import logoAdapah from '~/assets/images/logo-adapah.png'
import logoStudi from '~/assets/images/logo-Studi.png'
import logoCic from '~/assets/images/logo-cic.png'
import { technologies } from '~/data/technologies'
import { skills } from '~/data/skills'

// Loading state
const isLoading = ref(true)

// Generate stars for background
const stars = ref<Array<{top: string, left: string, delay: string}>>([])

// AI Generation state
const isGenerating = ref(false)
const showImage = ref(false)

const handleGenerate = () => {
  isGenerating.value = true
  showImage.value = false

  // Simulate AI generation time
  setTimeout(() => {
    isGenerating.value = false
    showImage.value = true
  }, 3500) // 3.5 seconds pour l'animation du loader
}

onMounted(() => {
  for (let i = 0; i < 100; i++) {
    stars.value.push({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`
    })
  }

  // Simulate page load - hide loader after content is ready
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>

<template>
  <div>
    <!-- Loading Screen -->
    <Loader :is-loading="isLoading" />

    <div class="min-h-screen relative">
      <!-- Animated Starfield Background -->
      <div class="starfield">
        <div
          v-for="(star, index) in stars"
          :key="index"
          class="star"
          :style="{
            top: star.top,
            left: star.left,
            animationDelay: star.delay
          }"
        />
      </div>

      <!-- Hero Section -->
        <section id="home" class="pt-32 pb-20 px-4 relative z-10">
          <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <!-- Left Content -->
              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30">
                  <span class="icon-[tabler--sparkles] text-purple-600 size-5"/>
                  <span class="text-purple-400 text-sm font-medium">Apprenti Développeur web</span>
                  <span class="text-white/70 text-sm">Quand travail rime avec passion</span>
                </div>

                <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Une formation solide avant tout, avec une spécialisation en <br>
                  <span class="gradient-text">Big Data</span>
                </h1>

                <p class="text-white/70 text-lg max-w-xl">
                  Avec un passé en tant que comptable, ce choix de spécialisation est comme une évidence. La gestion et l'analyse des données sont des compétences clés dans le domaine de la comptabilité. Je peux ainsi combiner mes connaissances comptables avec des compétences techniques avancées pour mieux comprendre et exploiter les données financières. Cela me permettra de contribuer de manière significative à la prise de décisions stratégiques basées sur des analyses de données approfondies.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <div class="relative flex-1 max-w-md">
                    <input
                      type="text"
                      placeholder="Enter your prompt"
                      class="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500/50 backdrop-blur-sm"
                    >
                    <button
                      :disabled="isGenerating"
                      class="absolute right-2 top-1/2 -translate-y-1/2 btn-gradient rounded-full px-6 py-2 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      @click="handleGenerate"
                    >
                      <span class="icon-[tabler--stars] size-5" :class="{ 'animate-spin': isGenerating }"/>
                      {{ isGenerating ? 'Generating...' : 'Generate' }}
                    </button>
                  </div>
                </div>
              </div>

              <!-- Right Content - Featured Image -->
              <div class="relative">
                <div class="glass-card p-8 rounded-3xl">
                  <div class="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center relative">
                    <!-- Default State -->
                    <div v-if="!isGenerating && !showImage" class="text-center space-y-4">
                      <span class="icon-[tabler--robot] text-purple-400 size-32"/>
                      <p class="text-white/50 text-sm">AI Generated Artwork Preview</p>
                    </div>

                    <!-- Loader State - AI Working Animation -->
                    <div v-if="isGenerating" class="text-center space-y-6 w-full px-8">
                      <!-- AI Brain Animation -->
                      <div class="relative">
                        <div class="ai-loader-circle"/>
                        <span class="icon-[tabler--brain] text-purple-400 size-24 relative z-10 mb-4"/>
                      </div>

                      <!-- Progress Bar -->
                      <div class="space-y-3">
                        <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div class="ai-progress-bar h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"/>
                        </div>
                        <p class="text-purple-300 text-sm font-medium animate-pulse">Generating your masterpiece...</p>
                      </div>

                      <!-- AI Processing Steps -->
                      <div class="space-y-2 text-left text-xs text-white/70">
                        <div class="ai-step flex items-center gap-2" style="animation-delay: 0s;">
                          <span class="icon-[tabler--check] text-green-400 size-4"/>
                          <span>Analyzing prompt...</span>
                        </div>
                        <div class="ai-step flex items-center gap-2" style="animation-delay: 0.8s;">
                          <span class="icon-[tabler--check] text-green-400 size-4"/>
                          <span>Processing neural networks...</span>
                        </div>
                        <div class="ai-step flex items-center gap-2" style="animation-delay: 1.6s;">
                          <span class="icon-[tabler--loader] text-purple-400 size-4 animate-spin"/>
                          <span>Rendering image...</span>
                        </div>
                      </div>
                    </div>

                    <!-- Image Reveal State -->
                    <div v-if="showImage" class="w-full h-full image-reveal flex ml-10 justify-center items-center" style="animation-delay: 0s;">
                      <img
                        src="../assets/images/portrait.png"
                        alt="portrait de Michel Banckaert"
                        class="w-72 h-72 rounded-xl"
                      >
                    </div>
                  </div>
                </div>
                <!-- Floating decoration -->
                <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-3xl opacity-50 animate-pulse"/>
                <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-50 animate-pulse" style="animation-delay: 1s;"/>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Companies -->
        <section class="py-10 px-4 border-t border-white/5 relative z-10 bg-gradient-to-b from-gray-900/50 to-gray-700/20">
          <div class="max-w-7xl mx-auto">
            <p class="text-center text-white/50 text-sm uppercase tracking-wider mb-8">ENTREPRISES SUR MON CV</p>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity">
              <div class="flex items-center justify-center">
                <a href="https://vpdive.com" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-110">
                  <img :src="logoVPDive" alt="VPDive" class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all vpdive-blink" >
                </a>
              </div>
              <div class="flex items-center justify-center">
                <a href="https://sogetrel.fr" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-110">
                  <img :src="logoSOGETREL" alt="Sogetrel" class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" >
                </a>
              </div>
              <div class="flex items-center justify-center">
                <a href="https://les-maisons-hospitalieres.fr" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-110">
                  <img :src="logoALMH" alt="ALMH" class="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" >
                </a>
              </div>
              <div class="flex items-center justify-center">
                <a href="https://www.adapah54.fr" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-110">
                  <img :src="logoAdapah" alt="Adapah" class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" >
                </a>
              </div>
              <div class="flex items-center justify-center">
                <a href="https://www.studi.com/fr" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-110">
                  <img :src="logoStudi" alt="Studi" class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" >
                </a>
              </div>
              <div class="flex items-center justify-center">
                <a href="https://www.cic.fr" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-110">
                  <img :src="logoCic" alt="CIC" class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" >
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Creativity Section -->
        <section class="py-20 px-4 relative z-10">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
                Développer de la <span class="gradient-text">Créativité</span> avec Rigueur et Persévérance
              </h2>
              <p class="text-white/70 text-lg max-w-3xl mx-auto">
                Mon apprentissage chez <a href="https://vpdive.com" target="_blank" rel="noopener noreferrer" class="vpdive-blink font-semibold cursor-pointer">VPDive</a>
                me permet de laisser libre cours à ma créativité tout en développant une rigueur professionnelle essentielle. Chaque projet est une opportunité d'innover, d'explorer de nouvelles idées et de repousser les limites de mes compétences techniques. La persévérance est au cœur de mon approche, car je crois que c'est en surmontant les défis que l'on grandit le plus. En combinant créativité, rigueur et persévérance, je m'efforce de créer des solutions web qui sont non seulement fonctionnelles mais aussi esthétiquement plaisantes et innovantes.
              </p>
            </div>
          </div>
        </section>

        <!-- Platform Cards Section -->
        <section class="py-20 px-4 relative z-10">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
              <p class="text-purple-400 text-sm uppercase tracking-wider mb-4">MES COMPÉTENCES</p>
              <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
                Technologies et <span class="gradient-text">Savoir-Faire</span>
              </h2>
              <p class="text-white/70 text-lg max-w-3xl mx-auto">
                Un aperçu de mes compétences techniques et soft skills développées tout au long de mon parcours de développeur full-stack.
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Technologies Frontend -->
              <div class="glass-card p-6 space-y-4">
                <div class="inline-flex px-4 py-2 rounded-full bg-orange-600/20 border border-orange-500/30">
                  <span class="text-orange-300 text-sm font-medium">Frontend Stack</span>
                </div>
                <h3 class="text-white text-xl font-bold">Technologies Frontend</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in technologies.frontend"
                    :key="tech.name"
                    class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <span>{{ tech.icon }}</span>
                    <span>{{ tech.name }}</span>
                  </span>
                </div>
              </div>

              <!-- Technologies Backend -->
              <div class="glass-card p-6 space-y-4">
                <div class="inline-flex px-4 py-2 rounded-full bg-green-600/20 border border-green-500/30">
                  <span class="text-green-300 text-sm font-medium">Backend Stack</span>
                </div>
                <h3 class="text-white text-xl font-bold">Technologies Backend</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in technologies.backend"
                    :key="tech.name"
                    class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <span>{{ tech.icon }}</span>
                    <span>{{ tech.name }}</span>
                  </span>
                </div>
              </div>

              <!-- Savoir-Faire -->
              <div class="glass-card p-6 space-y-4">
                <div class="inline-flex px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30">
                  <span class="text-purple-300 text-sm font-medium">Hard Skills</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in skills['savoir-faire']"
                    :key="skill.name"
                    class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium hover:bg-white/20 transition-colors cursor-pointer"
                    :title="skill.description"
                  >
                    <span>{{ skill.icon }}</span>
                    <span>{{ skill.name }}</span>
                  </span>
                </div>
              </div>

              <!-- Savoir-Être - Large Card -->
              <div class="lg:col-span-2 glass-card p-8 space-y-4">
                <div class="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 border border-cyan-500/30">
                  <span class="text-cyan-300 text-sm font-medium">Soft Skills</span>
                </div>
                <h3 class="text-3xl font-bold">
                  Des <span class="gradient-text">Compétences Humaines</span> Solides
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in skills['savoir-etre']"
                    :key="skill.name"
                    class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium hover:bg-white/20 transition-colors cursor-pointer"
                    :title="skill.description"
                  >
                    <span>{{ skill.icon }}</span>
                    <span>{{ skill.name }}</span>
                  </span>
                </div>
              </div>

              <!-- Experience Badge Card -->
              <div class="glass-card p-6 overflow-hidden relative">
                <div class="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">
                  <div class="text-center space-y-2">
                    <div class="text-6xl font-bold text-white">2+</div>
                    <div class="text-white/70 text-sm">Années d'expérience</div>
                  </div>
                </div>
                <div class="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span class="text-white text-xs font-semibold">EN APPRENTISSAGE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<style scoped>
/* AI Loader Circle Animation */
.ai-loader-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border: 3px solid rgba(168, 85, 247, 0.2);
  border-top-color: rgb(168, 85, 247);
  border-radius: 50%;
  animation: ai-spin 1.5s linear infinite;
}

@keyframes ai-spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Progress Bar Animation */
.ai-progress-bar {
  width: 0;
  background-size: 200% 100%;
  animation: ai-progress 3.5s ease-in-out forwards, shimmer 1.5s infinite;
}

@keyframes ai-progress {
  0% {
    width: 0;
  }
  30% {
    width: 40%;
  }
  60% {
    width: 70%;
  }
  100% {
    width: 100%;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* AI Steps Animation */
.ai-step {
  opacity: 0;
  transform: translateX(-20px);
  animation: ai-step-in 0.5s ease-out forwards;
}

@keyframes ai-step-in {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Image Reveal Animation */
.image-reveal {
  animation: image-reveal 0.8s ease-out forwards;
}

@keyframes image-reveal {
  0% {
    opacity: 0;
    transform: scale(0.9);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
}

/* VPDive Irregular Blink Animation */
.vpdive-blink {
  color: red;
  animation: vpdive-blink 8s ease-in-out infinite;
}

@keyframes vpdive-blink {
  0%, 10% {
    color: rgba(255, 255, 255, 0.7);
    filter: grayscale(1);
  }
  12% {
    filter: grayscale(0);
    color: red;
  }
  14%, 30% {
    color: rgba(255, 255, 255, 0.7);
    filter: grayscale(1);
  }
  32% {
    color: red;
    filter: grayscale(0);
  }
  34%, 56% {
    color: rgba(255, 255, 255, 0.7);
    filter: grayscale(1);
  }
  57% {
    color: red;
    filter: grayscale(0);
  }
  58%, 59% {
    color: rgba(255, 255, 255, 0.7);
    filter: grayscale(1);
  }
  60% {
    color: red;
    filter: grayscale(0);
  }
  60%, 79% {
    color: rgba(255, 255, 255, 0.7);
    filter: grayscale(1);
  }
  80% {
    color: red;
    filter: grayscale(0);
  }
  81%, 100% {
    color: rgba(255, 255, 255, 0.7);
    filter: grayscale(1);
  }
}
</style>