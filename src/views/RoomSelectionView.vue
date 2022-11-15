<script setup>
import {onMounted, ref} from 'vue';
const isRoomsAvailable = ref(false);
const adultAmount = 2;
const childAmount = 0; // comes from booking form will fix later when bookingform is ready
const roomOffers = ref([]);
const roomTypes = ['Economy', 'Regular', 'Deluxe', 'Family'];
const roomsAreAvailable = () => {
  isRoomsAvailable.value = true;

}

const checkAvailability = () => {
  if (adultAmount > 0 && childAmount === 0) {
    roomOffers.value.push(roomTypes[0]);
    roomOffers.value.push(roomTypes[1]);
    roomOffers.value.push(roomTypes[2]);
  } else if (adultAmount === 2 && childAmount === 2) {
    roomOffers.value.push(roomTypes[3])
  }
  if (roomOffers.value.length > 0) {
    roomsAreAvailable();
  }
}
onMounted(() => {
  checkAvailability();

} )
</script>


<template>
  <div>
    <p v-if="isRoomsAvailable">Please  choose your room type:</p>
    <p v-else>No rooms available for this date</p>
  </div>
  <div v-for="roomOffer in roomOffers">
    <h1>{{roomOffer}}</h1>
  <!-- <RoomSelection :data="roomOffer" /> -->
  </div>
</template>


<style scoped>

</style>