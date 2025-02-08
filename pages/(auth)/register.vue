<script setup lang="ts">
import type { Form, FormSubmitEvent } from '#ui/types'
import { RegisterSchema } from "~/schemas/profiles/auth"
import type { RegisterType } from "~/schemas/profiles/auth"
import type { FormErrorType } from '~/types/utilities/FormErrorType'

const state = reactive({
  email: undefined,
  password: undefined,
  lastname: undefined,
  firstname: undefined,
  passwordConfirmation: undefined,
})
const form = ref<Form<RegisterType>>()

async function onSubmit(event: FormSubmitEvent<RegisterType>) {
  try {
    await fakeApiRequest(event.data);
  } catch (error: any) {
    if (error.response?.data?.errors) {
      form.value!.setErrors(error.response.data.errors.map((err: FormErrorType) => ({
        message: err.message,
        path: err.path,
      })))
    }
  }
}

// Simulate API request with errors
async function fakeApiRequest(data: RegisterType) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === "taken@example.com") {
        reject({
          response: {
            data: {
              errors: [{ path: "email", message: "Email is already taken" }],
            },
          },
        });
      } else {
        resolve({ success: true });
      }
    }, 1000);
  });
}

definePageMeta({
  layout: 'fullpage'
})
</script>

<template>
  <main class="w-full max-w-3xl shadow-xl bg-white grid grid-cols-2 rounded-lg">
    <div class="py-8 px-6 col-span-2 md:col-span-1">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">Register</h2>
      <UForm ref="form" :schema="RegisterSchema" :state="state" class="space-y-4" @submit.once="onSubmit">
        <UFormGroup label="Firstname" name="firstname">
          <UInput v-model="state.firstname" placeholder="Enter your firstname" />
        </UFormGroup>

        <UFormGroup label="Lastname" name="lastname">
          <UInput v-model="state.lastname" placeholder="Enter your lastname" />
        </UFormGroup>
        
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="Enter your email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" placeholder="Enter your password" />
        </UFormGroup>
        <UFormGroup label="Password confirmation" name="passwordConfirmation">
          <UInput v-model="state.passwordConfirmation" type="password" placeholder="Type your password again" />
        </UFormGroup>
        <ULink to="/login" active-class="text-primary"
          inactive-class="text-xs underline text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Already registered ? Log in
        </ULink>
        <UButton type="submit" class="w-full">Sign In</UButton>
      </UForm>
    </div>

    <div class="hidden md:block">
      <img
        src="https://imgs.search.brave.com/vaQVqgEDvZxR3rH0P1Zln8jcQZYZAoiatv03jvepTnM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzU3LzM1LzE0/LzM2MF9GXzc1NzM1/MTQ3NF9CNTF5RjBu/cFZEVkZCdVYzbUpt/QWtwNE5zcE1RYmlE/QS5qcGc"
        alt="Register illustration" class="w-full h-full object-cover rounded-r-lg" />
    </div>
  </main>
</template>