<script setup>
<<<<<<< HEAD
import { RouterView } from "vue-router";
import Navbar from "@/components/_organisms/Navbar";
import LoremIpsum from "@/components/_atoms/LoremIpsum/LoremIpsum.vue";
import BookingMainBlock from "@/components/_organisms/BookingMainBlock";
import ContentWrapper from "@/components/_molecules/ContentWrapper/ContentWrapper.vue";
=======
import { RouterView } from 'vue-router'
import Navbar from "@/components/_organisms/Navbar/Navbar.vue";
import LoremIpsum from "@/components/_atoms/LoremIpsum/LoremIpsum.vue";
import BookingMainBlock from "@/components/_organisms/BookingMainBlock/BookingMainBlock.vue";
import ContentWrapper from '@/components/_molecules/ContentWrapper/ContentWrapper.vue';


>>>>>>> dev
</script>

<template>
  <slot>
    <Navbar />
  </slot>

  <div class="pt-28">
    <BookingMainBlock class="main-block" />
  </div>
  <ContentWrapper>
    <LoremIpsum />
    <LoremIpsum />
    <LoremIpsum />
  </ContentWrapper>

  <RouterView />
</template>

<style lang="scss">
.main-block {
  @media (max-width: 750px) {
    display: flex;
    height: 80vh;
  }
}
</style>
