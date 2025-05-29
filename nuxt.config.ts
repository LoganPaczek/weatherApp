// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  app :{
    head :{
      title : "Weather App By Logan Paczek",
      meta: [
        { name: 'description', content: 'Weather app made with Nuxt.js for learning.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],

      link: [
        { rel: 'preload', as: 'image', href: '/assets/images/Clear.png' },
        { rel: 'preload', as: 'image', href: '/assets/images/Rain.png' },
        { rel: 'preload', as: 'image', href: '/assets/images/Clouds.png' },
        { rel: 'preload', as: 'image', href: '/assets/images/Storm.png' },
      ],

      htmlAttrs: {
        lang: 'fr'
      }
    }
  },

  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/global.css'
  ],

  runtimeConfig: {
    public: {
      apiKey: "61eee57ae89b4a920d71db924b2272aa",
      apiBase: "https://api.openweathermap.org/data/2.5/weather",
      forecastApiBase: "https://api.openweathermap.org/data/2.5/forecast",
      geoDataApi: "https://api.openweathermap.org/geo/1.0/direct?q=${city},FR&limit=1&appid=${apiKey}"
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
      },
      "/api/geo": {
        target: "https://api.openweathermap.org/geo/1.0/direct",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/geo/, "")  
      },
  }
}
});
