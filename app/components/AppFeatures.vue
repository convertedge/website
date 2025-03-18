<script setup lang="ts">
import AppShorter from "@/components/features/AppShorter.vue";
import AppEnrichment from "@/components/features/AppEnrichment.vue";
import AppIntegrations from "@/components/features/AppIntegrations.vue";
import AppSimplicity from "@/components/features/AppSimplicity.vue";
import AppMap from "@/components/features/AppMap.vue";

defineProps({
  data: {
    type: Object,
  },
});

const width = ref(window?.innerWidth);
const featuresCardsRefs: Ref<HTMLElement> = useTemplateRef("features-cards");

onMounted(() => {
  window.addEventListener("resize", () => (width.value = window?.innerWidth));
});
</script>

<template>
  <h3 class="px-14 mb-2 lg:mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl sm:tracking-tight text-center text-gray-900">
    <span class="font-bold text-primary-500">Shorten & enrich</span> any form! <span class="font-bold text-primary-500">Boost conversion</span> of any page
  </h3>
  <h4 class="text-lg sm:text-2xl text-center tracking-tight text-gray-600 mb-4">
    {{ data.subtitle }}
  </h4>

  <div class="space-y-8">
    <div v-for="(item, index) of data.items" :key="index" class="grid grid-cols-2 gap-8 bg-gray-50 p-4 rounded-2xl ring-1 ring-gray-200">
      <div v-if="index % 2 == 0" class="text-gray-900 p-4 text-lg">
        <p class="font-semibold text-3xl">{{ item.title }}</p>
        <p class="text-xl mt-4">{{ item.description }}</p>
        <ul class="list-disc pl-8 mt-6 text-lg space-y-1">
          <li v-for="(point, pIndex) of item.items" :key="pIndex">{{ point }}</li>
        </ul>
      </div>

      <div v-if="index == 0" class="h-80">
        <AppShorter :element="featuresCardsRefs?.[index]" :width="width" />
      </div>
      <div v-if="index == 1" class="h-80">
        <AppEnrichment :element="featuresCardsRefs?.[index]" :width="width" />
      </div>
      <div v-if="index == 2" class="h-80">
        <AppSimplicity :element="featuresCardsRefs?.[index]" />
      </div>
      <div v-if="index == 3" class="h-80">
        <AppIntegrations :element="featuresCardsRefs?.[index]" />
      </div>

      <div v-if="index % 2 != 0" class="text-gray-900 p-4">
        <p class="font-semibold text-3xl">{{ item.title }}</p>
        <p class="text-xl mt-4">{{ item.description }}</p>
        <ul class="list-disc pl-8 mt-6 text-lg space-y-1">
          <li v-for="(point, pIndex) of item.items" :key="pIndex">{{ point }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
