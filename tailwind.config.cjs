/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'heading': ['Patua One']
		},
		colors: {
			primary: '#7575d1',
			white: '#fafafb',
			body: '#f3f3fb',
			dark: '#59599e',
			light: '#d4d4e9',
			black: '#2e2e52'
    },
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
