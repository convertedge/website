<script setup lang="ts">
import DlWindow from "@/components/products/DlWindow.vue";
import DiDevs from "@/components/products/DiDevs.vue";
import DlSkeleton from "@/components/products/DlSkeleton.vue";

definePageMeta({ title: "API" });
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center text-gray-900">Our data in your system</h2>
    <h3 class="text-lg sm:text-2xl text-center tracking-tight text-gray-600 mt-5">A 360-degree view to billions of people with deep, actionable insights</h3>
  </div>

  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <DlWindow />
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
    <div class="flex p-px lg:col-span-4">
      <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
        <img class="h-80 object-cover object-left" src="https://tailwindui.com/plus/img/component-images/bento-02-releases.png" alt="" />
        <div class="p-10">
          <p class="mt-2 text-lg font-medium tracking-tight text-white">2B+ people</p>
          <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Every person result contains it's full record fields.</p>
        </div>
      </div>
    </div>
    <div class="flex p-px lg:col-span-2">
      <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
        <img class="h-80 object-cover" src="https://tailwindui.com/plus/img/component-images/bento-02-integrations.png" alt="" />
        <div class="p-10">
          <p class="mt-2 text-lg font-medium tracking-tight text-white">Connect your favorite tools</p>
          <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
        </div>
      </div>
    </div>
    <div class="flex p-px lg:col-span-2">
      <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
        <img class="h-80 object-cover" src="https://tailwindui.com/plus/img/component-images/bento-02-security.png" alt="" />
        <div class="p-10">
          <p class="mt-2 text-lg font-medium tracking-tight text-white">Insights</p>
          <p class="mt-2 max-w-lg text-sm/6 text-gray-400">
            The insights you want. Those you didn't know you needed and the ones you wouldn't thought are possible.
          </p>
        </div>
      </div>
    </div>
    <div class="flex p-px lg:col-span-4">
      <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
        <img class="h-80 object-cover object-left" src="https://tailwindui.com/plus/img/component-images/bento-02-performance.png" alt="" />
        <div class="p-10">
          <p class="mt-2 text-lg font-medium tracking-tight text-white">Pay per value</p>
          <p class="mt-2 max-w-lg text-sm/6 text-gray-400">
            Fixed price, pay per match, define match strictness and required fields, no upfront fee, no commitment.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-20">
    <div class="lg:pr-8 lg:pt-4">
      <div class="lg:max-w-lg space-y-2">
        <h3 class="text-3xl xl:text-4xl">Welcome to the age of intelligence</h3>
        <p class="text-gray-500 text-sm xl:text-base">
          We built a production-ready people data source, at scale and with global coverage, so you don't need to.
        </p>

        <dl class="py-4 max-w-xl space-y-8 text-base leading-7 text-gray-500 lg:max-w-none">
          <div class="flex gap-2">
            <div><UIcon name="i-heroicons-magnifying-glass" class="h-6 w-6 text-primary-500" /></div>
            <p><span class="font-semibold text-primary-500">Search</span> every paramter with advanced filtering and query operators for amazing accuracy.</p>
          </div>
          <div class="flex gap-2">
            <div><UIcon name="i-heroicons-code-bracket-square" class="h-6 w-6 text-primary-500" /></div>
            <p><span class="font-semibold text-primary-500">Simple</span> RESTful API with easy to use playground to help you get started quickly.</p>
          </div>
          <div class="flex gap-2">
            <div><UIcon name="i-heroicons-identification" class="h-6 w-6 text-primary-500" /></div>
            <p>
              <span class="font-semibold text-primary-500">No tricks</span> with multiple endpoints, one endpoint for every entity, get the whole data in a
              single request.
            </p>
          </div>
        </dl>
      </div>
    </div>

    <div
      class="max-w-none lg:absolute lg:translate-x-[50%] xl:translate-x-[60%] lg:translate-y-10 h-3/4 lg:h-full overflow-hidden ring-1 ring-purple-700 rounded-md"
    >
      <DlSkeleton selected="devs">
        <DiDevs />
      </DlSkeleton>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <p>cta</p>
  </div>
</template>
