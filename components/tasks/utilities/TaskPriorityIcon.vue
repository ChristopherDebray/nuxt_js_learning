<template>
    <Tooltip :text="taskPriority">
        <UIcon :name="priorityIcon" :class="['w-7 h-7', priorityIconColor[taskPriority]]" />
    </Tooltip>
</template>

<script setup lang="ts">
import { TaskPriority } from '~/enums/tasks/TaskPriority';

const { taskPriority } = defineProps<{
    taskPriority: TaskPriority
}>()

const priorityIconColor = {
    'very high': 'text-red-500',
    'high': 'text-orange-500',
    'medium': 'text-yellow-400',
    'low': 'text-blue-500 rotate-180',
    'very low': 'text-cyan-400 rotate-180',
}
const priorityIcon = [TaskPriority.VERY_LOW, TaskPriority.VERY_HIGH].includes(taskPriority) ? 'i-heroicons-chevron-double-up' : 'i-heroicons-chevron-up';
</script>

<style scoped></style>