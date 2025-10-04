// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    // '@nuxt/content', // Désactivé temporairement - incompatible avec Nuxt 4
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  icon: {
    serverBundle: {
      collections: ['tabler']
    }
  }
})