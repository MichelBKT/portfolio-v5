<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { profile, epitechInfo } from '~/data/profile'
import epitechLogo from '~/assets/images/epitech_logo_bleu.png'
import memoji from '~/assets/images/memoji.png'

// Generate stars for background
const stars = ref<Array<{top: string, left: string, delay: string}>>([])

onMounted(() => {
  for (let i = 0; i < 100; i++) {
    stars.value.push({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`
    })
  }
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-6">
            <span class="icon-[tabler--user] text-purple-600 size-5"/>
            <span class="text-purple-400 text-sm font-medium">À propos de moi</span>
          </div>
          <div class="flex justify-center items-center gap-2">
            <img :src="memoji" class="rounded-full justify-self-center" alt="memoji" width="180" height="180" >
          </div>
          <p class="text-2xl text-purple-400 font-medium">{{ profile.title }}</p>
        </div>

        <!-- Bio Section -->
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Left - Biography -->
          <div class="space-y-6">
            <div class="glass-card p-8 rounded-3xl space-y-6">
              <h2 class="text-3xl font-bold text-white flex items-center gap-3">
                <span class="icon-[tabler--book] text-purple-400 size-8" />
                Mon Parcours
              </h2>
              <div class="space-y-4">
                <p
                  v-for="(paragraph, index) in profile.bio"
                  :key="index"
                  class="text-white/70 text-lg leading-relaxed"
                >
                  {{ paragraph }}
                </p>
              </div>
            </div>

            <!-- Epitech Section -->
            <div class="glass-card p-8 rounded-3xl space-y-4">
              <h3 class="text-2xl font-bold gradient-text flex items-center gap-3">
                <span class="icon-[tabler--school] size-7" />
                <img :src="epitechLogo" :alt="epitechInfo.title" class="w-32 h-auto rounded-lg shadow-lg">
              </h3>
              <p
                v-for="(paragraph, index) in epitechInfo.description"
                :key="index"
                class="text-white/70 text-base leading-relaxed"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>

          <!-- Right - Timeline -->
          <div class="glass-card p-8 rounded-3xl">
            <h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span class="icon-[tabler--timeline] text-purple-400 size-8" />
              Timeline
            </h2>
            <div class="relative">
              <!-- Vertical Line -->
              <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />

              <!-- Timeline Events -->
              <div class="space-y-8">
                <div
                  v-for="(event, index) in profile.timeline"
                  :key="index"
                  class="relative pl-20 timeline-item"
                  :style="{ animationDelay: `${index * 0.2}s` }"
                >
                  <!-- Year Circle -->
                  <div class="absolute left-0 w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center border-4 border-black shadow-lg">
                    <span class="text-white text-xs font-bold">{{ event.year }}</span>
                  </div>

                  <!-- Event Card -->
                  <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105">
                    <h3 class="text-white font-bold text-xl mb-2">{{ event.title }}</h3>
                    <p class="text-white/70 text-sm">{{ event.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 px-4 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="glass-card p-6 text-center rounded-2xl">
            <div class="text-4xl font-bold gradient-text mb-2">2+</div>
            <div class="text-white/70 text-sm">Années d'expérience</div>
          </div>
          <div class="glass-card p-6 text-center rounded-2xl">
            <div class="text-4xl font-bold gradient-text mb-2">10+</div>
            <div class="text-white/70 text-sm">Projets réalisés</div>
          </div>
          <div class="glass-card p-6 text-center rounded-2xl">
            <div class="text-4xl font-bold gradient-text mb-2">15+</div>
            <div class="text-white/70 text-sm">Technologies maîtrisées</div>
          </div>
          <div class="glass-card p-6 text-center rounded-2xl">
            <div class="text-4xl font-bold gradient-text mb-2">100%</div>
            <div class="text-white/70 text-sm">Passion & Motivation</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CV Download Section -->
    <section class="py-20 px-4 relative z-10">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
          <span class="icon-[tabler--download] text-purple-400 size-8" />
          Téléchargez mon CV
        </h2>
        <p class="text-white/70 mb-8">Vous pouvez télécharger mon CV au format PDF en cliquant sur le bouton ci-dessous.</p>
        <a
          href="/CV_Michel_BANCKAERT_v15.pdf"
          target="_blank"
          class="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-colors"
        >
          Télécharger le CV
        </a>
      </div>
    </section>

    </div>

</template>

<style scoped>
/* Timeline Item Animation */
.timeline-item {
  opacity: 0;
  animation: timeline-fade-in 0.6s ease-out forwards;
}

@keyframes timeline-fade-in {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>