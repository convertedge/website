// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/image", "@nuxt/ui", "@nuxthq/studio", "@nuxtjs/sitemap", "@nuxtjs/seo", "nuxt-og-image"],
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
  robots: {
    disallow: [],
    allow: "*",
  },
  site: {
    url: "https://convertedge.co",
    name: "Convertedge",
    description: "Skyrocket your conversion rate",
    defaultLocale: "en",
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
});
