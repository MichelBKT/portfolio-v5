<script setup lang="ts">

import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import StarfieldBackground from "~/components/StarfieldBackground.vue";
</script>

<template>
  <div class="min-h-screen relative p-4 md:p-8">
    <!-- Starfield Background -->
    <StarfieldBackground />

    <div class="max-w-[1600px] mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl relative" style="z-index: 10;">
      <Navbar />
      <main>
        <NuxtPage/>
      </main>
      <Footer />
    </div>
  </div>

</template>

<style scoped>

</style>