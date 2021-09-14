import { RouteRecordRaw } from 'vue-router';

const app: Array<RouteRecordRaw> = [
  {
    path: '/app',
    redirect: '/app/test',
    component: () => import('@/layout/Home.vue'),
    children: [
      {
        path: '/app/test',
        component: () => import('@pages/Test.vue'),
      },
    ],
  },
];

export default app;
