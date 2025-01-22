<script setup lang="ts">
import AppGeneral from "@/components/products/uncover/AppGeneral.vue";
import AppInterests from "@/components/products/uncover/AppInterests.vue";
import AppCloseness from "@/components/products/uncover/AppCloseness.vue";
import AppContactTime from "@/components/products/uncover/AppContactTime.vue";
import AppIceBreakers from "@/components/products/uncover/AppIceBreakers.vue";
import AppSocialActivity from "@/components/products/uncover/AppSocialActivity.vue";
</script>

<template>
  <div class="grid grid-cols-6 xl:grid-cols-3 xl:grid-rows-3 gap-2 md:gap-4 lg:gap-6">
    <div class="col-span-6 xl:col-span-2 max-h-80 rounded-md overflow-hidden border-b border-gray-300">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-identification" class="h-6 w-6 text-gray-500" />
        <h3>Really know who visites your website</h3>
      </div>
      <div class="h-full border border-gray-300 rounded-md"><AppGeneral /></div>
    </div>
    <div class="col-span-6 md:col-span-3 xl:col-span-1 max-h-80 rounded-md overflow-hidden border-b border-gray-300">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-light-bulb" class="h-6 w-6 text-gray-500" />
        <h3>Understand what important to your visitors</h3>
      </div>
      <div class="h-full border border-gray-300 rounded-md"><AppInterests /></div>
    </div>
    <div class="col-span-6 md:col-span-3 xl:col-span-1 row-span-2 max-h-full overflow-hidden border-b border-gray-300">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-sparkles" class="h-6 w-6 text-gray-500" />
        <h3>Break the ice with unique AI generated insights</h3>
      </div>
      <div class="h-full border border-gray-300 rounded-md"><AppIceBreakers /></div>
    </div>
    <div class="col-span-6 md:col-span-3 xl:col-span-1 max-h-80 rounded-md overflow-hidden border-b border-gray-300">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-clock" class="h-6 w-6 text-gray-500" />
        <h3>Find out when to contact</h3>
      </div>
      <div class="h-80 border border-gray-300 rounded-md"><AppContactTime /></div>
    </div>
    <div class="col-span-6 lg:col-span-2 xl:col-span-1 max-h-80 rounded-md overflow-hidden border-b border-gray-300">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-window" class="h-6 w-6 text-gray-500" />
        <h3>Know where your visitors hangs out</h3>
      </div>
      <div class="border border-gray-300 rounded-md"><AppSocialActivity /></div>
    </div>
    <div class="col-span-6 lg:col-span-4 xl:col-span-2 max-h-80 rounded-md overflow-hidden border-b border-gray-300">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-share" class="h-6 w-6 text-gray-500" />
        <h3>Find out how you can connect</h3>
      </div>
      <div class="border border-gray-300 rounded-md"><AppCloseness /></div>
    </div>
  </div>
</template>
