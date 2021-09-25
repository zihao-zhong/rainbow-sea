import { App } from 'vue';
import router from '@/router/index';

export default function initRouter(app: App) {
  app.use(router);
}
