import Aura from '@primevue/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css:[
    '~/assets/css/main.css'
  ],
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
  },
  primevue:{
    options:{
        theme: {
            preset: Aura,
            options: {
                cssLayer: {
                    name: 'primevue',
                    order: 'tailwind-base, primevue, tailwind-utilities'
                }
            }
        }
    }
  }
})
