import { createRouter, createWebHashHistory } from 'vue-router'
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

// 导航守卫
router.beforeEach((to) => {
  const token = localCache.getCache('token')
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  if (to.path === '/login' && token) {
    return '/main'
  }
})

export default router
