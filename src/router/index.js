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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/teamregistration',
      name: 'teamregistration',
      component: () => import('../g-app-pages/TeamRegistration.vue')
    },
    {
      path: '/teamownerprofile',
      name: 'teamownerprofile',
      component: () => import('../g-app-pages/TeamOwnerProfile.vue')
    },
    {
      path: '/dsistform',
      name: 'dsistform',
      component: () => import('../g-app-pages/DSISTForm.vue')
    },
    {
      path: '/dsistmatchid',
      name: 'dsistmatchid',
      component: () => import('../g-app-pages/DSISTMatchId.vue')
    },
    {
      path: '/dsiststart',
      name: 'dsiststart',
      component: () => import('../g-app-pages/DSISTStart.vue')
    }
  ]
})

export default router
