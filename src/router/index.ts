import { createRouter, createWebHistory } from 'vue-router'
//路由配置
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/EditorView/index.vue'),
    },
    {
      path: '/materials',
      name: 'materials',
      component: () => import('@/views/MaterialsView/index.vue'),
    },
  ],
})

export default router

