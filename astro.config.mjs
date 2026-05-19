// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SadScript',
			description: 'Lenguaje de programación temático emo con sintaxis en español',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/tu-usuario/sadScript' },
			],
			sidebar: [
				{
					label: 'Guía',
					items: [
						{ label: 'Introducción', slug: 'guides/sadscript' },
					],
				},
				{
					label: 'Referencia',
					items: [
						{ label: 'Glosario de Keywords', slug: 'reference/example' },
					],
				},
			],
		}),
	],
});
