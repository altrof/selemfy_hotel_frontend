import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BackendTestHealthDataView from '@/views/DataView/BackendTestHealthDataView'
import RoomsDataView from '@/views/DataView/RoomsDataView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: () => RoomsDataView
    },
    {
      path: '/backendHealth',
      name: 'Backend Health',
      component: () => BackendTestHealthDataView
    }
  ]
})

export default router
