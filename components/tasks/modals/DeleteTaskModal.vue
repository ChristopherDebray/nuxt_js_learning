<script lang="ts" setup>
const emit = defineEmits(['success'])

function deleteTask() {
  emit('success')
}
</script>

<template>
  <UModal>
    <UCard>
      <div class="space-y-2">
        <p>Are you sure you want to delete this task ?</p>
        <UDivider />
        <UButton @click="deleteTask">
          Delete task
        </UButton>
      </div>
    </UCard>
  </UModal>
</template>

