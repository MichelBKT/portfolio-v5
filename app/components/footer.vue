<script setup lang="ts">

</script>

<template>
  <footer class="w-full border-t border-white/10 bg-black/40 backdrop-blur-sm relative z-10">
    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-white">Michel Banckaert</h3>
          <p class="text-white/70 text-sm">
            Développeur Full-Stack passionné par l'innovation et les nouvelles technologies.
          </p>
          <div class="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-white/70 hover:text-purple-400 transition-colors">
              <span class="icon-[tabler--brand-github] size-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-white/70 hover:text-purple-400 transition-colors">
              <span class="icon-[tabler--brand-linkedin] size-6" />
            </a>
            <a href="mailto:contact@michelbanckaert.fr" class="text-white/70 hover:text-purple-400 transition-colors">
              <span class="icon-[tabler--mail] size-6" />
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h6 class="text-white font-semibold mb-4">Navigation</h6>
          <nav class="flex flex-col space-y-2">
            <a href="/" class="text-white/70 hover:text-white transition-colors text-sm">Accueil</a>
            <a href="/about" class="text-white/70 hover:text-white transition-colors text-sm">A propos</a>
            <a href="#projets" class="text-white/70 hover:text-white transition-colors text-sm">Projets</a>
            <a href="#blog" class="text-white/70 hover:text-white transition-colors text-sm">Blog</a>
            <a href="#contact" class="text-white/70 hover:text-white transition-colors text-sm">Contact</a>
          </nav>
        </div>

        <!-- Technologies -->
        <div>
          <h6 class="text-white font-semibold mb-4">Technologies</h6>
          <nav class="flex flex-col space-y-2">
            <span class="text-white/70 text-sm">React & Vue.js</span>
            <span class="text-white/70 text-sm">Node.js & PHP</span>
            <span class="text-white/70 text-sm">TypeScript</span>
            <span class="text-white/70 text-sm">Symfony & Laravel</span>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h6 class="text-white font-semibold mb-4">Contact</h6>
          <div class="flex flex-col space-y-2 text-white/70 text-sm">
            <a href="mailto:contact@michelbanckaert.fr" class="hover:text-white transition-colors">
              contact@michelbanckaert.fr
            </a>
            <span>Nancy, France</span>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-white/50 text-sm">
          ©{{ new Date().getFullYear() }} Michel Banckaert. Tous droits réservés.
        </p>
        <div class="flex gap-6 text-sm">
          <a href="#" class="text-white/50 hover:text-white transition-colors">Mentions légales</a>
          <a href="#" class="text-white/50 hover:text-white transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>