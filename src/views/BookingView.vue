<script setup>
import Navbar from "@/components/_organisms/Navbar/Navbar.vue";
import ContentWrapper from "@/components/_molecules/ContentWrapper/ContentWrapper.vue";
import RoomSelection from "@/components/_organisms/RoomSelection/RoomSelection.vue";
import PersonRegistration from "@/components/_molecules/PersonRegistration/PersonRegistration.vue";
import BaseButton from "@/components/_atoms/BaseButton/BaseButton.vue";

import { useBookingStore } from "@/stores/booking.js";
const { chosenRoom, amountAdults, amountChildren, submitBooking } =
  useBookingStore();
</script>

<template>
  <Navbar />
  <ContentWrapper>
    <p>I am booking view</p>
    
    <div v-if="useBookingStore().chosenRoom === null">
      <RoomSelection />    
    </div>
    <div v-else> 
        <div v-for="n in amountAdults + amountChildren">
          <PersonRegistration />
    </div>
      <BaseButton textContent="Submit" @click-handler="submitBooking()" />
    </div>
  </ContentWrapper>
</template>

<style scoped>
p {
  padding: 50px 0 50px 0;
}
</style>
