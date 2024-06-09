import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import ProfileViewPersonal from '../views/ProfileViewPersonal.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/profile',
      name: 'profilePersonal',
      component: ProfileViewPersonal
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router
