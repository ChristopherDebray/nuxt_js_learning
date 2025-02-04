<template>
    <div>
        <h1>
            <slot name="title"></slot>
        </h1>
        <div>
            <SideNav />
            <div>
                <Breadcrumb />
                <main>
                    <slot></slot>
                </main>
            </div>
        </div>
    </div>
</template>