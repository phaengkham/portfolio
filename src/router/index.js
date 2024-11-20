import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loadingSpinner',
      component: LoadingSpinner,
    },
  ],
})

export default router
