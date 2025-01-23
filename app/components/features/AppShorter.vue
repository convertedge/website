<script setup lang="ts">
import { VisXYContainer, VisLine, VisArea, VisAxis } from "@unovis/vue";

const props = defineProps({
  element: {
    type: Object,
  },
  width: {
    type: Number,
  },
});

const today = new Date();
const data = [
  { x: today, y: 4 },
  { x: new Date().setDate(today.getDate() + 1), y: 10 },
  { x: new Date().setDate(today.getDate() + 2), y: 19 },
  { x: new Date().setDate(today.getDate() + 3), y: 21 },
  { x: new Date().setDate(today.getDate() + 4), y: 32 },
  { x: new Date().setDate(today.getDate() + 5), y: 38 },
];

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
  <div class="h-full py-2 bg-gray-50 flex flex-col justify-center items-center relative">
    <div
      :class="[
        showAnimation ? 'motion-preset-confetti' : '',
        width >= 500 ? 'left-36' : 'left-16',
        width >= 350 ? 'gap-2' : 'flex-col',
        'flex absolute z-10 top-10 items-start',
      ]"
    >
      <p :class="[width >= 425 ? 'text-5xl' : 'text-4xl']">158</p>
      <p :class="[width >= 425 ? 'text-lg' : '', 'flex items-center gap-1 text-green-500']">
        (+271%
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          /></svg
        >)
      </p>
    </div>

    <div class="w-[90%]">
      <VisXYContainer>
        <VisArea :data="data" :x="(d) => +new Date(d.x)" :y="(d) => d.y" />
        <VisAxis type="x" :tickFormat="(value: number) => Intl.DateTimeFormat().format(value)" />
        <VisAxis type="y" />
      </VisXYContainer>
    </div>
  </div>
</template>
