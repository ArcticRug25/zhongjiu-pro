import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/product/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes]
})

export default router
