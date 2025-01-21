<script setup lang="ts">
defineProps({
  fields: {
    type: Array<string>,
  },
  hidden: {
    type: Array<string>,
  },
  text: {
    type: String,
  },
  width: {
    type: Number,
  },
});
</script>

<template>
  <div class="h-full flex flex-col lg:flex-row gap-4 sm:gap-8 p-2">
    <div class="w-full">
      <p class="text-center font-medium mb-1 text-sm sm:text-base">Your form</p>
      <div class="space-y-2 bg-white ring-1 ring-gray-200 p-2 rounded-xl">
        <UFormGroup label="Email" required v-if="fields.includes('email')">
          <UInput placeholder="you@example.com" icon="i-heroicons-envelope" :size="width >= 640 ? 'sm' : 'xs'" />
        </UFormGroup>
        <UFormGroup label="Password" required v-if="fields.includes('password')">
          <UInput placeholder="********" icon="i-heroicons-eye-slash" :size="width >= 640 ? 'sm' : 'xs'" />
        </UFormGroup>
        <UFormGroup label="Company name" required v-if="fields.includes('company')">
          <UInput placeholder="Apple" icon="i-heroicons-building-office" :size="width >= 640 ? 'sm' : 'xs'" />
        </UFormGroup>
        <UFormGroup label="How can we help?" required v-if="fields.includes('message')">
          <UTextarea
            color="white"
            variant="outline"
            :size="width >= 640 ? 'sm' : 'xs'"
            placeholder="I’m interested in Convertedge for my team. I’d like to learn more about..."
          />
        </UFormGroup>
        <div class="flex justify-end"><UButton :label="text" :size="width >= 640 ? 'sm' : 'xs'" /></div>
      </div>
    </div>

    <div class="w-full">
      <p class="text-center font-medium mb-1 text-sm sm:text-base">The data you get</p>
      <div class="bg-white ring-1 ring-gray-200 rounded-xl">
        <div class="xs:grid grid-cols-2 w-[98%] h-fit space-y-2 p-2 text-xs sm:text-sm overflow-x-scroll">
          <p class="col-span-2 text-gray-500">{</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('first name')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p>First name</p>
          </span>
          <p v-if="hidden.includes('first name')" class="ml-9 xs:ml-0">Sarah</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('last name')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p>Last name</p>
          </span>
          <p v-if="hidden.includes('last name')" class="ml-9 xs:ml-0">Johnson</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('role')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
            <p>Role</p>
          </span>
          <p v-if="hidden.includes('role')" class="ml-9 xs:ml-0">Head of IT</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('email')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <p>Email</p>
          </span>
          <p v-if="hidden.includes('email')" class="ml-9 xs:ml-0">sarah@apple.com</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('password')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>

            <p>Password</p>
          </span>
          <p v-if="hidden.includes('password')" class="ml-9 xs:ml-0">********</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('phone')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p>Phone</p>
          </span>
          <p v-if="hidden.includes('phone')" class="ml-9 xs:ml-0">+1 (650) 770-8316</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('location')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p>Location</p>
          </span>
          <p v-if="hidden.includes('location')" class="ml-9 xs:ml-0">Los Altos, CA, US</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('company')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
            <p>Company</p>
          </span>
          <p v-if="hidden.includes('company')" class="ml-9 xs:ml-0">Apple</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('x profile')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <p>Twitter/X</p>
          </span>
          <p v-if="hidden.includes('x profile')" class="ml-9 xs:ml-0">https://x.com/sarah_j</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('linkedin profile')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <p>LinkedIn</p>
          </span>
          <p v-if="hidden.includes('linkedin profile')" class="ml-9 xs:ml-0">https://linkedin.com/in/sjohnson</p>
          <span class="text-gray-500 flex items-center gap-2 pl-2" v-if="hidden.includes('facebook profile')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <p>Facebook</p>
          </span>
          <p v-if="hidden.includes('facebook profile')" class="ml-9 xs:ml-0">https://facebook.com/sarah1984</p>
          <span class="text-gray-500 flex items-center xs:items-start gap-2 pl-2" v-if="hidden.includes('message')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>
            <p>Message</p>
          </span>
          <p v-if="hidden.includes('message')" class="ml-9 xs:ml-0">
            Hi, I'm interested in learning more about how can I increase my conversion rate of my boom a demo form.
          </p>
          <p class="col-span-2 text-gray-500">}</p>
        </div>
      </div>
    </div>
  </div>
</template>
