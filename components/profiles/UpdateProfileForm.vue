<script setup lang="ts">
import type { FormSubmitEvent } from '~/node_modules/@nuxt/ui/dist/runtime/types/form';
import { UpdateProfileSchema, type UpdateProfileType } from '~/schemas/profiles/profiles';
const { notifySuccess } = useNotification();


const state = reactive({
    firstname: undefined,
    lastname: undefined,
    email: undefined,
});

function onSubmit(event: FormSubmitEvent<UpdateProfileType>) {
    notifySuccess('Your informations have been updated.')
}
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text--primary">
                Profile Information
            </h2>

            <p class="mt-1 mb-4 text-sm text--secondary">
                Update your account's profile information and email address.
            </p>
        </header>


        <UForm :schema="UpdateProfileSchema" :state="state" @submit="onSubmit" class="space-y-4">
            <UFormGroup label="Firstname" name="firstname">
                <UInput name="firstname" v-model="state.firstname" />
            </UFormGroup>

            <UFormGroup label="Lastname" name="lastname">
                <UInput name="lastname" v-model="state.lastname" />
            </UFormGroup>

            <UFormGroup label="Email" name="email">
                <UInput type="email" name="email" v-model="state.email" />
            </UFormGroup>

            <UButton type="submit">Save</UButton>
        </UForm>
    </section>
</template>
