<script setup lang="ts">
import type { Form, FormSubmitEvent } from '~/node_modules/@nuxt/ui/dist/runtime/types/form';
import { ProjectCreateSchema, type ProjectCreateType } from '~/schemas/projects/projects';
import type Project from '~/types/projects/Project';

const emit = defineEmits<{
    (e: 'createProject', project: Project): void
}>()

const modal = useModal();
const state = reactive({
    name: '',
    description: '',
})
const isCreateModalOpen = ref(false)
const form = ref<Form<ProjectCreateType>>()
const { notifySuccess } = useNotification();

function onSubmit(event: FormSubmitEvent<ProjectCreateType>) {
    notifySuccess('Project has been created')
    isCreateModalOpen.value = false
    const project: Project = {
        id: 40,
        ...state
    }

    emit('createProject', project);
}
</script>

<template>
    <section>
        <UButton @click="isCreateModalOpen = true">Create a project</UButton>

        <UModal v-model="isCreateModalOpen">
            <UCard>
                <UForm :schema="ProjectCreateSchema" :state="state" class="space-y-4" @submit.once="onSubmit">
                    <h2 class="text-lg font-medium text--primary">
                        Create an project
                    </h2>

                    <UFormGroup label="Project name" name="name">
                        <UInput v-model="state.name" placeholder="Enter the project name" />
                    </UFormGroup>

                    <UFormGroup label="Description" name="description">
                        <UInput v-model="state.description" placeholder="Enter the project description" />
                    </UFormGroup>

                    <UButton @click="modal.close()">Cancel</UButton>
                    <UButton type="submit">Create project</UButton>
                </UForm>
            </UCard>
        </UModal>
    </section>

</template>