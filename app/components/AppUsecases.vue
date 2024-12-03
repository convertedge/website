<script setup lang="ts">
defineProps({
  data: {
    type: Object,
  },
});

const width = ref(window?.innerWidth);

onMounted(() => {
  window.addEventListener("resize", () => (width.value = window?.innerWidth));
});
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h3 class="mb-4 text-pretty font-semibold tracking-tight text-gray-950 text-3xl md:text-4xl lg:text-5xl">{{ data.title }}</h3>

    <ClientOnly>
      <UTabs
        :items="data.items"
        :orientation="width >= 1024 ? `horizontal` : `vertical`"
        :ui="{
          wrapper: `${width >= 1024 ? 'relative space-y-0' : 'flex items-center gap-0 space-y-0'}`,
          list: {
            background: 'bg-gray-50',
            rounded: `${width >= 1024 ? 'rounded-none  rounded-t-lg' : 'rounded-none rounded-l-lg h-full'}`,
            width: `${width >= 1024 ? 'w-full' : 'w-48'}`,
            marker: { background: 'bg-gray-900' },
            tab: { active: 'text-gray-50 ' },
          },
        }"
      >
        <template #item="{ item }">
          <div v-if="item.label == 'Contact us'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'h-80 w-full bg-gray-50']">
            <p>Contact us</p>
          </div>
          <div v-else-if="item.label == 'Book a demo'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'h-80 w-full bg-gray-50']">
            <p>Book a demo</p>
          </div>
          <div v-else-if="item.label == 'Newsletters'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'h-80 w-full bg-gray-50']">
            <p>Newsletters</p>
          </div>
          <div v-else-if="item.label == 'Platform sign up'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'h-80 w-full bg-gray-50']">
            <p>Platform sign up</p>
          </div>
          <div v-else-if="item.label == 'Events registration'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'h-80 w-full bg-gray-50']">
            <p>Events registration</p>
          </div>
        </template>
      </UTabs>
    </ClientOnly>
  </div>
</template>
