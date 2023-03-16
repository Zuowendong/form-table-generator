import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path, { format } from 'path';

export default defineConfig({
	plugins: [vue(), dts()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'desinger-components',
			fileName: (format) => `wd.${format}.js`
		},
		rollupOptions: {
			external: ['vue', 'lodashEs', 'echarts'],
			output: {
				globals: {
					vue: 'Vue',
					lodashEs: 'lodashEs',
					echarts: 'ECharts'
				}
			}
		}
	}
});
