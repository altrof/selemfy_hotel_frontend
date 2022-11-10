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

    responseData.value = RoomsAPI.getAllRooms()

    return {
        responseData,
        apiUrl
    }
})