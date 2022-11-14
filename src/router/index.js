import { createRouter, createWebHistory } from 'vue-router'
import MainHotelView from '@/views/MainHotelView.vue'
import RoomsView from '@/views/RoomsView.vue'
import SpecialOffersView from '@/views/SpecialOffersView.vue'
import LoyaltyView from '@/views/LoyaltyView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import BackendTestHealthDataView from '@/views/DataView/BackendTestHealthDataView.vue'
import RoomsDataView from '@/views/DataView/RoomsDataView.vue'
import RoomsTableView from '@/views/DataView/RoomsTableView.vue'
import PersonTableView from '@/views/DataView/PersonTableView.vue'
import DataMainView from '@/views/DataView/DataMainView.vue'
import Examples from '@/components/Examples.vue'
import TestingView from '@/views/TestingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hotel',
      component: MainHotelView
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomsView
    },
    {
      path: '/special-offers',
      name: 'special-offers',
      component: SpecialOffersView
    },
    {
      path: '/loyalty',
      name: 'loyalty',
      component: LoyaltyView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView
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
    },
    {
      path: '/data/person-table',
      name: 'person-table',
      component: PersonTableView
    },
    {
      path: '/data/rooms-table',
      name: 'Rooms Table',
      // lazy load
      component: () => RoomsTableView
    },
    {
      path: '/testing-view',
      name: 'Testing View',
      // lazy load
      component: () => TestingView
    }
  ]
})

export default router
