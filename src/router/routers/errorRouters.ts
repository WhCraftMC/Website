import type { RouteRecordRaw } from 'vue-router';

const errorRoute: Array<RouteRecordRaw> = [
    {
      path: '/404',
      name: 'NotFound',
      meta: {
        title: '404'
      },
      component: () => import('@/views/NotFound/index.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
];

export default errorRoute;