<script setup>
import Navbar from "@/components/_organisms/Navbar/Navbar.vue";
import ContentWrapper from "@/components/_molecules/ContentWrapper/ContentWrapper.vue";
import PersonRegistration from "@/components/_molecules/PersonRegistration/PersonRegistration.vue";
import RoomSelection from "@/components/_organisms/RoomSelection/RoomSelection.vue";
import BaseButton from "@/components/_atoms/BaseButton/BaseButton.vue";

import { useBookingStore } from "@/stores/booking.js";
const { isRoomChosen } = useBookingStore();

</script> 

<template>
  <Navbar />
  <ContentWrapper>
    <p>Registration</p>
    <PersonRegistration />
  </ContentWrapper>
</template>

<style scoped>
p {
  padding: 50px 0 50px 0;
}
</style>
