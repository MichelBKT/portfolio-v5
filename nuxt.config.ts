// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

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
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Michel Banckaert - Développeur Full-Stack',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { name: 'description', content: 'Portfolio de Michel Banckaert, développeur Full-Stack passionné par le développement web et la cybersécurité. Découvrez mes projets et compétences.' },
        { name: 'keywords', content: 'développeur web, full-stack, cybersécurité, Vue.js, React, Node.js, Nuxt, portfolio, Nancy, France' },
        { name: 'author', content: 'Michel Banckaert' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://michel-bkt.vercel.app' },
        { property: 'og:title', content: 'Michel Banckaert - Développeur Full-Stack' },
        { property: 'og:description', content: 'Portfolio de Michel Banckaert, développeur Full-Stack passionné par le développement web et la cybersécurité.' },
        { property: 'og:image', content: 'https://michel-bkt.vercel.app/og-image.jpg' },
        { property: 'og:locale', content: 'fr_FR' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://michel-bkt.vercel.app' },
        { name: 'twitter:title', content: 'Michel Banckaert - Développeur Full-Stack & cybersécurité' },
        { name: 'twitter:description', content: 'Portfolio de Michel Banckaert, développeur Full-Stack passionné par le développement web et la cybersécurité.' },
        { name: 'twitter:image', content: 'https://michel-bkt.vercel.app/og-image.jpg' },

        // Additional SEO
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#667eea' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://michel-bkt.vercel.app' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-X8HQY6M9GF',
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8HQY6M9GF');
          `
        }
      ]
    }
  }
})