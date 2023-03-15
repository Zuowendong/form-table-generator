import type { App, Plugin } from 'vue';
import DuiInputNumber from './DuiInputNumber.vue';

DuiInputNumber.install = (app: App) => {
	app.component(DuiInputNumber.name, DuiInputNumber);
	return app;
};

export default DuiInputNumber as typeof DuiInputNumber & Plugin;
