<script setup lang="ts">
import { TaskImportSchema } from '~/schemas/tasks/tasks';
import type { TaskImportType } from '~/schemas/tasks/tasks';
import type { Form, FormSubmitEvent } from '~/node_modules/@nuxt/ui/dist/runtime/types/form';
import { TaskPriority } from '~/enums/tasks/TaskPriority';
import { TaskType } from '~/enums/tasks/TaskType';

const emit = defineEmits(['success'])

const state = reactive<{ csv: File | null }>({
    csv: null,
})
const form = ref<Form<TaskImportType>>();

async function onSubmit(event: FormSubmitEvent<TaskImportType>) {
    try {
        emit('success')
    } catch (error: any) {
        if (error.response?.data?.errors) {
            form.value!.setErrors(error.response.data.errors.map((err) => ({
                message: err.message,
                path: err.path,
            })))
        }
    }
}

function handleFileChange(event: Event) {
    /**
     * @todo check fix for bad v-model handling of file inputs
     */
    state.csv = event[0];
}
</script>

<template>
    <UModal>
        <UCard>
            <UForm ref="form" :schema="TaskImportSchema" :state="state" class="space-y-4" @submit="onSubmit">
                <h2 class="text-lg font-medium text--primary">
                    Import tasks
                </h2>

                <UFormGroup label="Your csv" name="csv">
                    <UInput type="file" @change="handleFileChange" name="csv" size="sm" icon="i-heroicons-folder" />
                </UFormGroup>

                <p class="mt-1 text-sm text--secondary">Your CSV must contain the following fields</p>
                <div>
                    <ul class="mt-1 text-sm text--secondary list-disc">
                        <li class="ml-4 mt-2">
                            <span class="font-bold underline">title</span>
                            : The title of your task
                        </li>
                        <li class="ml-4 mt-2">
                            <span class="font-bold underline">content</span>
                            : The content of your task
                        </li>
                        <li class="ml-4 mt-2">
                            <span class="font-bold underline">
                                <Tooltip :list="Object.values(TaskType)">
                                    type
                                </Tooltip>
                            </span>
                            : Must be an existing types, by default it will be set to "bug"
                        </li>
                        <li class="ml-4 mt-2">
                            <span class="font-bold underline">
                                <Tooltip :list="Object.values(TaskPriority)">
                                    priority
                                </Tooltip>
                            </span>
                            : Must be an existing priority, by default it will be set to "medium"
                        </li>
                    </ul>
                </div>

                <UButton type="submit" class="w-full">Import tasks</UButton>
            </UForm>
        </UCard>
    </UModal>
</template>