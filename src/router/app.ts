import { RouteRecordRaw } from 'vue-router';

const app: Array<RouteRecordRaw> = [
  {
    path: '/app',
    redirect: '/app/home',
    component: () => import('@/layout/Home.vue'),
    children: [
      {
        path: '/app/home',
        component: () => import('@pages/app/Home.vue'),
      },
    ],
  },
];

export default app;
