import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TestesView from '@/views/TestesView.vue'
import PortfolioTesteView from '@/views/PortfolioTesteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testes',
      name: 'testes',
      component: TestesView
    },
    {
      path: '/portifolio',
      name: 'portifolio',
      component: PortfolioTesteView
    },
  ]
})

export default router
