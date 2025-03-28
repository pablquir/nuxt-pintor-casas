// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/color-mode', '@nuxt/image'],
  // tailwindcss: { cssPath: ['./assets/css/tailwind.css', { injectPosition: "first" }] },
  icon: {
    class: 'icon',
    mode: 'svg',
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/icons'
      }
    ]
  },
  colorMode: {
    classSuffix: ''
  },
  image: {
    format: ['webp']
  }

})
