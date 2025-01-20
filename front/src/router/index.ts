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
      path: '/students/add',
      name: 'addstudent',
      component: () => import('../views/students/AddStudentView.vue'),
    //{
    //  path: '/about',
    //  name: 'about',
    //  component: () => import('../views/AboutView.vue'),
    //},
    {
    path: '/connection',
    name: 'connection',
    component: () => import('../views/ConnectionView.vue'),
    },
  ],
})

export default router
