<script setup>
import Navbar from "@/components/_organisms/Navbar/Navbar.vue";
import ContentWrapper from "@/components/_molecules/ContentWrapper/ContentWrapper.vue";
import RoomSelection from "@/components/_organisms/RoomSelection/RoomSelection.vue";

import { useBookingStore } from "@/stores/booking.js";
const { chosenRoom } = useBookingStore();
</script>

<template>
  <Navbar />
  <ContentWrapper>
    <p>I am booking view</p>
    <!--
    <div v-if="chosenRoom === null">
        </div>
    -->

    <RoomSelection />

    <!--TODO: does not toggle on value change
    <div v-else> 
      <p>Room has been chosen</p>
    </div> -->
  </ContentWrapper>
</template>

<style scoped>
p {
  padding: 50px 0 50px 0;
}
</style>
