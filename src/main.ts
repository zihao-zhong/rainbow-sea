import { createApp } from 'vue';
import App from './App.vue';
import initElement from './plugins/element';

const app = createApp(App);

// 注册插件
initElement(app);

app.mount('#app');
