import { defineStore } from "pinia";
import { ref } from "vue";
import { getAvailableRooms } from "@/services/modules/RoomsAPI";

export const useRoomsStore = defineStore("Rooms", () => {
    const availableRoomsData = ref(null);
    const apiUrl = ref(null);

    /* 
        This function is repurposed from booking store
        as is conceptually more appropriate to check for availabilities
        in the rooms store.  
    */
    async function checkRoomAvailability(startDate, endDate) {
        if (startDate !== null && endDate !== null) {
            getAvailableRooms(startDate, endDate)
            .then(response => {
                availableRoomsData.value = response;
                apiUrl.value = response.config.baseURL + response.config.url;
                console.log(availableRoomsData.value);
            })
        }
    }

    return {
        checkRoomAvailability,
        availableRoomsData,
        apiUrl
    }
})