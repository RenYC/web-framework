import { createRouter, createWebHashHistory } from 'vue-router'
import { firstRoute, mapMenuToRoutes } from '@/utils/map-menu'
import { localCache } from '@/utils/cache'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系: path => component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('@/views/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})

export function addRoutesWithMenu(menus: any) {
  // 1.获取匹配到的所有的路由
  const routes = mapMenuToRoutes(menus)

  // 2.动态添加到router中
  for (const route of routes) {
    router.addRoute('main', route)
  }
}

// 导航守卫
router.beforeEach((to) => {
  const token = localCache.getCache('token')
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  if (to.path === '/login' && token) {
    return '/main'
  }
  if (to.path === '/main' && firstRoute) {
    return firstRoute.path
  }
})

export default router
