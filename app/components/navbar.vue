<script setup lang="ts">
import { ref } from 'vue'

const isDropdownOpen = ref(false)
ref(false);
const isMobileDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
const toggleMobileDropdown = () => {
  isMobileDropdownOpen.value = !isMobileDropdownOpen.value
}
</script>

<template>
  <nav class="sticky h-20 w-full top-4 z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
            <img src="../assets/images/brand.png" alt="logo" class="rounded-full w-12 h-12" />
          <span class="text-xl font-bold text-white">Michel Banckaert</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#home" class="text-white/70 hover:text-white transition-colors">Accueil</a>
          <a href="#about" class="text-white/70 hover:text-white transition-colors">A propos de moi</a>
          <div class="relative inline-flex">
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
          <button type="button" class="collapse-toggle btn btn-ghost btn-sm btn-square text-white" data-collapse="#mobile-menu">
            <span class="icon-[tabler--menu-2] collapse-open:hidden size-6"></span>
            <span class="icon-[tabler--x] collapse-open:block hidden size-6"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="collapse hidden md:hidden pb-4  bg-[#0a0a0f]/90">
        <div class="flex flex-col gap-4 ml-68">
          <a href="#home" class="text-white/70 hover:text-white transition-colors">Accueil</a>
          <a href="#about" class="text-white/70 hover:text-white transition-colors">A propos de moi</a>

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
                class="icon-[tabler--chevron-down] size-4 transition-transform"
                :class="{ 'rotate-180': isMobileDropdownOpen }"
              ></span>
            </button>
            <div
              v-show="isMobileDropdownOpen"
              class="flex flex-col gap-2 mt-2 ml-4"
            >
              <a class="text-white/60 hover:text-white transition-colors text-sm" href="#feature1">Data</a>
              <a class="text-white/60 hover:text-white transition-colors text-sm" href="#feature2">Cyber</a>
              <a class="text-white/60 hover:text-white transition-colors text-sm" href="#feature3">Jeux-vidéo</a>
              <a class="text-white/60 hover:text-white transition-colors text-sm" href="#feature4">Dev web</a>
            </div>
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