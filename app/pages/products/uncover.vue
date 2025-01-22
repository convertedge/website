<script setup lang="ts">
import AppSkeleton from "@/components/products/DlSkeleton.vue";
import AppVisitors from "@/components/products/uncover/AppVisitors.vue";
import AppBentoGrid from "@/components/products/uncover/AppBentoGrid.vue";

definePageMeta({ title: "API" });
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center text-gray-900">Really know your visitors</h2>
    <h3 class="text-lg sm:text-2xl text-center tracking-tight text-gray-600 mt-5">
      Take actions based on their journey, what's important to them, and who they are
    </h3>
  </div>

  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <AppSkeleton>
      <AppVisitors />
    </AppSkeleton>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <AppBentoGrid />
  </div>
</template>
