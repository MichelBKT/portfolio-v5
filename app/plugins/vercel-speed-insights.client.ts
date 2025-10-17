import { injectSpeedInsights } from '@vercel/speed-insights/nuxt'

export default defineNuxtPlugin(() => {
  injectSpeedInsights()
})