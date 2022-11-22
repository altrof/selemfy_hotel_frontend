import { defineStore } from "pinia";
import { ref } from "vue";
import RoomsAPI from "@/services/modules/RoomsAPI";

export const useRoomsStore = defineStore("Rooms", () => {
    const responseData = ref(null);
    const apiUrl = ref(null);

    // RoomsAPI.getAllRooms()
    //     .then(response => {
    //         responseData.value = response;
    //         apiUrl.value = response.config.baseURL + response.config.url;
    //     })

    responseData.value = [
        { roomType: 'REGULAR', roomSize: 20},
        { roomType: 'DELUX', roomSize: 35},
        { roomType: 'ECONOMY', roomSize: 16},
        { roomType: 'KING', roomSize: 46},
    ]

    return {
        responseData,
        apiUrl
    }
})