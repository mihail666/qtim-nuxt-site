import { createVuetify, type ThemeDefinition } from 'vuetify'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi-svg'
const aliases = allAliases

const LightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    backgroundFooter: '#E2BEFF',
    surface: '#FFFFFF',
    primary: '#282828',
    secondary: '#03DAC6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'LightTheme',
      themes: {
        LightTheme,
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi }
    }
  })

  nuxtApp.vueApp.use(vuetify)

})
