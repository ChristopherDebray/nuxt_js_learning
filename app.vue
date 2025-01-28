<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
console.log("🚀 ~ appConfig:", appConfig)

</script>