<script setup lang="ts">

import Navbar from "~/components/navbar.vue";
import Footer from "~/components/footer.vue";
</script>

<template>
  <div class="min-h-screen p-4 md:p-8">
    <div class="max-w-[1600px] mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl">
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