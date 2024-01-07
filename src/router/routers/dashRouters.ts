import type { RouteRecordRaw } from 'vue-router';

const dashRoute: Array<RouteRecordRaw> = [
    {
        path: '/dash',
        name: 'dash',
        meta: {
          title: '用户中心',
        },
        component: () => import('@/views/dash/index.vue')
    },
    {
        path: '/dash/auth',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () => import('@/views/dash/views/auth/index.vue')
    }
];

export default dashRoute;