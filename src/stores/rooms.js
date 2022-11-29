import { defineStore } from "pinia";
import { ref } from "vue";
import { getAvailableRooms } from "@/services/modules/RoomsAPI";
import router from "@/router/index.js";

export const useRoomsStore = defineStore("Rooms", () => {
  const roomsViewData = ref(null);
  const availableRoomsData = ref(null);
  const apiUrl = ref(null);

  /* 
        This function is repurposed from booking store
        as is conceptually more appropriate to check for availabilities
        in the rooms store.  
    */
  async function checkRoomAvailability(
    startDate,
    endDate,
    adult,
    children,
    roomType
  ) {
    if (startDate !== null && endDate !== null) {
      getAvailableRooms(startDate, endDate, adult, children, roomType).then(
        (response) => {
          availableRoomsData.value = response;
          apiUrl.value = response.config.baseURL + response.config.url;
          router.push("/booking");
        }
      );
    }
  }

  roomsViewData.value = [
    { roomType: "REGULAR", roomSize: 20 },
    { roomType: "DELUXE", roomSize: 35 },
    { roomType: "ECONOMY", roomSize: 16 },
    { roomType: "KING", roomSize: 46 },
  ];

  return {
    checkRoomAvailability,
    roomsViewData,
    availableRoomsData,
    apiUrl,
  };
});
