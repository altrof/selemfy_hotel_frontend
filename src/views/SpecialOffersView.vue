<script setup>
import Navbar from '@/components/_organisms/Navbar/Navbar.vue';
import BookingMainBlock from '@/components/_organisms/BookingMainBlock/BookingMainBlock.vue';
import ContentWrapper from '@/components/_molecules/ContentWrapper/ContentWrapper.vue'
import LoremIpsum from "@/components/_atoms/LoremIpsum/LoremIpsum.vue";
import LoginWindow from "@/components/_organisms/LoginWindow/LoginWindow.vue";
</script>

<template>
  <Navbar />
  <ContentWrapper>
    <p>Special Offers</p>
    <img src="@/assets/img/service-imgs/champagne.jpeg" alt="Champagne">
  </ContentWrapper>
</template>

<style scoped>
p {
  padding: 50px 0 50px 0;
}
</style>