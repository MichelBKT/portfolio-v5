<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { projects } from '~/data/projects'

// SEO
useSEO({
  title: 'Projets - Michel Banckaert | Portfolio de développeur',
  description: 'Découvrez mes projets en développement web, cybersécurité, cybersécurité et jeux vidéo. RPG HD2D, applications web, projets data et plus encore.'
})

// Categories from projects
const categories = ['tous', ...new Set(projects.map(p => p.category))]
const selectedCategory = ref('tous')

// Video modal
const showVideoModal = ref(false)
const currentVideo = ref<string | null>(null)

// Map URL hash to category
const hashToCategory: Record<string, string> = {
  'jeux-video': 'jeux video',
  'cybersecurite': 'cybersécurité',
  'web': 'web',
  'devops': 'devops'
}

// Get category from URL hash
const getCategoryFromHash = () => {
  if (typeof window === 'undefined') return 'tous'

  const hash = window.location.hash.replace('#', '')
  if (!hash) return 'tous'

  return hashToCategory[hash] || 'tous'
}

// Handle hash change
const handleHashChange = () => {
  const newCategory = getCategoryFromHash()
  selectedCategory.value = newCategory
}

// Set category from URL hash on mount
onMounted(() => {
  const category = getCategoryFromHash()
  selectedCategory.value = category

  // Watch for hash changes (navigation)
  window.addEventListener('hashchange', handleHashChange)
})

// Clean up event listener
onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange)
})

// Filter projects by category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'tous') {
    return projects
  }
  return projects.filter(p => p.category === selectedCategory.value)
})

// Check if demo is a video file
const isVideoDemo = (demo: string | null) => {
  if (!demo) return false
  return demo.endsWith('.mp4') || demo.endsWith('.webm') || demo.endsWith('.ogg')
}

// Open video modal
const openVideoModal = (videoUrl: string) => {
  currentVideo.value = videoUrl
  showVideoModal.value = true
}

// Close video modal
const closeVideoModal = () => {
  showVideoModal.value = false
  currentVideo.value = null
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-6">
            <span class="icon-[tabler--code] text-purple-600 size-5"/>
            <span class="text-purple-400 text-sm font-medium">Portfolio</span>
          </div>
          <h1 class="text-5xl lg:text-6xl font-bold text-white mb-4">
            Mes <span class="gradient-text">Projets</span>
          </h1>
          <p class="text-white/70 text-lg max-w-3xl mx-auto">
            Découvrez une sélection de mes projets réalisés au cours de ma formation et de mes expériences professionnelles.
          </p>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all',
              selectedCategory === category
                ? 'btn-gradient text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            ]"
          >
            {{ category.charAt(0).toUpperCase() + category.slice(1) }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="glass-card rounded-3xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 project-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Project Image -->
            <div class="relative h-48 overflow-hidden bg-gradient-to-br from-purple-600/20 to-indigo-600/20">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              >
              <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/20">
                <span class="text-white text-xs font-semibold uppercase">{{ project.category }}</span>
              </div>
              <div v-if="project.subtitle.toLowerCase().includes('en cours')" class="absolute top-4 left-4 px-3 py-1 rounded-full bg-orange-600/80 backdrop-blur-sm border border-orange-500/30">
                <span class="text-white text-xs font-semibold uppercase">En cours</span>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6 space-y-4">
              <div>
                <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
                <p class="text-purple-400 text-sm font-medium">{{ project.subtitle }}</p>
              </div>

              <p class="text-white/70 text-sm line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Features -->
              <div class="space-y-2">
                <h4 class="text-white text-sm font-semibold flex items-center gap-2">
                  <span class="icon-[tabler--list-check] size-4" />
                  Fonctionnalités clés
                </h4>
                <ul class="space-y-1">
                  <li
                    v-for="(feature, idx) in project.features.slice(0, 3)"
                    :key="idx"
                    class="text-white/70 text-xs flex items-start gap-2"
                  >
                    <span class="icon-[tabler--check] text-purple-400 size-3 mt-0.5 flex-shrink-0" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Actions -->
              <div class="flex gap-3 pt-4">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
                >
                  <span class="icon-[tabler--brand-github] size-4" />
                  GitHub
                </a>
                <!-- Video demo button -->
                <button
                  v-if="project.demo && isVideoDemo(project.demo)"
                  @click="openVideoModal(project.demo)"
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full btn-gradient text-white text-sm font-medium transition-colors"
                >
                  <span class="icon-[tabler--player-play] size-4" />
                  Démo
                </button>
                <!-- External demo link -->
                <a
                  v-else-if="project.demo && !isVideoDemo(project.demo)"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full btn-gradient text-white text-sm font-medium transition-colors"
                >
                  <span class="icon-[tabler--eye] size-4" />
                  Démo
                </a>
                <div
                  v-if="!project.github && !project.demo"
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/50 text-sm font-medium cursor-not-allowed"
                >
                  <span class="icon-[tabler--lock] size-4" />
                  Privé
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
            <div class="text-4xl font-bold gradient-text mb-2">{{ projects.length }}</div>
            <div class="text-white/70 text-sm">Projets réalisés</div>
          </div>
          <div class="glass-card p-6 text-center rounded-2xl">
            <div class="text-4xl font-bold gradient-text mb-2">{{ categories.length - 1 }}</div>
            <div class="text-white/70 text-sm">Catégories</div>
          </div>
          <div class="glass-card p-6 text-center rounded-2xl">
            <div class="text-4xl font-bold gradient-text mb-2">{{ new Set(projects.flatMap(p => p.technologies)).size }}</div>
            <div class="text-white/70 text-sm">Technologies utilisées</div>
          </div>
          <div class="glass-card p-6 text-center rounded-2xl">
            <div class="text-4xl font-bold gradient-text mb-2">{{ projects.filter(p => p.github).length }}</div>
            <div class="text-white/70 text-sm">Projets open source</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showVideoModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click="closeVideoModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

          <!-- Modal Content -->
          <div
            class="relative w-full max-w-5xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            @click.stop
          >
            <!-- Close Button -->
            <button
              @click="closeVideoModal"
              class="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <span class="icon-[tabler--x] size-6" />
            </button>

            <!-- Video Player -->
            <div class="relative aspect-video bg-black">
              <video
                v-if="currentVideo"
                :src="currentVideo"
                controls
                autoplay
                class="w-full h-full"
              >
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
/* Project Card Animation */
.project-card {
  opacity: 0;
  animation: project-fade-in 0.6s ease-out forwards;
}

@keyframes project-fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Line clamp utility */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div:last-child,
.modal-leave-active > div:last-child {
  transition: transform 0.3s ease;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  transform: scale(0.95);
}
</style>