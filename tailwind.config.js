/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				defaultGray: "#F8F4EB",
				"primary-100": "#d4d4d4",
				"primary-500": "rgba(0,0,0,0.5)",
				"secondary-500": "#3f3f46",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			content: {
				evolvetext: "url('/src/assets/logos/EvolveText.png')",
			},
			screens: {
				xs: "480px",
				sm: "768x",
				md: "1060px",
			},
		},
	},
	plugins: [],
};
