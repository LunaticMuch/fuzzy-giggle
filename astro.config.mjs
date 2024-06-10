import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	adapter: nodejs({
	  mode: "standalone",
	}),
	// image: {
	// 	service: passthroughImageService(),
	//   },
	integrations: [
		starlight({
			title: 'Demo Playbook',
			social: {
				github: 'https://github.com/',
			},
			components: {
				Header: "./src/components/CustomHeader.astro",
				// ContentPanel: "./src/components/CustomContentPanel.astro", 
				PageFrame: "./src/components/CustomPageFrame.astro",
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
