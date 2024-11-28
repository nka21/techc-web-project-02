/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                kaisei: ['Kaisei Decol', 'serif'],
                kurenaido: ['Zen Kurenaido', 'serif'],
            },
            colors: {
                primary: '#B17457',
                accent: '#D8D2C2',
                base: '#FAF7F0',
                'black-100': '#4A4947',
            }
        },
        container: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px"
            },
        }
    },
    plugins: [],
};
