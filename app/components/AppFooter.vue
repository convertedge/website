<script setup lang="ts">
const links = [
  {
    label: "Products",
    children: [
      // { label: "Shortify", to: "/products/shortify", target: "_self" },
      // { label: "Uncover", to: "/products/uncover", target: "_self" },
      // { label: "Meetprep", to: "/products/extension", target: "_blank" },
      // { label: "API", to: "/products/api", target: "_self" },
    ],
  },
  {
    label: "Resources",
    children: [{ label: "Help center", to: "/help", target: "_self" }],
  },
  {
    label: "Company",
    children: [
      { label: "Pricing", to: "/pricing", target: "_self" },
      { label: "Terms of service", to: "/legal/terms", target: "_self" },
      { label: "Privacy policy", to: "/legal/privacy", target: "_self" },
    ],
  },
];

const toast = useToast();

const email = ref("");
const loading = ref(false);

function onSubmit() {
  loading.value = true;

  setTimeout(() => {
    toast.add({
      title: "Subscribed!",
      description: "You've been subscribed to our changelog.",
    });

    loading.value = false;
  }, 1000);
}
</script>

<template>
  <footer class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 pt-8">
    <div class="grid grid-cols-2 lg:grid-cols-3 py-8 lg:py-12">
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 col-span-2">
        <div v-for="(item, index) of links" :key="index">
          <h3 class="text-sm font-semibold text-gray-900 mb-2">{{ item.label }}</h3>
          <ul class="space-y-1">
            <li v-for="(subitme, subindex) of item.children" :key="subindex">
              <UButton :to="subitme.to" variant="link" color="gray" :target="subitme.target" :ui="{ padding: { sm: '' } }">
                {{ subitme.label }}
                <UIcon name="i-heroicons-arrow-up-right" v-if="subitme.target == '_blank'" class="h-3 w-3" />
              </UButton>
            </li>
          </ul>
        </div>
      </div>

      <form @submit.prevent="onSubmit" class="mt-4 col-span-2 lg:mt-0 sm:col-span-1">
        <p class="mb-1 font-medium text-sm text-gray-700">Subscribe to our changelog</p>
        <UInput
          v-model="email"
          type="email"
          placeholder="Enter your email"
          :ui="{ icon: { trailing: { pointer: '' } } }"
          required
          size="xl"
          autocomplete="email"
        >
          <template #trailing>
            <UButton type="submit" size="xs" color="primary" :label="loading ? 'Subscribing' : 'Subscribe'" :loading="loading" />
          </template>
        </UInput>
      </form>
    </div>

    <div class="flex justify-between items-center">
      <p class="text-gray-500 text-sm">Copyright © {{ new Date().getFullYear() }}. All rights reserved.</p>

      <div class="flex gap-2 items-center">
        <!-- <UButton to="https://github.com/nuxt-ui-pro/saas" target="_blank" icon="i-simple-icons-x" aria-label="X" color="gray" variant="ghost" />
        <UButton to="https://github.com/nuxt-ui-pro/saas" target="_blank" icon="i-simple-icons-linkedin" aria-label="LinkedIn" color="gray" variant="ghost" />
        <UButton to="https://github.com/nuxt-ui-pro/saas" target="_blank" icon="i-simple-icons-youtube" aria-label="YouTube" color="gray" variant="ghost" /> -->
        <UButton to="https://github.com/convertedge" target="_blank" icon="i-simple-icons-github" aria-label="GitHub" color="gray" variant="ghost" />
      </div>
    </div>
  </footer>
</template>
