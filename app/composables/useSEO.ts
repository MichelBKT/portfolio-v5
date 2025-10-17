export const useSEO = (options: {
  title: string
  description: string
  ogImage?: string
  ogType?: string
}) => {
  const baseUrl = 'https://michel-bkt.vercel.app'
  const defaultImage = `${baseUrl}/og-image.jpg`

  useHead({
    title: options.title,
    meta: [
      { name: 'description', content: options.description },

      // Open Graph
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:type', content: options.ogType || 'website' },
      { property: 'og:image', content: options.ogImage || defaultImage },
      { property: 'og:url', content: baseUrl + useRoute().path },

      // Twitter
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: options.ogImage || defaultImage },
    ],
    link: [
      { rel: 'canonical', href: baseUrl + useRoute().path }
    ]
  })
}