<script setup lang="ts">
import { computed } from "vue";

interface Props {
  text?: string;
  list?: string[];
  position?: "top" | "bottom" | "left" | "right";
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  list: () => [],
  position: "top",
});

const tooltipClasses = computed(() => 
  `tooltip rounded shadow-lg p-1 bg-gray-50 border-1 border-gray-200 dark:text-white dark:bg-gray-900 dark:text-white text-xs px-4 py-2 tooltip--${props.position}`
);
</script>

<template>
  <span class="has-tooltip">
    <slot></slot>
    <span :class="tooltipClasses">
      <template v-if="text">{{ text }}</template>
  
      <ul v-if="list.length" class="list-disc ml-2 mt-1">
        <li v-for="(item, index) in list" :key="index">
          {{ item }}
        </li>
      </ul>
    </span>
  </span>
</template>

<style scoped lang="scss">
.tooltip {
  @apply opacity-0 absolute transition-opacity invisible -translate-x-1/2 z-[1000];
  &--top {
    @apply translate-y-[-110%];
  }
  &--bottom {
    @apply translate-y-[110%];
  }
}

.has-tooltip:hover .tooltip {
  @apply opacity-100 visible;
}
</style>