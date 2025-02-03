<template>
  <UCard
    class="task-item bg-white rounded-md border border-gray-100 hover:-translate-y-1 transition-all cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-75"
    :data-task-key="task.key" :data-task-status="task.status">
    <template #header>
      <div class="justify-between items-center flex">
        <div class="items-center flex">
          <span class="flex align-middle bg-gray-400 border-2 border-gray-50 rounded-md">
            <UIcon :name="taskTypeIcon[task.type].icon" :class="['w-7 h-7', taskTypeIcon[task.type].class]" />
          </span>
          <span class="pl-2 ">{{ truncatedTitle }}</span>
        </div>
        <span>{{ task.key }}</span>
      </div>
    </template>

    <template #footer>
      <div class="justify-between items-center flex">
        <UIcon :name="priorityIcon" :class="['w-7 h-7', priorityIconColor[task.priority]]" />
        <UAvatarGroup size="sm" :max="2">
          <Tooltip v-if="task.assignee" :text="task.assignee.user_email">
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
          </Tooltip>


          <span class="has-tooltip">
            <UAvatar v-if="task.assignee" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" class="has-tooltip" />
          </span>
          <span class="has-tooltip">
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
          </span>
        </UAvatarGroup>
      </div>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
import type Task from '@/types/tasks/Task';
import { TaskPriority } from '@/enums/tasks/TaskPriority';
import { TaskType } from '~/enums/tasks/TaskType';

const props = defineProps<{
  task: Task
}>()

const truncatedTitle = useTruncate(props.task.title, 20);
const priorityIconColor = {
  'very high': 'text-red-500',
  'high': 'text-orange-500',
  'medium': 'text-yellow-400',
  'low': 'text-blue-500 rotate-180',
  'very low': 'text-cyan-400 rotate-180',
}
const priorityIcon = [TaskPriority.VERY_LOW, TaskPriority.VERY_HIGH].includes(props.task.priority) ? 'i-heroicons-chevron-double-up' : 'i-heroicons-chevron-up';
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

/**
 * task content :
 * 
 * type
 * title
 * key
 * assignee->user_email
 * reporter->user_email
 * priority
 * status->name
 */
</script>

<style></style>