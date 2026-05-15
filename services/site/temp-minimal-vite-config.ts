import 'dotenv/config'
import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'

export default defineConfig(() => ({
	plugins: [
		reactRouter({
			appDirectory: 'app',
			future: {
				v8_viteEnvironmentApi: true,
			},
		}),
	],
}))
