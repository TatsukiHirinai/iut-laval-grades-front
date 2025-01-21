import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue'),
    },
    {
      path: '/students/add',
      name: 'addstudent',
      component: () => import('../views/students/AddStudentView.vue'),
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/students/ListStudentView.vue'),
    },
    {
      path: '/students/:id',
      name: 'getstudent',
      component: () => import('../views/students/GetStudentView.vue'),
    },
    {
    path: '/connection',
    name: 'connection',
    component: () => import('../views/ConnectionView.vue'),
    },
  ],
})

export default router
