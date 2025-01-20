import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue'),
    },
    {
      path: '/connection',
      name: 'connection',
      component: () => import('../views/ConnectionView.vue'),
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
      path: '/students/add',
      name: 'addstudent',
      component: () => import('../views/students/AddStudentView.vue'),
    },
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
