<script setup lang="ts">
const { data } = await useAsyncData("faq", () => queryCollection("faq").first());

defineProps({
  type: {
    type: String,
    default: "open",
    validator: (value: string) => ["open", "closed"].includes(value),
  },
});

const openedFaq = ref(null);

const open = (index: string) => {
  if (openedFaq.value == index) {
    openedFaq.value = null;
  } else {
    openedFaq.value = index;
  }
};
</script>

<template>
  <div :class="[type == 'open' ? 'lg:grid lg:grid-cols-12 lg:gap-8' : '', 'mt-32']">
    <div :class="[type == 'open' ? '' : 'text-center', 'lg:col-span-5']">
      <h2 class="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">{{ data.title }}</h2>
      <p class="mt-4 text-gray-600" v-html="data.description"></p>
    </div>

    <div class="mt-8 lg:col-span-7 lg:mt-0">
      <dl v-if="type == 'open'" class="space-y-10">
        <div v-for="(item, index) of data.items" :key="index" class="">
          <dt class="font-bold">{{ item.label }}</dt>
          <dd class="mt-2 text-gray-600">{{ item.content }}</dd>
        </div>
      </dl>

      <dl v-else class="divide-y-2 divide-gray-300">
        <div v-for="(item, index) of data.items" :key="index" class="pt-4 cursor-pointer" @click="open(index)">
          <div class="flex gap-2 items-center justify-between pb-4">
            <dt class="font-bold">{{ item.label }}</dt>
            <svg
              v-if="openedFaq == index"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5 text-gray-400"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5 text-gray-400"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>

          <dd :class="[openedFaq == index ? '' : 'hidden', 'mt-2 text-gray-600']">
            {{ item.content }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
