import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('../views/TimelineVue.vue'),
    },
    {
      path: '/grid-cards',
      name: 'grid cards',
      component: () => import('../views/GridCardsVue.vue'),
    },
    {
      path: '/side-menu',
      name: 'side-menu',
      component: () => import('../views/SideMenuVue.vue'),
    },
    {
      path: '/folding-panel',
      name: 'folding-panel',
      component: () => import('../views/FoldingPanelVue.vue'),
    },
  ],
})

export default router
