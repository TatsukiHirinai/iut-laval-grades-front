import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
