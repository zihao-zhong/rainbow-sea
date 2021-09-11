import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/Home.vue'), // 懒加载组件
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
