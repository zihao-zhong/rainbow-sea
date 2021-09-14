import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import app from './app';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/app',
    component: () => import('@/layout/App.vue'), // 懒加载组件
    children: app,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
