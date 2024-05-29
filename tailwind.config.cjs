/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'heading': ['Patua One']
		},
		colors: {
			"heimv": {
				50: "#FBFBFE",
				100: "#F0F0FA",
				200: "#D5D5F1",
				300: "#BEBEE9",
				400: "#A7A7E2",
				500: "#8C8CD9",
				600: "#7575D1",
				700: "#59599e",
				800: "#3939AC",
				900: "#2E2E52",
				950: "#29297A"
			}

			// light: '#d4d4e9',
			// dark: '#59599e',
			// primary: '#7575d1',
			// white: '#fafafb',
			// body: '#f3f3fb',
			// black: '#2e2e52'
    },
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
