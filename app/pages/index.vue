<script setup lang="ts">
const { data } = await useAsyncData("index", () => queryContent("/").findOne());
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />
    <h2 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold sm:font-bold sm:tracking-tight text-center text-gray-900">
      Shorten & enrich any form!<br class="hidden sm:block" /><span
        class="ml-1 sm:ml-0 bg-clip-text text-transparent bg-gradient-to-r from-primary-900 to-primary-300"
        >Boost conversion</span
      >
      of any page
    </h2>
    <h3 class="text-lg sm:text-2xl text-center tracking-tight text-gray-600 mt-5">
      {{ data.subtitle }}
    </h3>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <AppLogos :title="data.logos" />
  </div>

  <div class="bg-gray-100 rounded-2xl mx-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24">
      <AppUsecases :data="data.usecases" />
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <AppFeatures :data="data.features" />
  </div>

  <div class="bg-gray-100 rounded-2xl mx-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24">
      <h2 class="max-w-2xl text-pretty font-semibold text-gray-950 text-3xl md:text-4xl lg:text-5xl">
        {{ data.cta.title }}<br class="hidden sm:block" /><span class="ml-1 sm:ml-0">{{ data.cta.subtitle }}</span>
      </h2>
      <div class="mt-6">
        <UButton :label="data.cta.link.label" :color="data.cta.link.color" :to="data.cta.link.to" />
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-">
    <AppFaq type="closed" />
  </div>
</template>

<style scoped>
.landing-grid {
  background-size: 100px 100px;
  background-image: linear-gradient(to right, rgb(var(--color-gray-200)) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 1px, transparent 1px);
}
</style>
