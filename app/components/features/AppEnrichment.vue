<script setup lang="ts">
const fields = [
  "Name: Sarah Johnson",
  "Role: Head of IT",
  "Email: sarah@apple.com",
  "Phone: +1 (650) 770-8316",
  "Location: Los Altos, CA, US",
  "Company: Apple",
];
const place = [6, 25, 13, 2, 12, 4];

const props = defineProps({
  element: {
    type: Object,
  },
  width: {
    type: Number,
  },
});

const alreadyListen = ref(false);
onMounted(() => (props.element && !alreadyListen.value ? listen() : null));
watch(props, () => (props.element && !alreadyListen.value ? listen() : null));

const listen = () => {
  alreadyListen.value = true;
  props.element?.addEventListener("mouseenter", () => {
    console.log("Enrichment-enter");
  });
  props.element?.addEventListener("mouseleave", () => {
    console.log("Enrichment-leave");
  });
};
</script>

<template>
  <div class="h-full py-2 bg-gray-50 overflow-hidden flex flex-col justify-between">
    <div v-for="index of 6" :key="index" class="flex items-center">
      <span v-for="number of place[index - 1]" :key="number" class="text-gray-200">•</span>
      <UBadge :label="fields[index - 1]" class="whitespace-nowrap" :size="width >= 425 ? 'sm' : 'xs'" />
      <span v-for="number of 100" :key="number" class="text-gray-200">•</span>
    </div>
  </div>
</template>
