// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/seo", "@nuxt/ui", "@nuxt/content", "@nuxt/fonts", "@nuxt/image", "@zadigetvoltaire/nuxt-gtm", "nuxt-og-image"],
  runtimeConfig: {
    public: {
      posthogPublicKey: "phc_5QgLffNba5CNwWs5d9ag3zGLiptTe3Bxiq1MNcj9j0m",
      posthogHost: "https://us.i.posthog.com",
      gtm: {
        id: "GTM-TZSSN6L2",
      },
    },
  },
  ssr: true,
  css: ["~/assets/css/main.css"],
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
  devtools: {
    enabled: true,
  },
  colorMode: {
    preference: "light",
  },
  typescript: {
    strict: false,
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-07-11",
  site: {
    url: "convertedge.co",
  },
});
