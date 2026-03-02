/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#135bec',
                    hover: '#0f48c2',
                    light: '#e8effd',
                },
                accent: {
                    whatsapp: '#25D366',
                    whatsappHover: '#1ebe57',
                },
                dark: {
                    DEFAULT: '#111827',
                    light: '#1f2937',
                },

                // Premium (B20-style)
                premium: {
                    ink: '#0B1220',
                    surface: '#FFFFFF',
                    surface2: '#F6F7FB',
                    stroke: 'rgba(17, 24, 39, 0.10)',
                    glow: 'rgba(106, 90, 249, 0.35)',
                },
                brand: {
                    purple: '#6A5AF9',
                    blue: '#3B82F6',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'brutalist': '0px',
                'soft': '8px',
                'modern': '16px',
                'card': '28px',
                'pill': '9999px',
            }
        },
    },
    plugins: [],
}
