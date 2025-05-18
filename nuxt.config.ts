// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/global.css'
  ],

  runtimeConfig: {
    public: {
      apiKey: "61eee57ae89b4a920d71db924b2272aa",
      apiBase: "https://api.openweathermap.org/data/2.5/weather",
      forecastApiBase: "https://api.openweathermap.org/data/2.5/forecast"
    }
  },

  nitro: {
    devProxy: {
      "/api/weather": {
        target: "https://api.openweathermap.org/data/2.5/weather",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/weather/, "")
      },
      "/api/forecast": {
        target: "https://api.openweathermap.org/data/2.5/forecast",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/forecast/, "")
      }
    }
  }
});
