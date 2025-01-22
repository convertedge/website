<script setup lang="ts">
const { data } = await useAsyncData("pricing", () => queryContent("/pricing").findOne());
const { data: faqData } = await useAsyncData("faq", () => queryContent("/faq").findOne());

const submissions = ref(100);

const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });

const total = computed(() => {
  if (submissions.value < 1000) {
    return submissions.value * 0.5;
  } else {
    return "Contact us";
  }
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <h1 class="text-center text-5xl font-semibold tracking-tight sm:text-6xl mb-8">{{ data.title }}</h1>

    <div class="grid lg:grid-cols-12 max-w-screen-2xl rounded-md ring-1 ring-gray-300 mx-auto">
      <div class="p-8 lg:col-span-9">
        <div class="flex flex-col gap-4">
          <div class="sm:flex items-center gap-4">
            <p class="text-gray-500">Submissions</p>
            <span class="flex items-center gap-4 w-full">
              <URange size="sm" :min="0" :step="1" :max="1000" v-model="submissions" />
              <UInput v-model="submissions" placeholder="Number of monthly req" type="number"> </UInput>
            </span>
          </div>
        </div>

        <div class="mt-8 sm:mt-10 flex items-center gap-x-4">
          <h4 class="text-sm font-semibold text-primary-500">{{ data.perks.title }}</h4>
          <div class="h-px flex-auto bg-gray-300"></div>
        </div>
        <ul role="list" class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
          <li class="flex gap-x-3" v-for="(item, index) of data.perks.items" :key="index">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-6 text-primary-500">
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
              />
            </svg>
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="lg:col-span-3 rounded-r-md bg-gray-100 flex flex-col justify-around items-center gap-4 px-8 space-y-4 lg:space-y-0 py-8">
        <div>
          <p class="flex items-end justify-center gap-x-2">
            <span class="text-4xl font-bold tracking-tight">{{ total == "Contact us" ? total : `${formatter.format(Number(total))}` }}</span>
          </p>
          <p class="text-gray-500 text-sm">$0.5 pre request</p>
        </div>
        <UButton label="Start now" to="https://app.convertedge.co/auth/register" target="_blank" block />
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-12 lg:gap-8 mt-32">
      <div class="lg:col-span-5">
        <h2 class="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">{{ faqData.faq.title }}</h2>
        <p class="mt-4 text-gray-600" v-html="faqData.faq.description"></p>
      </div>
      <div class="mt-10 lg:col-span-7 lg:mt-0">
        <dl class="space-y-10">
          <div v-for="(item, index) of faqData.faq.items" :key="index">
            <dt class="font-semibold">{{ item.label }}</dt>
            <dd class="mt-2 text-gray-600">{{ item.content }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
