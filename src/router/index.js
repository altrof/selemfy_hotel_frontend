import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BackendTestHealthDataView from '@/views/DataView/BackendTestHealthDataView.vue'
import RoomsDataView from '@/views/DataView/RoomsDataView.vue'
import TableView from '@/views/TableView.vue'

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
      // lazy load
      component: () => RoomsDataView
    },
    {
      path: '/backend-health',
      name: 'Backend Health',
      // lazy load
      component: () => BackendTestHealthDataView
    },
    {
      path: '/table-view',
      name: 'Table',
      // lazy load
      component: TableView
    }
  ]
})

export default router
