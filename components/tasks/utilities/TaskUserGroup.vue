<template>
    <UAvatarGroup size="sm" :max="2">
        <Tooltip v-if="task.assignee" :text="task.assignee.user_email">
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
        </Tooltip>

        <Tooltip :text="task.reporter.user_email">
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
        </Tooltip>
    </UAvatarGroup>
</template>

<script setup lang="ts">
import type Task from '~/types/tasks/Task';

defineProps<{
    task: Task
}>()
</script>

<style scoped></style>