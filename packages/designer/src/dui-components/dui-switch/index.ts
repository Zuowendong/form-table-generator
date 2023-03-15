import type { App, Plugin } from 'vue';
import DuiSwitch from './DuiSwitch.vue';

DuiSwitch.install = (app: App) => {
	app.component(DuiSwitch.name, DuiSwitch);
	return app;
};

export default DuiSwitch as typeof DuiSwitch & Plugin;
