import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
		  scss: {
				api: 'modern',
				additionalData: '@use "/src/styles/helpers/_variables.scss" as *;',
			},
		},
	  },
})
