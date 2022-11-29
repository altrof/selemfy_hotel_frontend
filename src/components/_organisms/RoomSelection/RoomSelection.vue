<script setup>
import BaseButton from "@/components/_atoms/BaseButton/BaseButton.vue"
import ContentWrapper from '@/components/_molecules/ContentWrapper/ContentWrapper.vue'
import { RouterLink } from 'vue-router'
import RoomMolecule from "@/components/_molecules/RoomMolecule/RoomMolecule.vue";
import {onMounted, ref} from 'vue';
import { useRoomsStore } from "@/stores/rooms";
import { storeToRefs } from "pinia";

const isRoomsAvailable = ref(false);
const roomOffers = ref(['Economy', 'Regular', 'Deluxe', 'Family']); // will change based on what rooms are compatible

const { roomsViewData } = storeToRefs(useRoomsStore());

const roomTypes = ['REGULAR', 'DELUXE', 'ECONOMY', 'KING']

const roomsAreAvailable = () => {
  /*future check if any rooms are available*/
  isRoomsAvailable.value = true;
}

const roomsViewDataStatic = [
        { roomType: 'REGULAR', roomSize: 20},
        { roomType: 'DELUXE', roomSize: 35},
        { roomType: 'ECONOMY', roomSize: 16},
        { roomType: 'KING', roomSize: 46},
    ]


onMounted(() => {
  roomsAreAvailable();

} )
</script>


<template>
    <div>
    <p v-if="isRoomsAvailable">Please  choose your room type:</p>
    <p class="flex place-content-around" v-else>No rooms available for this date</p>
    </div>



    <div class="flex flex-wrap place-content-around"
         v-for="roomOffer in roomOffers">
      <!-- <RoomSelection :data="roomOffer" /> -->
        <RoomMolecule class="p-10 border-4 border-gray-200 rounded-lg m-2"
        room='REGULAR'
        :room-data="roomsViewDataStatic[0]"
      />
    </div>
    <div class="float-right">
      <RouterLink to="/">
        <BaseButton text-content="cancel"></BaseButton>
      </RouterLink>
    </div>
</template>


<style scoped>
</style>