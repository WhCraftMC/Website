import type { RouteRecordRaw } from 'vue-router';

const errorRoute: Array<RouteRecordRaw> = [
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      meta: {
        title: '404 NotFound'
      },
      component: () => import('@/views/NotFound/index.vue')
    }
];

export default errorRoute;