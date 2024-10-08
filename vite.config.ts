/*	Note the “triple slash command” in the first line. It is needed because the Vite config interface knows nothing about Vitest, and TS does not allow redundant properties (properties not defined by the type/interface). Therefore, Vitest must extend Vite config (defined as a TS interface). */
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			src: "/src",
		},
	},
	build: {
		minify: "esbuild", // This is the default, but you can specify it explicitly
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return "vendor";
					}
				},
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ["legacy-js-api"],
			},
		},
	},
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: 8080,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["src/configs/setup.ts"],
	},
});
