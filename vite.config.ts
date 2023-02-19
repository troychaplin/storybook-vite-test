import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import * as packageJson from "./package.json";

export default defineConfig(() => ({
	plugins: [
		react(),
		tsConfigPaths(),
		dts({
			include: ["src"],
		}),
	],
	css: {
		postcss: {
			plugins: [tailwindcss],
		},
	},
	build: {
		lib: {
			entry: resolve("src", "index.ts"),
			name: "design-ui",
			formats: ["es", "umd"],
			fileName: (format) => `design-ui.${format}.js`,
		},
		rollupOptions: {
			external: [...Object.keys(packageJson.peerDependencies)],
		},
	},
}));
