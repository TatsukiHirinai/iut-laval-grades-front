import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/grades',
      name: 'grades',
      component: () => import('../views/grades/GradesPage.vue')
    },
    {
      path: '/grades/new',
      name: 'addGrade',
      component: () => import('../views/grades/AddGradePage.vue')
    }
  ],
})

export default router
