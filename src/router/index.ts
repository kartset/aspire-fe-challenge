import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DesktopHomeView from '../views/DesktopHomeView.vue'
import { isMobile } from '@/utils/helper'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: isMobile() ? HomeView : DesktopHomeView
    },
  ]
})

export default router
