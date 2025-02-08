<script setup lang="ts">
const { displayInvitationPrompt } = useInvitation();

function simulateIncomingInvite() {
    displayInvitationPrompt({
        id: 1,
        senderEmail: "test@example.com",
        targetType: "organisation",
        targetName: "Dev Team",
    });
}
</script>

<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div>
                    <UButton @click="simulateIncomingInvite" color="blue">
                        Test Invite Notification
                    </UButton>
                    invitation list
                </div>
            </div>

            <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div class="max-w-xl">
                    <UpdateProfileForm />
                </div>
            </div>

            <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div class="max-w-xl">
                    <UpdatePasswordForm />
                </div>
            </div>

            <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div class="max-w-xl">
                    <DeleteUserSection />
                </div>
            </div>
        </div>
    </div>
</template>