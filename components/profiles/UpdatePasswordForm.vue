<script setup lang="ts">
import type { Form, FormSubmitEvent } from '~/node_modules/@nuxt/ui/dist/runtime/types/form';
import { UpdatePasswordSchema, type UpdatePasswordType } from '~/schemas/profiles/profiles';


const form = ref<Form<UpdatePasswordType>>()
const state = reactive({
    password: undefined,
    passwordConfirmation: undefined
});
const { notifySuccess } = useNotification();

function onSubmit(event: FormSubmitEvent<UpdatePasswordType>) {
    notifySuccess('Password has been updated.')
}
</script>

<template>
    <section class="space-y-6">
        <header>
            <h2 class="text-lg font-medium text--primary">
                Change your password
            </h2>
        </header>

        <UForm ref="form" :schema="UpdatePasswordSchema" :state="state" class="space-y-4" @submit.once="onSubmit">
            <UFormGroup label="New password" name="password">
                <UInput type="password" v-model="state.password" />
            </UFormGroup>

            <UFormGroup label="Confirm password" name="passwordConfirmation">
                <UInput type="password" v-model="state.passwordConfirmation" />
            </UFormGroup>

            <UButton type="submit">Change password</UButton>
        </UForm>
    </section>
</template>