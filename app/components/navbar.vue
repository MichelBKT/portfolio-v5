<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const toggleMobileDropdown = () => {
  isMobileDropdownOpen.value = !isMobileDropdownOpen.value
}

// Fermer le dropdown quand on clique ailleurs
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.dropdown-container')) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="sticky h-24 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10 rounded-t-2xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-24">
        <!-- Logo -->
        <div class="flex items-center gap-2">
            <img src="../assets/images/brand.png" alt="logo" class="rounded-full w-12 h-12" />
          <span class="text-xl font-bold text-white">Michel Banckaert</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a href="/" class="text-white/70 hover:text-white transition-colors">Accueil</a>
          <a href="/about" class="text-white/70 hover:text-white transition-colors">A propos de moi</a>
          <div class="relative inline-flex dropdown-container">
            <button
              class="text-white/70 hover:text-white transition-colors flex items-center gap-1 "
              :aria-expanded="isDropdownOpen"
              aria-haspopup="menu"
              type="button"
              @click="toggleDropdown"
            >
              Projets
              <span class="icon-[tabler--stars] text-purple-400 size-4"></span>
              <span
                class="icon-[tabler--chevron-down] size-4 transition-transform"
                :class="{ 'rotate-180': isDropdownOpen }"
              ></span>
            </button>
            <ul
              v-show="isDropdownOpen"
              class="absolute top-full right-0 mt-2 glass-card min-w-48 p-2 rounded-xl"
              role="menu"
            >
              <li><a class="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#feature1">Data</a></li>
              <li><a class="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#feature2">Cyber</a></li>
              <li><a class="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#feature3">Jeux-vidéo</a></li>
              <li><a class="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#feature4">Dev web</a></li>
            </ul>
          </div>
          <a href="#blog" class="text-white/70 hover:text-white transition-colors">Blog</a>
          <a href="#contact" class="text-white/70 hover:text-white transition-colors">Contact</a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button type="button" class="bg-purple-950 btn btn-ghost btn-sm btn-square text-white" @click="toggleMobileMenu">
            <span v-if="!isMobileMenuOpen" class="icon-[mage--dots-menu] size-6" />
            <span v-else class="icon-[tabler--x] size-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        class="mobile-menu-container md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0a0a0f]/90"
        :class="isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
      >
        <div class="flex flex-col gap-4 px-4 py-4">
          <a href="/" class="text-white/70 hover:text-white transition-colors">Accueil</a>
          <a href="/about" class="text-white/70 hover:text-white transition-colors">A propos de moi</a>

          <!-- Mobile Dropdown -->
          <div class="flex flex-col">
            <button
              :aria-expanded="isMobileDropdownOpen"
              class="text-white/70 hover:text-white transition-colors flex items-center justify-between w-full"
              type="button"
              @click="toggleMobileDropdown"
            >
              <span>Projets</span>
              <span
                class="icon-[tabler--chevron-down] size-4 transition-transform duration-300"
                :class="{ 'rotate-180': isMobileDropdownOpen }"
              />
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-40 opacity-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="max-h-40 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div
                v-show="isMobileDropdownOpen"
                class="flex flex-col gap-2 mt-2 ml-4 overflow-hidden"
              >
                <a class="text-white/60 hover:text-white transition-colors text-sm" href="#feature1">Data</a>
                <a class="text-white/60 hover:text-white transition-colors text-sm" href="#feature2">Cyber</a>
                <a class="text-white/60 hover:text-white transition-colors text-sm" href="#feature3">Jeux-vidéo</a>
                <a class="text-white/60 hover:text-white transition-colors text-sm" href="#feature4">Dev web</a>
              </div>
            </Transition>
          </div>

          <a href="#blog" class="text-white/70 hover:text-white transition-colors">Blog</a>
          <a href="#contact" class="text-white/70 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>