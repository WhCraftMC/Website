import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' | WhCraft';
  } else {
    document.title = 'None | WhCraft';
  }
  next();
});

export default router
