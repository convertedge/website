<script setup lang="ts">
defineProps({
  title: { type: String },
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h3 class="mb-4 sm:mb-6 lg:mb-8 text-pretty font-medium text-gray-950 text-xl md:text-2xl lg:text-3xl text-center">
      {{ title }}
    </h3>

    <div
      class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5"
    >
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/logos/oracle.svg" alt="Oracle" width="158" height="48" />
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/logos/brex.svg" alt="Brex" width="158" height="48" />
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/logos/lightico.svg" alt="lightico" width="158" height="48" />
      <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="/logos/zencity.svg" alt="Zencity" width="158" height="48" />
      <img
        class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        src="/logos/river.svg"
        alt="River"
        width="158"
        height="48"
      />
    </div>
  </div>
</template>
