import type { RouteRecordRaw } from 'vue-router';

const mainRoute: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        meta: {
          title: '官方网站'
        },
        component: () => import('@/views/index.vue')
      },
      {
        path: '/docs/about',
        name: 'about',
        meta: {
          title: '关于'
        },
        component: () => import('@/views/docs/about/index.vue')
      },
      {
        path: '/punish',
        name: 'punish',
        meta: {
          title: '处罚列表'
        },
        component: () => import('@/views/punish/index.vue')
      },
      {
        path: '/docs/join',
        name: 'join',
        meta: {
          title: '如何加入'
        },
        component: () => import('@/views/docs/join/index.vue')
      },
      {
        path: '/docs/getserverip',
        name: 'getserverip',
        meta: {
          title: '服务器要求'
        },
        component: () => import('@/views/docs/getserverip/index.vue')
      },
      {
        path: '/status',
        name: 'status',
        meta: {
          title: '服务器状态'
        },
        component: () => import('@/views/status/index.vue')
      }
];

export default mainRoute;