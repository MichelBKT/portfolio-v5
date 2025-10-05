<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Generate stars for background
const stars = ref<Array<{top: string, left: string, delay: string}>>([])

onMounted(() => {
  for (let i = 0; i < 35; i++) {
    stars.value.push({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`
    })
  }
})
</script>

<template>
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
</template>