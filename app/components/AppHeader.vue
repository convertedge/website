<script setup lang="ts">
const links = [
  // {
  //   label: "Products",
  //   children: [
  //     { label: "Shortify", to: "/products/shortify", icon: "i-heroicons-table-cells", description: "Shorten & enrich any form" },
  //     { label: "Uncover", to: "/products/uncover", icon: "i-heroicons-identification", description: "Identify anon visitors and take actions" },
  //     { label: "Meetprep", to: "/products/extension", icon: "i-heroicons-window", description: "Know who you meet and win them" },
  //     { label: "API", to: "/products/api", icon: "i-heroicons-code-bracket", description: "Intergrate our data to your system" },
  //   ],
  // },
  { label: "Pricing", to: "/pricing", children: [] },
  { label: "How it works", to: "/how-it-works", children: [] },
  { label: "Playground", to: "/playground-shortify", children: [] },
];

const route = useRoute();
const mobile = ref(false);
let currentPath = ref(route.path.split("/")?.[1]);
watch(
  () => route.path,
  () => (currentPath.value = route.path.split("/")?.[1])
);

const resetNav = () => {
  const allNavLinks = document.getElementsByClassName("nav-link");
  for (const navLink of allNavLinks) {
    navLink.classList.remove("text-slate-400");
  }
  mobile.value = false;
};
</script>

<template>
  <header class="sticky top-0 w-full bg-background/75 backdrop-blur z-10 border-b border-gray-100">
    <nav class="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 2xl:px-0">
      <div class="flex lg:flex-1 text-xl font-bold">
        <a href="/" class="flex items-center gap-2">
          <UIcon name="i-heroicons-cube-transparent" class="w-7 h-7" />
          Convertedge
        </a>
      </div>
      <div class="flex lg:hidden">
        <UButton icon="i-heroicons-bars-3" size="sm" color="gray" square variant="ghost" @click="mobile = !mobile" />
      </div>
      <div class="hidden lg:flex lg:gap-x-10 gap-4 py-2 px-4">
        <span v-for="(link, index) of links">
          <ULink
            v-if="!link.children.length"
            :key="index"
            :to="link.to"
            :class="[link.to == `/${currentPath}` ? 'text-primary-500' : 'text-gray-900 hover:text-primary-500', 'font-medium']"
            @click="resetNav"
          >
            <p>{{ link.label }}</p>
          </ULink>

          <UPopover mode="hover" v-else class="group">
            <p class="flex gap-1 items-center font-medium text-gray-900 group-hover:text-primary-500">
              {{ link.label }}<UIcon name="i-heroicons-chevron-down-20-solid" />
            </p>

            <template #panel>
              <ul class="p-4">
                <li v-for="(item, index) of link.children" :key="index" class="p-2 hover:bg-gray-100 text-gray-950 rounded-lg">
                  <a :href="item.to" class="flex items-center gap-4">
                    <UIcon :name="item.icon" class="h-6 w-6 text-gray-700" />
                    <div>
                      <p>{{ item.label }}</p>
                      <p class="text-sm text-gray-500">{{ item.description }}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </template>
          </UPopover>
        </span>
      </div>
      <div class="hidden lg:flex flex-1 justify-end gap-2">
        <UButton label="Sign in" color="gray" to="https://app.convertedge.co/auth/login" />
        <UButton label="Sign up" icon="i-heroicons-arrow-right-20-solid" trailing color="black" to="https://app.convertedge.co/auth/register" />
      </div>
    </nav>
  </header>

  <!-- Mobile menu, show/hide based on menu open state. -->
  <div :class="[mobile ? 'lg:hidden' : 'hidden']">
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-4 sm:max-w-60 bg-gray-50">
      <div class="flex items-center justify-end">
        <UButton icon="i-heroicons-x-mark" size="sm" color="gray" square variant="ghost" @click="mobile = !mobile" />
      </div>
      <div>
        <div class="divide-y divide-gray-300">
          <div class="space-y-2 py-6 flex flex-col">
            <ULink to="/" :class="[currentPath == '' ? 'text-primary-500' : 'text-gray-900 hover:text-primary-500', 'font-medium']" @click="resetNav"
              >Home</ULink
            >
            <ULink
              v-for="(link, index) of links"
              :key="index"
              :to="link.to"
              :class="[link.to == `/${currentPath}` ? 'text-primary-500' : 'text-gray-900 hover:text-primary-500', 'font-medium']"
              @click="resetNav"
            >
              {{ link.label }}
            </ULink>
          </div>
          <div class="py-6 flex justify-around">
            <UButton label="Sign in" color="gray" to="https://app.convertedge.co/login" />
            <UButton label="Sign up" icon="i-heroicons-arrow-right-20-solid" trailing color="black" to="https://app.convertedge.co/register" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
