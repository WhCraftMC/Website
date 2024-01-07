import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import mainRoute from './routers/mainRouters';
import errorRoute from './routers/errorRouters';
import { log } from 'console';

const routes: Array<RouteRecordRaw> = [
  ...mainRoute,
  ...errorRoute
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' | WhCraft';
  } else {
    document.title = 'None | WhCraft';
  }

  if (to.meta.description) {
    //document.meta.description = to.meta.description;
    console.log("");
    
  }
  next();
});

export default router;
