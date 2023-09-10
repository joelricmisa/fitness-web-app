/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"gray-20": "#F8F4EB",
				"gray-50": "#EFE6E6",
				"gray-100": "#DFCCCC",
				"gray-500": "#5E0000",
				"primary-100": "#FFE1E0",
				"primary-300": "#FFA6A3",
				"primary-500": "#FF6B66",
				"secondary-400": "#FFCD5B",
				"secondary-500": "#FFC132",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			backgroundImage: (theme) => ({
				"gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
				"mobile-home": "url('./assets/images/HomePageGraphic.png')",
			}),
			content: {
				evolvetext: "url('/src/assets/logos/EvolveText.png')",
				abstractwaves: "url('./assets/designs/AbstractWaves.png')",
				sparkles: "url('./assets/designs/Sparkles.png')",
				circles: "url('./assets/designs/Circles.png')",
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
