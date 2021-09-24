import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import app from './app';
import database from './database';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/app',
    component: () => import('@/layout/App.vue'), // 懒加载组件
    children: app,
  },
  database,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
