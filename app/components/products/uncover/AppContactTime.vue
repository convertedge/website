<script setup lang="ts">
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hours = ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22"];
const matrix = [
  [0, 0, 2, 2, 3, 4, 3, 2, 2, 1, 0, 0],
  [0, 0, 2, 4, 8, 9, 7, 5, 3, 3, 1, 0],
  [0, 0, 2, 4, 8, 9, 7, 5, 3, 3, 1, 0],
  [0, 0, 2, 4, 8, 9, 7, 5, 3, 3, 1, 0],
  [0, 0, 2, 4, 4, 5, 4, 3, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 5, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 5, 1],
];

const colors = [
  "bg-primary-100",
  "bg-primary-200",
  "bg-primary-300",
  "bg-primary-400",
  "bg-primary-500",
  "bg-primary-600",
  "bg-primary-700",
  "bg-primary-800",
  "bg-primary-900",
  "bg-primary-950",
];
</script>

<template>
  <div class="group bg-gray-100 rounded-md p-2 h-full">
    <div class="h-full grid grid-rows-8 gap-2 mt-2">
      <div v-for="(day, dayIndex) of matrix" :key="dayIndex" class="grid grid-cols-12 h-full w-full">
        <span class="text-sm text-gray-500 flex justify-center items-center">{{ days[dayIndex] }}</span>

        <div class="col-span-11 w-full grid grid-cols-12 gap-2">
          <div v-for="(hour, hourIndex) of day" :key="hourIndex" :class="[colors[hour], hour == 9 ? 'group-hover:animate-pulse' : '', 'rounded-md']">
            <span class="sr-only">{{ hour }}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-2">
        <span></span>

        <div class="col-span-11 grid grid-cols-12 gap-2">
          <span v-for="(hour, index) of hours" :key="index" class="text-sm text-gray-500 flex justify-center items-center">
            {{ hour }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
