// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import deno from '@deno/astro-adapter';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: deno(),
	vite:{
		plugins:[tailwindcss()],
	},
	image: {
		service: passthroughImageService(),
	},
});
