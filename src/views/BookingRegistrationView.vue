<script setup>
import Navbar from "@/components/_organisms/Navbar/Navbar.vue";
import ContentWrapper from "@/components/_molecules/ContentWrapper/ContentWrapper.vue";
import PersonRegistration from "@/components/_molecules/PersonRegistration/PersonRegistration.vue";
import RoomSelection from "@/components/_organisms/RoomSelection/RoomSelection.vue";
import BaseButton from "@/components/_atoms/BaseButton/BaseButton.vue";
import { useBookingStore } from "@/stores/booking.js";
import { onMounted } from "vue";

const { chosenRoom, amountAdults, amountChildren, submitBooking } =
  useBookingStore();
/*
function submitBooking() {
  console.log(`Submit booking for ${chosenRoom.id}`)
}*/

onMounted(() => {
  console.log(chosenRoom);
  console.log(amountAdults);
  console.log(amountChildren);
});
</script>

<template>
  <Navbar />
  <ContentWrapper>
    <p>Registration</p>
    <div v-for="n in amountAdults + amountChildren">
      <PersonRegistration />
    </div>
    <BaseButton textContent="Submit" @click-handler="submitBooking()" />
  </ContentWrapper>
</template>

<style scoped>
p {
  padding: 50px 0 50px 0;
}
</style>
