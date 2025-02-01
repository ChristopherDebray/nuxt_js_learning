// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: {
    dirs: [
      {
        path: '~/components/layouts',
        pathPrefix: false, // Disable prefixing for this folder
      },
    ],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
  ],
  pinia: {
    // By default pinia only import stores at the root of the stores folder, not the sub folders
    storesDirs: ['./stores/**'],
  }
})
