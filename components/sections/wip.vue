<template>
    <Section id="wip" :fullHeight="true" :forcedHeight="true">
        <div class="flex flex-col items-center justify-center h-full">
            <IconsAlert class="w-20 h-20 md:w-28 md:h-28 min-w-[5rem] min-h-[5rem] md:min-w-[7rem] md:min-h-[7rem] text-yellow-400 mb-4" />
            <h1 class="text-h3 leading-h3 md:text-h1 md:leading-h1 section-title wip-title text-center relative mb-8">Work In Progress</h1>
            <p
                class="text-h5 leading-h5 md:text-h3 md:leading-h3 w-9/12 text-center text-typography_primary_light dark:text-typography_primary_dark mb-4 md:mb-8"
            >
                Congratulations! You found my preview domain, where I build and test my stuff. I suggest you visit <strong>gonzalohirsch.com</strong>,
                where the actual content is.
            </p>
            <ButtonsButton
                text="Visit gonzalohirsch.com"
                format="white"
                href="https://gonzalohirsch.com"
                target="_self"
                aria="Visit gonzalohirsch.com."
                extraClass="mx-auto mt-2 md:mt-4"
            />
        </div>
    </Section>
</template>
