import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'~': `${path.resolve(__dirname, 'src')}/`
		}
	},
	plugins: [
		react(),
		AutoImport({
			dts: true, // or a custom path
			imports: [
				'react',
				'react-router',
			],
			dirs: [
				'src/components/**',
				'src/styles/helpers/mixins/**',
				'src/styles/components/**',
			]
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
				additionalData: '@use "~/styles/helpers/_variables.scss" as *;',
			},
		},
	},
})
