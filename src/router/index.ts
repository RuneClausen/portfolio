import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('@/views/CvView.vue')
    },
  ],
});

export default router;
