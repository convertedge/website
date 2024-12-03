<script setup lang="ts">
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <h3 class="mb-4 text-pretty font-semibold tracking-tight text-gray-950 text-3xl md:text-4xl lg:text-5xl w-4/5">
    {{ data.title }}
  </h3>

  <div class="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
    <div v-for="(item, index) of data.items" :key="index" :class="[index < 2 ? 'lg:col-span-3' : 'lg:col-span-2', 'relative']">
      <div
        :class="[
          index == 0 ? 'max-lg:rounded-t-3xl lg:rounded-tl-3xl' : '',
          index == 1 ? 'lg:rounded-tr-3xl' : '',
          index == 2 ? 'lg:rounded-bl-3xl' : '',
          index == 4 ? 'max-lg:rounded-b-3xl lg:rounded-br-3xl' : '',
          'relative flex h-full flex-col overflow-hidden rounded-md ring-1 ring-gray-200',
        ]"
      >
        <img class="h-80 object-cover object-left" :src="item.image" alt="" />
        <div class="p-10 pt-4">
          <p class="text-lg font-medium text-gray-950">{{ item.title }}</p>
          <p class="mt-2 text-sm text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
