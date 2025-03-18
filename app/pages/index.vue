<script setup lang="ts">
const { data } = await useAsyncData("index", () => queryCollection("index").first());
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />
    <h2 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl sm:tracking-tight text-center text-gray-900">
      Get<span class="font-bold text-primary-500"> 42% more</span> leads from your forms!<br />In less than
      <span class="font-bold text-primary-500">5 mins</span> installation
    </h2>
    <h3 class="text-lg sm:text-2xl text-center tracking-tight text-gray-600 mt-5">
      {{ data.subtitle }}
    </h3>

    <AppTemp />
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <AppLogos :title="data.logos" />
  </div>

  <!-- <div class="bg-gray-100 rounded-2xl mx-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24">
      <AppUsecases :data="data.usecases" />
    </div>
  </div> -->

  <div class="bg-gray-100 rounded-2xl mx-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <AppFeatures :data="data.features" />
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24 text-gray-950">
    <h2 class="text-pretty font-semibold text-3xl md:text-4xl lg:text-5xl">
      {{ data.cta.title }}
    </h2>
    <ul class="ml-4 mt-4 text-lg space-y-1">
      <li v-for="(item, index) of data.cta.items" :key="index" class="flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clip-rule="evenodd"
          />
        </svg>
        {{ item }}
      </li>
    </ul>
    <div class="mt-6 ml-4">
      <UButton :label="data.cta.link.label" :to="data.cta.link.to" />
    </div>
  </div>

  <div class="bg-gray-100 rounded-2xl mx-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <AppFaq type="closed" />
    </div>
  </div>
</template>

<style scoped>
.landing-grid {
  background-size: 100px 100px;
  background-image: linear-gradient(to right, oklch(0.928 0.006 264.531) 1px, transparent 1px),
    linear-gradient(to bottom, oklch(0.928 0.006 264.531) 1px, transparent 1px);
}
</style>
