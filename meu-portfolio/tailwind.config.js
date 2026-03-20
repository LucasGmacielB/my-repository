/** @Type {import('tailwindcss').config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    themes: {
        fontFamily: {
            sans: ['var(--font-inter)', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'hero-image': "url('/image/hero-bg.png')"
            },
            fontFamily: {
                mono: ['var(--font-plex-mono)', 'monospace'],
            },
        },
    },
    plugins: [],
}
