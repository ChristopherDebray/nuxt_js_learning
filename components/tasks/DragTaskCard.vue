<template>
  <UCard
    class="task-item bg-white rounded-md border border-gray-100 hover:-translate-y-1 transition-all cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-75"
    :data-task-key="task.key" :data-task-status="task.status">
    <template #header>
      <div class="justify-between items-center flex">
        <div class="items-center flex">
          <TaskTypeIcon :task-type="task.type" />
          <span class="pl-2 ">{{ truncatedTitle }}</span>
        </div>
        <span>{{ task.key }}</span>
      </div>
    </template>

    <template #footer>
      <div class="justify-between items-center flex">
        <TaskPriorityIcon :task-priority="task.priority" />
        <TaskUserGroup :task="task" />
      </div>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
import type Task from '~/types/tasks/Task';

const props = defineProps<{
  task: Task
}>()

const truncatedTitle = useTruncate(props.task.title, 20);
</script>