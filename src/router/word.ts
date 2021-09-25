import { RouteRecordRaw } from 'vue-router';

const word: RouteRecordRaw = {
  path: '/word',
  redirect: '/word/home',
  component: () => import('@/layout/Home.vue'),
  children: [
    {
      path: '/word/home',
      component: () => import('@pages/word/Home.vue'),
    },
  ],
};

export default word;
