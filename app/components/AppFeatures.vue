<script setup lang="ts">
import AppEnrichment from "@/components/features/AppEnrichment.vue";
import AppIntegrations from "@/components/features/AppIntegrations.vue";
import AppSimplicity from "@/components/features/AppSimplicity.vue";

defineProps({
  data: {
    type: Object,
  },
});

const width = ref(window?.innerWidth);
const featuresCardsRefs: Ref<HTMLElement> = useTemplateRef("features-cards");

onMounted(() => {
  window.addEventListener("resize", () => (width.value = window?.innerWidth));
  console.log("featuresCardsRefs", featuresCardsRefs);
});

// const enrichmentCardElm: Ref<HTMLElement> = useTemplateRef("enrichment-card");
// onMounted(() => {
//   enrichmentCardElm.value.addEventListener("mouseenter", () => {
//     console.log("enter");
//   });
//   enrichmentCardElm.value.addEventListener("mouseout", () => {
//     console.log("leave");
//   });
// });
</script>

<template>
  <h3 class="mb-4 sm:mb-6 lg:mb-8 text-pretty font-semibold tracking-tight text-gray-950 text-3xl md:text-4xl lg:text-5xl w-4/5">
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
        <!-- <img class="h-80 object-cover object-left" :src="item.image" alt="" /> -->
        <img v-if="![1, 2, 3].includes(index)" class="h-80 object-cover object-left" :src="item.image" alt="" />
        <div v-if="index == 1" class="h-80">
          <AppEnrichment :element="featuresCardsRefs?.[index]" :width="width" />
        </div>
        <div v-if="index == 2" class="h-80">
          <AppSimplicity :element="featuresCardsRefs?.[index]" />
        </div>
        <div v-if="index == 3" class="h-80">
          <AppIntegrations :element="featuresCardsRefs?.[index]" />
        </div>
        <div class="p-10 pt-4">
          <p class="text-lg font-medium text-gray-950">{{ item.title }}</p>
          <p class="mt-2 text-sm text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
