<template>
    <footer class="fixed bottom-0 left-0 right-0 flex flex-row justify-between px-section-x-sm sm:px-section-x py-4">
        <div class="page-footer-divider bg-typography_primary_light dark:bg-typography_primary_dark" />
        <NavHorizontalIcons />
        <ButtonsThemeSwitch />
    </footer>
</template>

<style scoped>
.page-footer-divider {
    @apply mx-auto absolute top-0 left-0 right-0;
    width: calc(100vw - 2 * theme('padding.section-x-sm'));
    height: 1px;
}
@screen sm {
    .page-footer-divider {
        width: calc(100vw - 2 * theme('padding.section-x'));
    }
}
</style>
