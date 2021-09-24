import { RouteRecordRaw } from 'vue-router';

const database: RouteRecordRaw = {
  path: '/database',
  redirect: '/database/home',
  component: () => import('@/layout/Home.vue'),
  children: [
    {
      path: '/database/home',
      component: () => import('@pages/database/Home.vue'),
    },
  ],
};

export default database;
