<script setup lang="ts">
const { data } = await useAsyncData("index", () => queryCollection("index").first());

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: "white" },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  titleTemplate: "%s",
  ogSiteName: "Convertedge",
  title: data?.value?.title,
  ogTitle: data?.value?.title,
  twitterTitle: data?.value?.title,
  description: data?.value?.subtitle,
  ogDescription: data?.value?.subtitle,
  twitterDescription: data?.value?.subtitle,
  ogImage: "https://convertedge.co/social-card.png",
  twitterImage: "https://convertedge.co/social-card.png",
  twitterCard: "summary_large_image",
  ogImageType: "image/png",
  ogUrl: "https://convertedge.co",
  twitterCreator: "@nirgn975",
  twitterSite: "@nirgn975",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
