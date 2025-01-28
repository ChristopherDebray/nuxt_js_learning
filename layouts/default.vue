<template>
    <div>
        <h1>
            <slot name="title"></slot>
        </h1>
        <div>
            <SideNav />
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>