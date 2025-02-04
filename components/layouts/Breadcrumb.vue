<script setup lang="ts">
import { useBreadcrumbs } from '~/composables/useBreadcrumbs';

const breadcrumbs = useBreadcrumbs();
</script>

<template>
  <UBreadcrumb :links="breadcrumbs" />
</template>
