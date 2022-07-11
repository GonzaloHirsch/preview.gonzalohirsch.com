<template>
    <Section id="error" :fullHeight="true" :forcedHeight="true">
        <div class="flex flex-col items-center justify-center h-full">
            <h1 class="text-h3 leading-h3 md:text-h1 md:leading-h1 section-title wip-title text-center relative mb-8">404 - Not Found</h1>
            <p
                class="text-h5 leading-h5 md:text-h3 md:leading-h3 w-9/12 text-center text-typography_primary_light dark:text-typography_primary_dark mb-4 md:mb-8"
            >
                You were looking for something that doesn't exist on this site. I recommend you go back and look for something else.
            </p>
            <ButtonsButton text="Go to gonzalohirsch.com" format="white" href="https://gonzalohirsch.com" target="_self" aria="Go to gonzalohirsch.com" extraClass="mx-auto mt-8" />
        </div>
    </Section>
</template>
