import { createRouter, createWebHistory } from "vue-router";
import MainHotelView from "@/views/MainHotelView.vue";
import RoomsView from "@/views/RoomsView.vue";
import SpecialOffersView from "@/views/SpecialOffersView.vue";
import LoyaltyView from "@/views/LoyaltyView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import RoomSelectionView from "@/views/RoomSelectionView.vue"
import RegistrationView from '@/views/RegistrationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "hotel",
      component: MainHotelView,
    },
    {
      path: "/rooms",
      name: "rooms",
      component: RoomsView,
    },
    {
      path: "/special-offers",
      name: "special-offers",
      component: SpecialOffersView,
    },
    {
      path: "/loyalty",
      name: "loyalty",
      component: LoyaltyView,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUsView,
    },
    {
      path: "/room-selection",
      name: "room-selection",
      component: () => RoomSelectionView,
    },
    {
      path: "/signup",
      name: "signup",
      component: RegistrationView
    }
  ],
});

export default router;
