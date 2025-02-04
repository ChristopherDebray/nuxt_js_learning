<template>
    <div>
        <NuxtRouteAnnouncer :atomic=true />
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>

        <UModals />
        <UNotifications />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}


.rotate-enter-active,
.rotate-leave-active {
    transition: all 0.2s;
}

.rotate-enter-from {
    opacity: 0;
    transform: translateX(100px);
}
.rotate-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}
</style>