// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import deno from '@deno/astro-adapter';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: deno(),
	// Enable React to support React JSX components.
	integrations: [react()],
	vite:{
		plugins:[tailwindcss()],
	},
	image: {
		service: passthroughImageService(),
	},
});
