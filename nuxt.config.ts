import { defineNuxtConfig } from 'nuxt';

const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Preview | Gonzalo Hirsch',
    description:
        "Congrats on finding the preview page; you sure did look for it, and now you share it with the world. I suggest you visit my portfolio, where you can find better stuff.",
    publisher: {
        '@type': 'Person',
        jobTitle: 'Software Engineer',
        name: 'Gonzalo Hirsch',
        url: 'https://gonzalohirsch.com/'
    },
    license: 'http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US'
};
const website = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Preview | Gonzalo Hirsch',
    url: 'https://preview.gonzalohirsch.com/'
};
const person = {
    '@context': 'http://www.schema.org',
    '@type': 'Person',
    '@id': 'https://gonzalohirsch.com/#about',
    name: 'Gonzalo Hirsch',
    alternateName: 'Gonzalo Hirsch',
    nationality: 'Argentinian',
    alumniOf: [
        {
            '@type': 'CollegeOrUniversity',
            name: 'Instituto Tecnológico de Buenos Aires',
            sameAs: 'http://itba.edu.ar/'
        }
    ],
    gender: 'Male',
    jobTitle: 'Software Engineer',
    worksFor: [
        {
            '@type': 'Organization',
            name: 'Toptal',
            sameAs: [
                'https://www.toptal.com/',
                'https://www.linkedin.com/company/toptal',
                'https://twitter.com/toptal',
                'https://www.facebook.com/toptal',
                'https://www.instagram.com/toptal/',
                'https://gonzalohirsch.com',
            ]
        }
    ],
    url: 'https://gonzalohirsch.com/',
    image: 'https://gonzalohirsch.com/meta-img.jpg',
    sameAs: [
        'https://gonzalohirsch.com/',
        'https://github.com/GonzaloHirsch',
        'https://www.linkedin.com/in/gonzalo-hirsch/',
        'https://www.instagram.com/gonzalohirsch/?hl=en',
        'https://www.toptal.com/resume/gonzalo-hirsch',
        'https://gonzalohirsch.com',
    ]
};

const jsonLds = [webpage, website, person];

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    css: ['/assets/css/main.css'],
    target: 'server',
    ssr: true,
    generate: {
        routes: ['/404']
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'Preview | Gonzalo Hirsch',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        "Congrats on finding the preview page; you sure did look for it, and now you share it with the world. I suggest you visit my portfolio, where you can find better stuff."
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'Development, Developer, Software, Engineer, Software Engineer, Engineering, Full-Stack, Freelancer, Experiences'
                },
                {
                    hid: 'author',
                    name: 'author',
                    content: 'Gonzalo Hirsch'
                }
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                {
                    hid: 'canonical',
                    rel: 'canonical',
                    href: `https://preview.gonzalohirsch.com/`
                }
            ],
            script: jsonLds.map((elem) => {
                return {
                    type: 'application/ld+json',
                    children: JSON.stringify(elem)
                };
            })
        }
    },
    tailwindcss: {
        // This is the option that works
        darkMode: 'class'
    }
});
