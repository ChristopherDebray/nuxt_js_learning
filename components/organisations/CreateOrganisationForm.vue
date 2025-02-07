<script setup lang="ts">
import type { Form, FormSubmitEvent } from '~/node_modules/@nuxt/ui/dist/runtime/types/form';
import { OrganisationCreateSchema, type OrganisationCreateType } from '~/schemas/organisations/organisations';

const modal = useModal();
const state = reactive({
    name: undefined,
    description: undefined,
    taskPrefix: undefined,
})
const isCreateModalOpen = ref(false)
const form = ref<Form<OrganisationCreateType>>()
const { notifySuccess } = useNotification();

function onSubmit(event: FormSubmitEvent<OrganisationCreateType>) {
    notifySuccess('Organisations has been created')
    isCreateModalOpen.value = false
}
</script>

<template>
    <section>
        <UButton @click="isCreateModalOpen = true">Create an organisation</UButton>
        
        <UModal v-model="isCreateModalOpen">
            <UCard>
                <UForm :schema="OrganisationCreateSchema" :state="state" class="space-y-4" @submit="onSubmit">
                    <h2 class="text-lg font-medium text--primary">
                        Create an organisation
                    </h2>

                    <UFormGroup label="Organisation name" name="name">
                        <UInput v-model="state.name" placeholder="Enter the organisation name" />
                    </UFormGroup>

                    <UFormGroup label="Description" name="description">
                        <UInput v-model="state.description" placeholder="Enter the organisation description" />
                    </UFormGroup>

                    <UFormGroup label="Task key prefix" name="taskPrefix">
                        <UInput v-model="state.taskPrefix" placeholder="Enter the organisation task prefix" />
                    </UFormGroup>
                    <p class="mt-1 text-sm text--secondary block sm:w-3/4 w-full">
                        If you add the prefix "tms_" all your ticket will be named as follow "tms_TICKET_NUMBER" for instance "tms_1".
                    </p>

                    <UButton @click="modal.close()">Cancel</UButton>
                    <UButton type="submit">Create organisation</UButton>
                </UForm>
            </UCard>
        </UModal>
    </section>

</template>