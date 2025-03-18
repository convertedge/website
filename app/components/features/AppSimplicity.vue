<script setup lang="ts">
const props = defineProps({
  element: {
    type: Object,
  },
});

const alreadyListen = ref(false);
onMounted(() => (props.element && !alreadyListen.value ? listen() : null));
watch(props, () => (props.element && !alreadyListen.value ? listen() : null));

const listen = () => {
  alreadyListen.value = true;
  props.element?.addEventListener("mouseenter", () => {
    console.log("Simplicity-enter");
  });
  props.element?.addEventListener("mouseleave", () => {
    console.log("Simplicity-leave");
  });
};
</script>

<template>
  <div class="h-full bg-gray-50 overflow-hidden flex flex-col justify-between relative">
    <div class="relative grid grid-cols-12 grid-rows-12 h-full w-full">
      <div class="border-b border-r border-gray-200"></div>
      <div class="border-b border-gray-200 col-span-11"></div>
      <div class="border-r border-gray-200 row-span-10"></div>
      <div class="row-span-10 col-span-11 p-4">
        <pre class="text-xs">
&lt;script&gt;
  var script = document.createElement("script");
  var code = 'import { Convertedge } from "https://shortify.convertedge.co";
  new Convertedge(["YOUR-API-KEY"]);';
  script.appendChild(document.createTextNode(code));
  document.body.appendChild(script);
&lt;/script&gt;</pre
        >
      </div>
      <div class="border-t border-r border-gray-200"></div>
      <div class="border-t border-gray-200 col-span-11"></div>

      <span class="cross rotate-45 h-8 w-8 text-2xl font-extralight absolute top-[4.75%] left-[7%] text-gray-300"></span>
      <span class="cross rotate-45 h-8 w-8 text-2xl font-extralight absolute bottom-[2%] left-[7%] text-gray-300"></span>
    </div>

    <div class="h-full w-full absolute">
      <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" class="size-12 absolute left-[55%] bottom-[20%]">
        <g>
          <polygon fill="#8AB4F8" points="150.261818 245.516364 105.825455 202.185455 201.258182 104.730909 247.265455 149.821818"></polygon>
          <path
            d="M150.450909,53.9381818 L106.174545,8.73090909 L9.36,104.629091 C-3.12,117.109091 -3.12,137.341818 9.36,149.836364 L104.72,245.821818 L149.810909,203.64 L77.1563636,127.232727 L150.450909,53.9381818 Z"
            fill="#4285F4"
          ></path>
          <path
            d="M246.625455,105.370909 L150.625455,9.37090909 C138.130909,-3.12363636 117.869091,-3.12363636 105.374545,9.37090909 C92.88,21.8654545 92.88,42.1272727 105.374545,54.6218182 L201.374545,150.621818 C213.869091,163.116364 234.130909,163.116364 246.625455,150.621818 C259.12,138.127273 259.12,117.865455 246.625455,105.370909 Z"
            fill="#8AB4F8"
          ></path>
          <circle fill="#246FDB" cx="127.265455" cy="224.730909" r="31.2727273"></circle>
        </g>
      </svg>
      <div class="absolute arrow left-[35%] bottom-[20%]">
        <div class="curve border-2 border-gray-300 h-48 w-32"></div>
        <div
          class="point absolute before:top-[-1.7rem] before:left-[5.65rem] before:h-6 before:absolute before:border before:border-gray-300 after:top-[-2.45rem] after:left-[5.65rem] after:h-6 after:absolute after:border after:border-gray-300"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
span.cross:after {
  content: "\00d7";
}

.arrow .curve {
  border-color: transparent transparent transparent #d1d5db;
  border-radius: 230px 0 0 150px;
  transform: rotateZ(-56deg);
}

.arrow .point:before,
.arrow .point:after {
  content: "";
}

.arrow .point:before {
  transform: rotate(-120deg);
  -webkit-transform: rotate(-120deg);
  -moz-transform: rotate(-120deg);
  -ms-transform: rotate(-120deg);
}

.arrow .point:after {
  transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
}
</style>
