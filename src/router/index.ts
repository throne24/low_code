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
      redirect: '/materials/choice',
      component: () => import('@/views/MaterialsView/index.vue'),
      children: [
        {
          path: 'choice',
          name: 'materials-choice',
          component: () => import('@/views/MaterialsView/ChoiceView.vue'),
        },
        {
          path: 'text',
          name: 'materials-text',
          component: () => import('@/views/MaterialsView/TextInputView.vue'),
        },
        {
          path: 'advanced',
          name: 'materials-advanced',
          component: () => import('@/views/MaterialsView/AdvancedView.vue'),
        },
        {
          path: 'note',
          name: 'materials-note',
          component: () => import('@/views/MaterialsView/NoteView.vue'),
        },
        {
          path: 'profile',
          name: 'materials-profile',
          component: () => import('@/views/MaterialsView/ProfileView.vue'),
        },
        {
          path: 'contact',
          name: 'materials-contact',
          component: () => import('@/views/MaterialsView/ContactView.vue'),
        },
      ],
    },
  ],
})

export default router

