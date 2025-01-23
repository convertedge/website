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
  <h3 class="mb-4 sm:mb-6 lg:mb-8 text-pretty font-semibold text-gray-950 text-3xl md:text-4xl lg:text-5xl text-center">
    {{ data.title }}
  </h3>

  <div class="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
    <div v-for="(item, index) of data.items" :key="index" :class="[index < 2 ? 'lg:col-span-3' : 'lg:col-span-2', 'relative']" ref="features-cards">
      <div
        :class="[
          index == 0 ? 'max-md:rounded-t-3xl lg:rounded-tl-3xl' : '',
          index == 1 ? 'lg:rounded-tr-3xl' : '',
          index == 2 ? 'lg:rounded-bl-3xl' : '',
          index == 4 ? 'max-lg:rounded-b-3xl lg:rounded-br-3xl' : '',
          'relative flex h-full flex-col overflow-hidden rounded-md ring-1 ring-gray-200',
        ]"
      >
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
        <div v-if="index == 4" class="h-80">
          <AppMap :element="featuresCardsRefs?.[index]" />
        </div>
        <div class="p-6 sm:p-10 pt-4">
          <p class="text-lg font-medium text-gray-950">{{ item.title }}</p>
          <p class="mt-2 text-sm text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
