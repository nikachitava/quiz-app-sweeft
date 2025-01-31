/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: "#4A90E2",
				secondary: "#50E3C2",
				background: "#FFFFFF",
				text: "#2C3E50",
				accent: "#FF6B6B",
				success: "#27AE60",
				error: "#E74C3C",
				neutral: "#F5F6FA",
			},
		},
	},
	plugins: [],
};
