// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/image", "@nuxt/ui", "@nuxthq/studio", "@nuxtjs/seo"],
  runtimeConfig: {
    public: {
      posthogPublicKey: "phc_5QgLffNba5CNwWs5d9ag3zGLiptTe3Bxiq1MNcj9j0m",
      posthogHost: "https://us.i.posthog.com",
    },
  },
  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
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
    url: "https://convertedge.co",
    name: "Convertedge",
    description: "Skyrocket your conversion rate",
    defaultLocale: "en",
  },
});