<script setup>
import Navbar from "@/components/_organisms/Navbar";
import BaseButton from "@/components/_atoms/BaseButton/BaseButton.vue"
import ContentWrapper from '@/components/_molecules/ContentWrapper/ContentWrapper.vue'
import { RouterLink } from 'vue-router'
import {onMounted, ref} from 'vue';

const isRoomsAvailable = ref(false);
const roomOffers = ref(['Economy', 'Regular', 'Deluxe', 'Family']);

const roomsAreAvailable = () => {
  isRoomsAvailable.value = true;
}

onMounted(() => {
  roomsAreAvailable();

} )
</script>


<template>
  <slot>
    <Navbar />
  </slot>
  <ContentWrapper>
    <div>
    <p v-if="isRoomsAvailable">Please  choose your room type:</p>
    <p class="flex place-content-around" v-else>No rooms available for this date</p>
    </div>
    <div class="flex flex-wrap place-content-around"
         v-for="roomOffer in roomOffers"
    >
      <h1 class="p-10 border-4 border-gray-200 rounded-lg m-2">{{roomOffer}}</h1>
      <!-- <RoomSelection :data="roomOffer" /> -->
    </div>
    <div class="float-right">
      <RouterLink to="/">
        <BaseButton text-content="cancel"></BaseButton>
      </RouterLink>
    </div>

  </ContentWrapper>



</template>


<style scoped>
.bottomright {
  position: absolute;
  bottom: 8px;
  right: 16px;
  font-size: 18px;
}
</style>