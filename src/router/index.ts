import { createRouter, createWebHistory } from 'vue-router'
import  CurrentHomeView from '../views/CurrentHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CurrentHomeView
    },
  ]
})

export default router
