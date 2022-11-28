import { defineStore } from "pinia";
import { ref } from "vue";
import { getAvailableRooms } from "@/services/modules/RoomsAPI";

export const useRoomsStore = defineStore("Rooms", () => {
    const responseData = ref(null);
    const apiUrl = ref(null);

    getAvailableRooms('2026-12-22', '2026-12-24')
         .then(response => {
             responseData.value = response;
             apiUrl.value = response.config.baseURL + response.config.url;
         })

    return {
        responseData,
        apiUrl
    }
})