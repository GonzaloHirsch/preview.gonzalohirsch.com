<template>
    <Section :fullHeight="true" :forcedHeight="true">
        <h1 class="section-title wip-title text-center relative">Featured Projects</h1>
        <p></p>
    </Section>
</template>

<style scoped>
.projects-title::before {
    @apply bg-typography_primary_light block mx-auto absolute left-0;
    content: '';
    width: 15%;
    height: 2px;
    top: -50px;
}
.dark .projects-title::before {
    @apply bg-typography_primary_dark;
}
</style>
