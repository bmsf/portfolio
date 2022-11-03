/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#F2F2F2',
				secondary: '#383B40',
				button: '#383B40',
				buttonHover: '#4F5359',
				darkModeBg: '#383B40',
				darkButtonHover: '#868C73',
				darkModeBgLighter: '#6C788C',
				darkModeIcon: '#373C40',
			},
			fontFamily: {
				sans: ['Roboto'],
			},
		},
	},
	plugins: [],
};
