<template>
  <Tooltip :text="taskType">
    <span class="flex align-middle bg-gray-400 border-2 border-gray-200 rounded-md">
      <UIcon :name="taskTypeIcon[taskType].icon" :class="['w-7 h-7', taskTypeIcon[taskType].class]" />
    </span>
  </Tooltip>
</template>

<script lang="ts" setup>
import { TaskType } from '@/enums/tasks/TaskType';

defineProps<{
  taskType: TaskType
}>()

const taskTypeIcon = {
  [TaskType.EPIC]: {
    icon: 'material-symbols:crown',
    class: 'text-violet-400'
  },
  [TaskType.BUG]: {
    icon: 'material-symbols:bug-report',
    class: 'text-red-600'
  },
  [TaskType.FEATURE]: {
    icon: 'material-symbols:bookmark',
    class: 'text-orange-400'
  },
  [TaskType.TASK]: {
    icon: 'material-symbols:task',
    class: 'text-blue-400'
  },
  [TaskType.TEST]: {
    icon: 'material-symbols:biotech-outline',
    class: 'text-lime-300'
  },
  [TaskType.STORY]: {
    icon: 'material-symbols:book-2',
    class: 'text-yellow-400'
  },
}
</script>

<style></style>