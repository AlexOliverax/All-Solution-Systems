/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#135bec', // Stitch Theme
                    hover: '#0f48c2',
                    light: '#e8effd',
                },
                accent: {
                    whatsapp: '#25D366', // Exigência para fallback e padronização
                    whatsappHover: '#1ebe57',
                },
                dark: {
                    DEFAULT: '#111827',
                    light: '#1f2937',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'brutalist': '0px',
                'soft': '8px',
                'modern': '16px',
            }
        },
    },
    plugins: [],
}
