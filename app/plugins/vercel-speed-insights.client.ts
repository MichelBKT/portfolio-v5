import { injectSpeedInsights } from '@vercel/speed-insights'

export default defineNuxtPlugin(() => {
  if (process.client) {
    injectSpeedInsights()
  }
})