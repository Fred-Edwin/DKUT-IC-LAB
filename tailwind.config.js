/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'nordic-paper': '#F9F9F7',
                'deep-black': '#1A1A1A',
                'charcoal': '#111c21',
                'steel-blue': '#5E7A8A',
                'neutral-grey': '#AAB2BA',
                'border-grey': '#E5E5E1',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            letterSpacing: {
                tightest: '-0.055em',
            }
        },
    },
    plugins: [],
}
