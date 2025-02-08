<template>
    <div>
        <h1>
            <slot name="title"></slot>
        </h1>
        <div>
            <SideNav />
            <div class="lg:pl-[260px] pl-0">
                <Breadcrumb />
                <main>
                    <slot></slot>
                </main>
            </div>
        </div>
    </div>
</template>