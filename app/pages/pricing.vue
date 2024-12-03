<script setup lang="ts">
const { data } = await useAsyncData("pricing", () => queryContent("/pricing").findOne());
const isYearly = ref(false);
</script>

<template>
  <p>pricing</p>
</template>
