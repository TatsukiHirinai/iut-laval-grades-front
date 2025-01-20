import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/grades',
      name: 'grades',
      component: () => import('../views/grades/GradesPage.vue')
    }
  ],
})

export default router
