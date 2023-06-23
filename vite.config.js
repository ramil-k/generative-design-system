import { visualizer } from 'rollup-plugin-visualizer';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
// import { babel } from '@rollup/plugin-babel';

export default defineConfig({
	plugins: [
		sveltekit(),
		visualizer({
			template: 'treemap', // or sunburst
			open: true,
			gzipSize: true,
			brotliSize: true,
			filename: 'analyse.html' // will be saved in project's root
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
