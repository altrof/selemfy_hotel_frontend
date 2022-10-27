import { createRouter, createWebHistory } from 'vue-router'
import MainHotelView from '@/views/MainHotelView.vue'
import BackendTestHealthDataView from '@/views/DataView/BackendTestHealthDataView.vue'
import RoomsDataView from '@/views/DataView/RoomsDataView.vue'
import DataMainView from '@/views/DataView/DataMainView.vue'
import Examples from '@/components/Examples.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hotel',
      component: MainHotelView
    },
    {
      path: '/data',
      name: 'main',
      component: DataMainView
    },
    {
      path: '/data/examples',
      name: 'examples',
      component: Examples
    },
    {
      path: '/data/rooms',
      name: 'Rooms',
      // lazy load
      component: () => RoomsDataView
    },
    {
      path: '/data/backend-health',
      name: 'Backend Health',
      // lazy load
      component: () => BackendTestHealthDataView
    }
  ]
})

export default router
