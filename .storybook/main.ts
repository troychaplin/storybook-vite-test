import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	// framework: {
	// 	name: "@storybook/react-vite",
	// 	options: {},
	// },
	framework: "@storybook/react-vite", // OR whatever framework you're using
	features: {
		storyStoreV7: true,
	},
	docs: {
		docsPage: true,
	},
};
export default config;
