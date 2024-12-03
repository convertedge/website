<script setup lang="ts">
const props = defineProps({
  value: {
    type: Number,
    default: 50,
  },
  step: {
    type: String,
    default: ".1",
  },
});

const width = ref(null);
const compareWidth = ref(props.value);
const compareElement = useTemplateRef("compare-template");

onMounted(() => (width.value = getContainerWidth()));
watch(props, () => (compareWidth.value = props.value));

const handleInput = (e) => {
  compareWidth.value = e.target.value;
};

const getContainerWidth = () => window.getComputedStyle(compareElement.value as any, null).getPropertyValue("width");
</script>

<template>
  <div class="relative ring-1 ring-gray-300 rounded-xl overflow-hidden" ref="compare-template">
    <div>
      <div class="relative h-full" :style="{ width: width }">
        <slot name="first"></slot>
      </div>

      <div class="handle-wrap" :style="{ left: `calc(${compareWidth + '%'} - var(--handle-line-width) / 2` }">
        <div class="handle">
          <svg
            class="absolute w-5 left-0 feather feather-chevron-left"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <svg
            class="absolute w-5 right-0 feather feather-chevron-right"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
        <span class="handle-line"></span>
      </div>

      <div class="absolute overflow-hidden h-full top-0" :style="{ width: `calc(${compareWidth + '%'})` }">
        <div class="relative w-full h-full" :style="{ width: width }">
          <slot name="second"></slot>
        </div>
      </div>
    </div>
    <input type="range" min="0" max="100" :step="step" class="compare__range" :value="compareWidth" @input="handleInput" tabindex="-1" />
  </div>
</template>

<style>
:root {
  --handle-bg: #0ea5e9;
  --handle-width: 30px;
  --handle-height: 30px;

  --handle-line-bg: #0ea5e9;
  --handle-line-width: 2px;
  --handle-line-height: 100%;

  --z-index-handle: 5;
  --z-index-handle-line: 4;
  --z-index-range-input: 6;
}

.handle-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: var(--z-index-handle);
}
.handle {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: var(--handle-bg);
  border-radius: 50%;
  width: var(--handle-width);
  height: var(--handle-height);
}

.handle-line {
  content: "";
  position: absolute;
  top: 0;
  width: var(--handle-line-width);
  height: 100%;
  background: var(--handle-line-bg);
  z-index: var(--z-index-handle-line);
  pointer-events: none;
  user-select: none;
}

.compare__range {
  position: absolute;
  cursor: ew-resize;
  left: calc(var(--handle-width) / -2);
  width: calc(100% + var(--handle-width));
  transform: translatey(-50%);
  top: calc(50%);
  z-index: var(--z-index-range-input);
  -webkit-appearance: none;
  height: var(--handle-height);
  /* debugging purposes only */
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
}
</style>
