<script setup lang="ts">
import AppFields from "@/components/usecases/AppFields.vue";

const props = defineProps({
  data: {
    type: Object,
  },
});

const width = ref(window?.innerWidth);
const selectedTab = ref(props.data.items[0]);

onMounted(() => {
  window.addEventListener("resize", () => (width.value = window?.innerWidth));
});
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h3 class="mb-4 sm:mb-6 lg:mb-8 text-pretty font-semibold text-gray-950 text-3xl md:text-4xl lg:text-5xl text-center" v-html="data.title"></h3>

    <ClientOnly>
      <UTabs
        v-if="width >= 425"
        :items="data.items"
        :orientation="width >= 1024 ? `horizontal` : `vertical`"
        :ui="{
          wrapper: `${width >= 1024 ? 'relative space-y-0' : 'bg-gray-50 rounded-lg h-full flex lg:items-center gap-0 space-y-0'}`,
          list: {
            background: 'bg-gray-50',
            rounded: `${width >= 1024 ? 'rounded-none  rounded-t-lg' : 'rounded-none rounded-l-lg h-full'}`,
            width: `${width >= 1024 ? 'w-full' : 'w-48'}`,
            marker: { background: 'bg-gray-900' },
            tab: { active: 'text-gray-50', padding: 'px-0.5 md:px-2', size: `${width >= 640 ? 'text-sm' : 'text-xs'}` },
          },
        }"
      >
        <template #item="{ item }">
          <div v-if="item.label == 'Contact us'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'md:w-[30rem] lg:w-[56rem] bg-gray-50']">
            <AppFields
              :fields="['email', 'message']"
              :hidden="['email', 'message', 'first name', 'last name', 'company', 'x profile']"
              text="Send message"
              :width="width"
            />
          </div>
          <div v-else-if="item.label == 'Book a demo'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'md:w-[30rem] lg:w-[56rem] bg-gray-50']">
            <AppFields
              :fields="['email']"
              :hidden="['email', 'first name', 'last name', 'phone', 'company', 'role', 'linkedin profile']"
              text="Book a demo"
              :width="width"
            />
          </div>
          <div v-else-if="item.label == 'Newsletters'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'md:w-[30rem] lg:w-[56rem] bg-gray-50']">
            <AppFields :fields="['email']" :hidden="['email', 'first name', 'last name', 'phone', 'location']" text="subscribe" :width="width" />
          </div>
          <div
            v-else-if="item.label == 'Platform sign up'"
            :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'md:w-[30rem] lg:w-[56rem] bg-gray-50']"
          >
            <AppFields
              :fields="['email', 'password', 'company']"
              :hidden="['email', 'password', 'company', 'first name', 'last name', 'phone', 'role']"
              text="Create account"
              :width="width"
            />
          </div>
          <div
            v-else-if="item.label == 'Event registration'"
            :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'md:w-[30rem] lg:w-[56rem] bg-gray-50']"
          >
            <AppFields
              :fields="['email']"
              :hidden="['email', 'first name', 'last name', 'phone', 'company', 'facebook profile']"
              text="Register"
              :width="width"
            />
          </div>
        </template>
      </UTabs>
      <div v-else class="bg-gray-50 min-w-full rounded-md">
        <USelectMenu
          v-model="selectedTab"
          :options="data.items"
          class="w-full"
          :ui="{
            rounded: 'rounded-none',
            color: { white: { outline: 'bg-gray-50 ring-0 shadow-none rounded-none' } },
          }"
        >
          <template #leading>
            <UIcon :name="selectedTab.icon" class="w-5 h-5" />
          </template>
        </USelectMenu>
        <hr class="mb-4" />
        <div v-if="selectedTab.label == 'Contact us'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'md:w-[30rem] lg:w-[56rem]']">
          <AppFields
            :fields="['email', 'message']"
            :hidden="['email', 'message', 'first name', 'last name', 'company', 'x profile']"
            text="Send message"
            :width="width"
          />
        </div>
        <div v-else-if="selectedTab.label == 'Book a demo'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'md:w-[30rem] lg:w-[56rem]']">
          <AppFields
            :fields="['email']"
            :hidden="['email', 'first name', 'last name', 'phone', 'company', 'role', 'linkedin profile']"
            text="Book a demo"
            :width="width"
          />
        </div>
        <div v-else-if="selectedTab.label == 'Newsletters'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'md:w-[30rem] lg:w-[56rem]']">
          <AppFields :fields="['email']" :hidden="['email', 'first name', 'last name', 'phone', 'location']" text="subscribe" :width="width" />
        </div>
        <div v-else-if="selectedTab.label == 'Platform sign up'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'md:w-[30rem] lg:w-[56rem]']">
          <AppFields
            :fields="['email', 'password', 'company']"
            :hidden="['email', 'password', 'company', 'first name', 'last name', 'phone', 'role']"
            text="Create account"
            :width="width"
          />
        </div>
        <div v-else-if="selectedTab.label == 'Event registration'" :class="[`${width >= 1024 ? 'rounded-b-lg' : 'rounded-r-lg'}`, 'md:w-[30rem] lg:w-[56rem]']">
          <AppFields
            :fields="['email']"
            :hidden="['email', 'first name', 'last name', 'phone', 'company', 'facebook profile']"
            text="Register"
            :width="width"
          />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
