// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/image", "@nuxt/ui", "@nuxthq/studio", "@nuxtjs/seo", "@zadigetvoltaire/nuxt-gtm"],
  runtimeConfig: {
    public: {
      posthogPublicKey: "phc_5QgLffNba5CNwWs5d9ag3zGLiptTe3Bxiq1MNcj9j0m",
      posthogHost: "https://us.i.posthog.com",
      gtm: {
        id: "GTM-NJJ9WMG9",
      },
    },
  },
  ssr: true,
  content: {
    experimental: {
      clientDB: true,
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
  // ogImage: { enabled: false },
  compatibilityDate: "2024-07-11",
  site: {
    url: "convertedge.co",
  },
});
