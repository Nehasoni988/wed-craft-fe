import { createRouter, createWebHistory } from 'vue-router'

import QR from "@/views/QR.vue"
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/qr',
      name: 'qr',
      component: QR,
    },
  ],
})

export default router
