import { createApp } from 'vue';
import App from './layout/App.vue';
import initElement from './plugins/element';
import initRouter from './plugins/router';

const app = createApp(App);

// 注册插件
initElement(app);
initRouter(app);

app.mount('#app');
