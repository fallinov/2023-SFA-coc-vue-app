import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fiche-troupe/:id',
      name: 'fiche-troupe',
      component: () => import('../views/FicheTroupeView.vue')
    }
  ]
})

export default router
