import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  pages: true,
  modules: ['nuxt-icon'],
  css: ['~/assets/base.scss'],

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify'],
    },
  },
})
