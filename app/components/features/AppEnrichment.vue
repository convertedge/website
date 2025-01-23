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
const showAnimation = ref(false);
onMounted(() => (props.element && !alreadyListen.value ? listen() : null));
watch(props, () => (props.element && !alreadyListen.value ? listen() : null));

const listen = () => {
  alreadyListen.value = true;
  props.element?.addEventListener("mouseenter", () => {
    showAnimation.value = true;
  });
  props.element?.addEventListener("mouseleave", () => {
    showAnimation.value = false;
  });
};
</script>

<template>
  <div class="h-full py-2 bg-gray-50 overflow-hidden flex flex-col justify-between">
    <div v-for="index of 6" :key="index" class="flex items-center">
      <span v-for="number of place[index - 1]" :key="number" class="text-gray-200">•</span>
      <UBadge :label="fields[index - 1]" :class="[showAnimation ? 'animate-pulse' : '', 'whitespace-nowrap']" :size="width >= 425 ? 'sm' : 'xs'" />
      <span v-for="number of 100" :key="number" class="text-gray-200">•</span>
    </div>
  </div>
</template>

<style scoped>
.move {
  position: absolute;
  animation: linear infinite;
  animation-name: run;
  animation-duration: 5s;
}

@keyframes run {
  0% {
    left: 0;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 0;
  }
}
</style>
