// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css : [
    '@/assets/styles/reset.css', 
    '@/assets/styles/global.css'
  ],

  runtimeConfig: {
    public: {
      apiKey : "61eee57ae89b4a920d71db924b2272aa",
      apiBase: `https://api.openweathermap.org/data/2.5/weather`
    }
  }
})
