<script setup lang="ts">
const width = ref(window?.innerWidth);
const loading = ref(false);
const showError = ref(false);
const showSuccess = ref(false);
const showFields = ref("first_name,last_name,company_name,linkedin_url");
onMounted(() => {
  window.addEventListener("resize", () => (width.value = window?.innerWidth));
});

const localState = reactive({
  email: "",
  first_name: "",
  last_name: "",
  department: "",
  company_name: "",
  linkedin_url: "",
});

function debounce(func: any, timeout = 400) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

watch(
  () => localState.email,
  debounce(async () => {
    localState.email = localState.email.trim();
    const isEmail = localState.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (!isEmail) {
      // is not an email yet.
      return;
    }

    loading.value = true;
    if (localState.email != "") {
      await new Promise((res) => setTimeout(res, 1000));
    }

    if (["", "john@example.com"].includes(localState.email)) {
      showFields.value = "first_name,last_name,company_name,linkedin_url";
      localState.first_name = "john";
      localState.last_name = "doe";
      localState.company_name = "apple";
      localState.linkedin_url = "https://linkedin.com/in/johndoe";
    } else if ("alice@example.com" == localState.email) {
      showFields.value = "first_name,last_name,company_name";
      localState.first_name = "alice";
      localState.last_name = "doe";
      localState.company_name = "apple";
    } else {
      localState.first_name = "";
      localState.last_name = "";
      localState.company_name = "";
      localState.linkedin_url = "";
      showFields.value = "";
    }
    loading.value = false;
  })
);

const submit = () => {
  for (const value of Object.values(localState)) {
    if (!value) {
      showError.value = true;
      return;
    }
  }

  localState.department = localState.department.toLowerCase();
  showSuccess.value = true;
};

const reset = () => {
  showError.value = false;
  localState.email = "";
  localState.first_name = "";
  localState.last_name = "";
  localState.company_name = "";
  localState.linkedin_url = "";
  localState.department = "";
  showFields.value = "first_name,last_name,company_name,linkedin_url";
  showSuccess.value = false;
};
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="mb-8">
      <h2 class="text-4xl mb-2">Welcome to our playground</h2>
      <p class="text-gray-500">
        Here you can test a live form and see in action how the fields are closed by default, but when you type an email we don't know (try it out, type your
        email) we open the fields, and when you type an email we know (try <b>john@example.com</b>) we close them.<br /><br />
        You can also try an email we only know his first_name, last_name, and company (without his linkedin_url) and see how we open just that field (use
        <b>alice@example.com</b>).
      </p>
    </div>

    <form class="bg-gray-50 ring-1 ring-gray-200 p-2 rounded-md w-9/10 sm:w-4/5 md:w-1/2 mx-auto space-y-2" @submit.prevent="submit" v-if="!showSuccess">
      <UFormField label="Email" required>
        <UInput placeholder="you@example.com" :size="width >= 640 ? 'md' : 'sm'" v-model="localState.email" class="w-full">
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
      </UFormField>

      <div class="flex gap-2">
        <UFormField
          label="First name"
          required
          :class="[!showFields.includes('first_name') ? '' : 'hidden', 'w-1/2 motion-opacity-in-0 -motion-translate-y-in-25']"
        >
          <UInput placeholder="John" :size="width >= 640 ? 'md' : 'sm'" v-model="localState.first_name" class="w-full" />
        </UFormField>

        <UFormField
          label="Last name"
          required
          :class="[!showFields.includes('last_name') ? '' : 'hidden', 'w-1/2 motion-opacity-in-0 -motion-translate-y-in-25']"
        >
          <UInput placeholder="Doe" :size="width >= 640 ? 'md' : 'sm'" v-model="localState.last_name" class="w-full" />
        </UFormField>
      </div>

      <UFormField label="Department" required>
        <USelectMenu
          v-model="localState.department"
          :search-input="false"
          :items="['Engineering', 'Marketing', 'HR', 'Sales', 'IT', 'Finance', 'Customer Success']"
          class="w-full"
        >
          <template #trailing>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </template>
        </USelectMenu>
      </UFormField>

      <UFormField label="Company" required :class="[!showFields.includes('company_name') ? '' : 'hidden', 'motion-opacity-in-0 -motion-translate-y-in-25']">
        <UInput placeholder="Apple" :size="width >= 640 ? 'md' : 'sm'" v-model="localState.company_name" class="w-full"
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
      </UFormField>

      <UFormField label="LinkedIn" required :class="[!showFields.includes('linkedin_url') ? '' : 'hidden', 'motion-opacity-in-0 -motion-translate-y-in-25']">
        <UInput placeholder="https://linkedin.com/company/apple" :size="width >= 640 ? 'md' : 'sm'" v-model="localState.linkedin_url" class="w-full">
          <template #leading>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4 sm:size-5 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </template>
        </UInput>
      </UFormField>

      <UAlert title="You missing some fields" color="error" variant="solid" v-if="showError"
        ><template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </template>
      </UAlert>

      <div class="flex justify-end">
        <UButton label="Book a demo" :size="width >= 640 ? 'md' : 'sm'" type="submit" />
      </div>
    </form>

    <div v-else class="bg-gray-50 ring-1 ring-gray-200 p-2 rounded-md w-9/10 sm:w-4/5 md:w-1/2 mx-auto space-y-2 overflow-x-scroll">
      <div class="flex justify-between items-center gap-4">
        <p class="text-lg font-semibold">Data submitted:</p>

        <UButton label="reset" @click="reset" />
      </div>

      <pre>{{ localState }}</pre>
    </div>
  </div>
</template>
