<script setup lang="ts">
import { UAvatar } from '#components';

const isOpen = ref(false)
</script>

<template>

  <div>
    <UButton :ui="{ rounded: 'rounded-full' }" class="fixed top-1/2 z-[50] transition-all -translate-x-16 duration-300"
      :class="{ 'rotate-180 translate-x-2': !isOpen }" icon="material-symbols:arrow-forward-ios-rounded"
      @click="isOpen = !isOpen" />

    <USlideover :ui="{
      background: 'bg-white'
    }" v-model="isOpen" :overlay="false" side="left" class="w-full sm:w-[250px]" :prevent-close="true">
      <div class="p-4 flex-1 relative">
        <UButton :ui="{ rounded: 'rounded-full' }" class="absolute right-2 top-1/2 flex"
          icon="material-symbols:arrow-forward-ios-rounded" @click="isOpen = !isOpen" />
        <nav class="h-full">
          <ul>
            <li class="pb-2 mb-2 border-b-2 border-slate-200">
              <NuxtLink to="/" class="flex items-center">
                <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" class="mr-2" /> Profile
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/posts/1">Post 1</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </USlideover>
  </div>
</template>
