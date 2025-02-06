<script setup lang="ts">
import DeleteUserFormModal from '~/components/profiles/DeleteUserFormModal.vue';

const modal = useModal();
const { notifyError } = useNotification();
function openDeleteModal() {
    modal.open(DeleteUserFormModal, {
        onSuccess() {
            /** @todo delete account and redirect to homepage */
            notifyError('The user couldn\'t be deleted.')
            modal.close()
        }
    })
}
</script>

<template>
    <section class="space-y-6">
        <header>
            <h2 class="text-lg font-medium text--primary">
                Delete Account
            </h2>

            <p class="mt-1 text-sm text--secondary">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before
                deleting your account, please download any data or information that you wish to retain.
            </p>
        </header>

        <UButton @click="openDeleteModal">Delete Account</UButton>
    </section>

</template>