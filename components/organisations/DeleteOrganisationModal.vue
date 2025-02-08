<script setup lang="ts">
import type Organisation from '~/types/organisations/Organisation';

const emit = defineEmits(['success'])

const props = defineProps<{ organisation: Organisation }>()

const modal = useModal();
const state = reactive(props.organisation)
const { notifySuccess } = useNotification();

function onSubmit() {
    notifySuccess('Your organisation has been deleted.')
    emit('success', state);
}
</script>

<template>
    <UModal>
        <UCard>
            <UForm :state="state" class="space-y-4" @submit.once="onSubmit">
                <h2 class="text-lg font-medium text--primary">
                    Delete this organisation
                </h2>
                <p class="mt-1 text-sm text--secondary">
                    A deleted organisation cannot be restored.
                </p>

                <UButton @click="modal.close()">Cancel</UButton>
                <UButton type="submit">Delete organisation</UButton>
            </UForm>
        </UCard>
    </UModal>
</template>