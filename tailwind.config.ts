import { Smartphone } from "lucide-react";
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			mywhite: '#FAFAFA',
			mynav: '#252B42',
			mytextgray: "#737373",
			myblue: "#23A6F0",
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  screens: {
			xsmobile: '320px',
			mobile: '414px',
			tablet: '768px',
			laptop: '1280px	',
			desktop: '1440px',
		},
		fontFamily: {
			mon: ['var(--font-monserrat)'],
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
