<script setup lang="ts">
import type { Form, FormSubmitEvent } from "~/node_modules/@nuxt/ui/dist/runtime/types/form";
import { DeleteProfileSchema, type DeleteProfileType } from "~/schemas/profiles/profiles";
import type { FormErrorType } from "~/types/utilities/FormErrorType";

const modal = useModal()
const emit = defineEmits(['success']);
const form = ref<Form<DeleteProfileType>>()
const state = reactive({
    password: undefined
})

function onSubmit(event: FormSubmitEvent<DeleteProfileType>) {
    /** @todo add real api call */
    try {
        emit('success')
        modal.close()
    } catch (error: any) {
        if (error.response?.data?.errors) {
            /** @todo add this as utils function ? */
            form.value!.setErrors(error.response.data.errors.map((err: FormErrorType) => ({
                message: err.message,
                path: err.path,
            })))
        }
    }
}
</script>

<template>
    <UModal>
        <UCard>
            <UForm :schema="DeleteProfileSchema" :state="state" class="space-y-4" @submit.once="onSubmit">
                <h2 class="text-lg font-medium text--primary">
                    Are you sure you want to delete your account?
                </h2>

                <p class="mt-1 text-sm text--secondary">
                    Once your account is deleted, all of its resources and data will be permanently deleted.
                    Please enter your password to confirm you would like to permanently delete your account.
                </p>

                <UFormGroup label="Password" name="password">
                    <UInput v-model="state.password" type="password" placeholder="Enter your password" />
                </UFormGroup>

                <UButton @click="modal.close()">Cancel</UButton>
                <UButton type="submit">Delete account</UButton>
            </UForm>
        </UCard>
    </UModal>
</template>