<script setup lang="ts">
const { data } = await useAsyncData("index", () => queryContent("/").findOne());

useSeoMeta({
  title: data?.value?.title,
  ogTitle: data?.value?.title,
  description: data?.value?.description,
  ogDescription: data?.value?.description,
});
</script>

<template>
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />
      <h2 class="text-5xl sm:text-7xl font-bold tracking-tight text-center text-gray-900">
        Unlock your potential and<br /><span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-900 to-primary-300">boost your conversion</span>
      </h2>
      <h3 class="text-2xl text-center tracking-tight text-gray-700 mt-5">Turn opportunities into outcomes and harness the power of every interaction</h3>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <AppCompare>
        <template #first>
          <div class="flex size-full justify-center items-center bg-gray-50 h-[30rem]">
            <span class="text-4xl font-bold text-gray-950">☀️ Day</span>
          </div>
        </template>
        <template #second>
          <div class="flex size-full justify-center items-center bg-gray-50 h-[30rem]">
            <span class="text-4xl font-bold text-gray-950">🌙 Night</span>
          </div>
        </template>
      </AppCompare>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <AppLogos />
    </div>

    <div class="bg-gray-100 mx-4 rounded-2xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AppUsecases :data="data.usecases" />
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <AppFeatures :data="data.features" />
    </div>

    <div class="bg-gray-100 mx-4 rounded-2xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 class="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ data.cta.title }}<br />{{ data.cta.subtitle }}</h2>
        <div class="mt-6">
          <UButton :label="data.cta.link.label" :color="data.cta.link.color" :to="data.cta.link.to" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-grid {
  background-size: 100px 100px;
  background-image: linear-gradient(to right, rgb(var(--color-gray-200)) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 1px, transparent 1px);
}
</style>
