<script setup lang="ts">
const { data } = await useAsyncData("pricing", () => queryContent("/pricing").findOne());
const isYearly = ref(false);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <p>pricing</p>
  </div>
</template>
