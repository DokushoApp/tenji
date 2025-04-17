// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: 'https://dokusho.app',
	base: 'tenji',
	// Enable React to support React JSX components.
	integrations: [react()],
	vite:{
		plugins:[tailwindcss()],
	},
	image: {
		service: passthroughImageService(),
	},
});
