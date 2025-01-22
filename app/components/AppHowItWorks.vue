<script setup lang="ts">
const shortifyInputs = [
  { tag: "input", selector_name: "id", selector_value: "first-name", error: "field" },
  { tag: "input", selector_name: "id", selector_value: "last-name", error: "field" },
  { tag: "input", selector_name: "id", selector_value: "company", error: "field" },
  { tag: "input", selector_name: "id", selector_value: "role", error: "field" },
  { tag: "input", selector_name: "id", selector_value: "linkedin-url", error: "field" },
];

defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <div class="p-4 bg-gray-100 rounded-md">
    <h2 class="pb-2 2xl:pb-4 text-center text-xl sm:text-2xl lg:text-3xl font-medium text-gray-950">{{ title }}</h2>

    <div class="flex flex-col 2xl:grid 2xl:grid-cols-3 gap-2 2xl:gap-4">
      <div class="sm:flex 2xl:block space-y-5">
        <div class="sm:w-2/5 2xl:w-full pt-4 sm:pt-8 2xl:pt-0">
          <h3 class="font-medium sm:text-lg text-gray-800">Step 1</h3>
          <p class="text-gray-600 text-sm">Paste the URL where the form is located</p>
        </div>

        <div class="bg-gray-50 ring-1 ring-gray-200 rounded-md p-2 max-w-96 sm:min-w-96 2xl:max-w-96 mx-auto h-fit">
          <UInput required name="domain" icon="i-heroicons-globe-alt-solid" placeholder="https://apple.com/book-demo" class="mb-2" />
          <div class="flex justify-end">
            <UButton label="Search form" />
          </div>
        </div>
      </div>

      <div class="sm:flex 2xl:block space-y-5">
        <div class="sm:w-2/5 2xl:w-full pt-4 sm:pt-8 2xl:pt-0">
          <h3 class="font-medium sm:text-lg text-gray-800">Step 2</h3>
          <p class="text-gray-600 text-sm">Map which fields you want to Shorten and which you want to enrich</p>
        </div>

        <div class="space-y-2 bg-gray-50 ring-1 ring-gray-200 p-2 rounded-md max-w-96 mx-auto">
          <span class="flex gap-6" v-for="(item, index) of shortifyInputs" :key="index">
            <p class="min-w-20 sm:min-w-24 text-sm sm:text-base">{{ item.selector_value }}:</p>
            <USelectMenu :options="['', 'shortify', 'enrich']" class="w-24">
              <template #option="{ option }">
                <span class="min-h-4">{{ option }}</span>
              </template>
            </USelectMenu>
            <USelectMenu
              :options="['', 'first_name', 'last_name', 'title', 'role', 'company_name', 'country', 'linkedin_url', 'x_url', 'facebook_url']"
              class="w-32"
            >
              <template #option="{ option }">
                <span class="min-h-4">{{ option }}</span>
              </template>
            </USelectMenu>
          </span>
          <div class="flex justify-end">
            <UButton label="Next" />
          </div>
        </div>
      </div>

      <div class="sm:flex 2xl:block space-y-5">
        <div class="sm:w-2/5 2xl:w-full pt-4 sm:pt-8 2xl:pt-0">
          <h3 class="font-medium sm:text-lg text-gray-800">Step 3</h3>
          <p class="text-gray-600 text-sm">Install the script tag on Google Tag Mangaer</p>
        </div>

        <div class="bg-gray-50 ring-1 ring-gray-200 p-2 rounded-md max-w-96 mx-auto">
          <pre class="p-2 overflow-x-scroll text-xs sm:text-sm">
&lt;script&gt;
  var script = document.createElement("script");
  script.async = true;
  script.type = "module";
  var code = 'import { Convertedge } from "https://shortify.convertedge.co"; new Convertedge(["YOUR-API-KEY"]);';
  script.appendChild(document.createTextNode(code));
  document.body.appendChild(script);
&lt;/script&gt;</pre
          >
          <div class="flex justify-end">
            <UButton label="Finish" color="green" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
