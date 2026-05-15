import 'dotenv/config'
import { reactRouter } from '@react-router/dev/vite'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { envOnlyMacros } from 'vite-env-only'
import { cjsInterop } from 'vite-plugin-cjs-interop'
import tsconfigPaths from 'vite-tsconfig-paths'

const MODE = process.env.NODE_ENV
const SENTRY_UPLOAD =
	process.env.SENTRY_UPLOAD === 'true' || process.env.SENTRY_UPLOAD === '1'

export default defineConfig(async () => {
	return {
		plugins: [
			cjsInterop({
				dependencies: [
					'md5-hash',
					'@remark-embedder/core',
					'@remark-embedder/transformer-oembed',
				],
			}),
			envOnlyMacros(),
			tailwindcss(),
			reactRouter({
				appDirectory: 'app',
				future: {
					v8_viteEnvironmentApi: false,
				},
			}),
			tsconfigPaths(),
			SENTRY_UPLOAD
				? sentryVitePlugin({
					disable: MODE !== 'production',
					authToken: process.env.SENTRY_AUTH_TOKEN,
					org: process.env.SENTRY_ORG,
					project: process.env.SENTRY_PROJECT,
					errorHandler: (err) => {
						throw err
					},
					release: {
						name: process.env.COMMIT_SHA,
						setCommits: {
							auto: true,
						},
					},
				})
			: null,
		],
		build: {
			sourcemap: true,
			cssMinify: MODE === 'production',
			rollupOptions: {
				external: [/node:.*/, 'stream', 'crypto'],
			},
		},
	}
})
