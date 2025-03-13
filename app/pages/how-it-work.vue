<script setup lang="ts">
const shortifyInputs = [
  { tag: "input", selector_name: "id", selector_value: "first-name", error: "field" },
  { tag: "input", selector_name: "id", selector_value: "last-name", error: "field" },
  { tag: "input", selector_name: "id", selector_value: "company", error: "field" },
  { tag: "input", selector_name: "id", selector_value: "linkedin-url", error: "field" },
];

const width = ref(window?.innerWidth);
const loading = ref(false);
const email = ref();
const showFields = ref(false);
onMounted(() => {
  window.addEventListener("resize", () => (width.value = window?.innerWidth));
});

function debounce(func: any, timeout = 700) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

watch(
  email,
  debounce(async () => {
    loading.value = true;
    if (email.value != "") {
      await new Promise((res) => setTimeout(res, 1000));
    }

    if (!["", "john@example.com"].includes(email.value)) {
      showFields.value = true;
    } else {
      showFields.value = false;
    }
    loading.value = false;
  })
);
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
    <div class="flex flex-col space-y-5">
      <div class="flex flex-col md:flex-row items-center justify-center md:gap-4">
        <div class="w-9/10 sm:w-4/5 md:w-1/2 mb-2 md:mb-0">
          <h3 class="font-medium sm:text-lg text-gray-800">Step 1</h3>
          <p class="text-gray-600 text-sm">Paste the URL where the form is located</p>
        </div>

        <div class="bg-gray-50 ring-1 ring-gray-200 rounded-md p-2 w-9/10 sm:w-4/5 md:w-1/2 mx-auto">
          <UInput required name="domain" icon="i-heroicons-globe-alt-solid" placeholder="https://apple.com/book-demo" class="mb-2" />
          <div class="flex justify-end">
            <UButton label="Search form" />
          </div>
        </div>
      </div>

      <div class="mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" class="size-28">
          <path
            d="m58.73 31.676c-1.4961-0.41016-3.1055-0.17578-4.5898 0.20312-2.0273 0.51562-3.9141 1.4844-5.5391 2.7969-1.0547 0.85156-1.957 1.8398-2.7578 2.9141-0.51562-3.0586-0.59375-6.2227-0.54297-9.2852 0.14062-7.9961 1.1719-15.996 2.6523-23.848 0.23047-1.2148-3.0117-0.6875-3.2188 0.40625-1.4609 7.75-2.4766 15.637-2.6484 23.531-0.09375 4.2539 0.027343 8.6445 1.1211 12.781 0.058594 0.21484 0.11719 0.42969 0.18359 0.64844-1.1758 2.6602-1.9375 5.543-2.4648 8.2852-2.3125 12.051-1.25 24.789 0.24219 36.867 0.058593 0.46094 0.12891 0.92188 0.1875 1.3867-1.5117-2.0625-5.3984-7.3555-5.8281-7.9414-0.91016-1.2422-3.9609 0.058594-2.9375 1.4531 2.9609 4.0312 9.7383 13.27 10.172 13.855 0.66016 0.90234 2.668 0.57031 3.0156-0.50781 1.5547-4.8164 5.1172-15.836 5.3398-16.527 0.58594-1.8125-2.6289-1.8828-3.0977-0.43359-1.1094 3.4297-2.2148 6.8594-3.3242 10.289-1.5078-11.086-2.4844-22.43-1.3203-33.559 0.32422-3.0898 0.80859-6.3438 1.7148-9.4453 1.1719 1.7266 2.832 2.9883 5.1875 3.1406 5.6758 0.36328 12.062-4.3438 12.562-10.145 0.25781-2.9102-1.1055-6.0469-4.1094-6.8672zm0.14062 10.109c-1.125 2.4258-3.4453 4.4766-6.1133 5.0117-3.3438 0.66797-5.2109-2.8828-6.0547-5.5508 0.63672-1.3398 1.3828-2.6172 2.2852-3.7891 0.96875-1.2617 2.1953-2.4219 3.6211-3.1953 1.3828-0.75 3.3359-1.4414 4.7969-0.52344 2.6641 1.668 2.6406 5.5078 1.4648 8.0469zm7.8555 0.70703c-0.25 0.80469-2.5234 1.1016-2.2617 0.25781 0.58984-1.8906 1.0078-3.9023 0.83984-5.8945-0.23047-2.7578-1.6719-5.3633-4.168-6.6758-0.17969-0.09375-0.35938-0.17188-0.54297-0.25781-0.24219-0.10938-0.003906-0.003906-0.003906-0.007813-0.46094-0.15234-0.58984-0.49609-0.23047-0.85937 0.35156-0.36328 1.1055-0.58984 1.5938-0.42578 0.39453 0.12891 0.77344 0.30469 1.1328 0.50781 1.5977 0.89453 2.8672 2.2656 3.6445 3.9219 1.3906 2.9492 0.93359 6.4219-0.003907 9.4336zm-32.043 23.09c-0.42578-5.9414 0.28125-12.41 2.5-17.988 0.25-0.63281 2.4336-0.86328 2.2344-0.35938-2.1914 5.5078-2.9023 11.875-2.4805 17.742 0.050781 0.70313-2.2188 1.1211-2.2539 0.60547z"
          />
        </svg>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center md:gap-4">
        <div class="w-9/10 sm:w-4/5 md:w-1/2 mb-2 md:mb-0">
          <h3 class="font-medium sm:text-lg text-gray-800">Step 2</h3>
          <p class="text-gray-600 text-sm">Map which fields you want to Shorten and which you want to enrich</p>
        </div>

        <div class="space-y-2 bg-gray-50 ring-1 ring-gray-200 p-2 rounded-md w-9/10 sm:w-4/5 md:w-1/2 mx-auto">
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

      <div class="mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" class="size-28">
          <path
            d="m58.73 31.676c-1.4961-0.41016-3.1055-0.17578-4.5898 0.20312-2.0273 0.51562-3.9141 1.4844-5.5391 2.7969-1.0547 0.85156-1.957 1.8398-2.7578 2.9141-0.51562-3.0586-0.59375-6.2227-0.54297-9.2852 0.14062-7.9961 1.1719-15.996 2.6523-23.848 0.23047-1.2148-3.0117-0.6875-3.2188 0.40625-1.4609 7.75-2.4766 15.637-2.6484 23.531-0.09375 4.2539 0.027343 8.6445 1.1211 12.781 0.058594 0.21484 0.11719 0.42969 0.18359 0.64844-1.1758 2.6602-1.9375 5.543-2.4648 8.2852-2.3125 12.051-1.25 24.789 0.24219 36.867 0.058593 0.46094 0.12891 0.92188 0.1875 1.3867-1.5117-2.0625-5.3984-7.3555-5.8281-7.9414-0.91016-1.2422-3.9609 0.058594-2.9375 1.4531 2.9609 4.0312 9.7383 13.27 10.172 13.855 0.66016 0.90234 2.668 0.57031 3.0156-0.50781 1.5547-4.8164 5.1172-15.836 5.3398-16.527 0.58594-1.8125-2.6289-1.8828-3.0977-0.43359-1.1094 3.4297-2.2148 6.8594-3.3242 10.289-1.5078-11.086-2.4844-22.43-1.3203-33.559 0.32422-3.0898 0.80859-6.3438 1.7148-9.4453 1.1719 1.7266 2.832 2.9883 5.1875 3.1406 5.6758 0.36328 12.062-4.3438 12.562-10.145 0.25781-2.9102-1.1055-6.0469-4.1094-6.8672zm0.14062 10.109c-1.125 2.4258-3.4453 4.4766-6.1133 5.0117-3.3438 0.66797-5.2109-2.8828-6.0547-5.5508 0.63672-1.3398 1.3828-2.6172 2.2852-3.7891 0.96875-1.2617 2.1953-2.4219 3.6211-3.1953 1.3828-0.75 3.3359-1.4414 4.7969-0.52344 2.6641 1.668 2.6406 5.5078 1.4648 8.0469zm7.8555 0.70703c-0.25 0.80469-2.5234 1.1016-2.2617 0.25781 0.58984-1.8906 1.0078-3.9023 0.83984-5.8945-0.23047-2.7578-1.6719-5.3633-4.168-6.6758-0.17969-0.09375-0.35938-0.17188-0.54297-0.25781-0.24219-0.10938-0.003906-0.003906-0.003906-0.007813-0.46094-0.15234-0.58984-0.49609-0.23047-0.85937 0.35156-0.36328 1.1055-0.58984 1.5938-0.42578 0.39453 0.12891 0.77344 0.30469 1.1328 0.50781 1.5977 0.89453 2.8672 2.2656 3.6445 3.9219 1.3906 2.9492 0.93359 6.4219-0.003907 9.4336zm-32.043 23.09c-0.42578-5.9414 0.28125-12.41 2.5-17.988 0.25-0.63281 2.4336-0.86328 2.2344-0.35938-2.1914 5.5078-2.9023 11.875-2.4805 17.742 0.050781 0.70313-2.2188 1.1211-2.2539 0.60547z"
          />
        </svg>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center md:gap-4">
        <div class="w-9/10 sm:w-4/5 md:w-1/2 mb-2 md:mb-0">
          <h3 class="font-medium sm:text-lg text-gray-800">Step 3</h3>
          <p class="text-gray-600 text-sm">Install the script tag on Google Tag Mangaer</p>
        </div>

        <div class="bg-gray-50 ring-1 ring-gray-200 p-2 rounded-md w-9/10 sm:w-4/5 md:w-1/2 mx-auto">
          <pre class="p-2 overflow-x-scroll text-xs sm:text-sm max-w-96">
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

      <div class="mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" class="size-28">
          <path
            d="m58.73 31.676c-1.4961-0.41016-3.1055-0.17578-4.5898 0.20312-2.0273 0.51562-3.9141 1.4844-5.5391 2.7969-1.0547 0.85156-1.957 1.8398-2.7578 2.9141-0.51562-3.0586-0.59375-6.2227-0.54297-9.2852 0.14062-7.9961 1.1719-15.996 2.6523-23.848 0.23047-1.2148-3.0117-0.6875-3.2188 0.40625-1.4609 7.75-2.4766 15.637-2.6484 23.531-0.09375 4.2539 0.027343 8.6445 1.1211 12.781 0.058594 0.21484 0.11719 0.42969 0.18359 0.64844-1.1758 2.6602-1.9375 5.543-2.4648 8.2852-2.3125 12.051-1.25 24.789 0.24219 36.867 0.058593 0.46094 0.12891 0.92188 0.1875 1.3867-1.5117-2.0625-5.3984-7.3555-5.8281-7.9414-0.91016-1.2422-3.9609 0.058594-2.9375 1.4531 2.9609 4.0312 9.7383 13.27 10.172 13.855 0.66016 0.90234 2.668 0.57031 3.0156-0.50781 1.5547-4.8164 5.1172-15.836 5.3398-16.527 0.58594-1.8125-2.6289-1.8828-3.0977-0.43359-1.1094 3.4297-2.2148 6.8594-3.3242 10.289-1.5078-11.086-2.4844-22.43-1.3203-33.559 0.32422-3.0898 0.80859-6.3438 1.7148-9.4453 1.1719 1.7266 2.832 2.9883 5.1875 3.1406 5.6758 0.36328 12.062-4.3438 12.562-10.145 0.25781-2.9102-1.1055-6.0469-4.1094-6.8672zm0.14062 10.109c-1.125 2.4258-3.4453 4.4766-6.1133 5.0117-3.3438 0.66797-5.2109-2.8828-6.0547-5.5508 0.63672-1.3398 1.3828-2.6172 2.2852-3.7891 0.96875-1.2617 2.1953-2.4219 3.6211-3.1953 1.3828-0.75 3.3359-1.4414 4.7969-0.52344 2.6641 1.668 2.6406 5.5078 1.4648 8.0469zm7.8555 0.70703c-0.25 0.80469-2.5234 1.1016-2.2617 0.25781 0.58984-1.8906 1.0078-3.9023 0.83984-5.8945-0.23047-2.7578-1.6719-5.3633-4.168-6.6758-0.17969-0.09375-0.35938-0.17188-0.54297-0.25781-0.24219-0.10938-0.003906-0.003906-0.003906-0.007813-0.46094-0.15234-0.58984-0.49609-0.23047-0.85937 0.35156-0.36328 1.1055-0.58984 1.5938-0.42578 0.39453 0.12891 0.77344 0.30469 1.1328 0.50781 1.5977 0.89453 2.8672 2.2656 3.6445 3.9219 1.3906 2.9492 0.93359 6.4219-0.003907 9.4336zm-32.043 23.09c-0.42578-5.9414 0.28125-12.41 2.5-17.988 0.25-0.63281 2.4336-0.86328 2.2344-0.35938-2.1914 5.5078-2.9023 11.875-2.4805 17.742 0.050781 0.70313-2.2188 1.1211-2.2539 0.60547z"
          />
        </svg>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center md:gap-4">
        <div class="w-9/10 sm:w-4/5 md:w-1/2 mb-2 md:mb-0">
          <h3 class="font-medium sm:text-lg text-gray-800">Step 4</h3>
          <p class="text-gray-600 text-sm">
            🎉 Your form is shorten! 🎉<br />Test it out: john@example.com will be shorten, anything else will not and the form will open up.
          </p>
        </div>

        <div class="bg-gray-50 ring-1 ring-gray-200 p-2 rounded-md w-9/10 sm:w-4/5 md:w-1/2 mx-auto space-y-2">
          <UFormGroup label="Email" required>
            <UInput placeholder="you@example.com" :size="width >= 640 ? 'sm' : 'xs'" v-model="email">
              <template #leading>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-gray-500">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </template>

              <template #trailing>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  :class="[loading ? '' : 'hidden', 'size-4 animate-spin']"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </template>
            </UInput>
          </UFormGroup>

          <div :class="[showFields ? '' : 'hidden', 'flex gap-2']">
            <UFormGroup label="First name" required class="w-1/2">
              <UInput placeholder="John" :size="width >= 640 ? 'sm' : 'xs'" />
            </UFormGroup>

            <UFormGroup label="Last name" required class="w-1/2">
              <UInput placeholder="Doe" :size="width >= 640 ? 'sm' : 'xs'" />
            </UFormGroup>
          </div>

          <UFormGroup label="Company" required :class="[showFields ? '' : 'hidden']">
            <UInput placeholder="Apple" :size="width >= 640 ? 'sm' : 'xs'"
              ><template #leading>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-gray-500">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </template>
            </UInput>
          </UFormGroup>

          <UFormGroup label="LinkedIn" required :class="[showFields ? '' : 'hidden']">
            <UInput placeholder="https://linkedin.com/company/apple" :size="width >= 640 ? 'sm' : 'xs'">
              <template #leading>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </template>
            </UInput>
          </UFormGroup>

          <div class="flex justify-end">
            <UButton label="Book a demo" :size="width >= 640 ? 'sm' : 'xs'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
