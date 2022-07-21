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
    {
      path: '/game/array',
      component: () => import('@pages/game/Array.vue'),
    },
    {
      path: '/game/transition',
      component: () => import('@pages/game/Transition.vue'),
    },
  ],
};

export default game;
