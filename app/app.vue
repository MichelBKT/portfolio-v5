<script setup lang="ts">
import Navbar from "~/components/Navbar.vue"
import Footer from "~/components/Footer.vue"
import StarfieldBackground from "~/components/StarfieldBackground.vue"
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>

<template>
  <Analytics />
  <SpeedInsights />
  <div class="min-h-screen relative p-4 md:p-8">
    <NuxtRouteAnnouncer />

    <!-- Starfield Background -->
    <StarfieldBackground />

    <div class="max-w-[1600px] mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl relative" style="z-index: 10;">
      <Navbar />
      <main>
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </div>
</template>