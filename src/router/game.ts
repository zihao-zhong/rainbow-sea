import { RouteRecordRaw } from 'vue-router';

const game: RouteRecordRaw = {
  path: '/game',
  redirect: '/game/home',
  component: () => import('@/layout/Home.vue'),
  children: [
    {
      path: '/game/home',
      component: () => import('@pages/game/Home.vue'),
    },
  ],
};

export default game;
