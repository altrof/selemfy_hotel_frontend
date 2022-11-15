<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/_organisms/Navbar/Navbar.vue";
import LoremIpsum from "@/components/_atoms/LoremIpsum/LoremIpsum.vue";
import BookingMainBlock from "@/components/_organisms/BookingMainBlock/BookingMainBlock.vue";
import ContentWrapper from '@/components/_molecules/ContentWrapper/ContentWrapper.vue'


const text = "TEST";
</script>

<template>
  <slot>
    <Navbar />
  </slot>

  <BookingMainBlock class="main-block" />
  <ContentWrapper>
    <LoremIpsum />
    <LoremIpsum />
    <LoremIpsum />
  </ContentWrapper>

  <RouterView />
</template>

<style>
.main-block {
  padding-top: 100px;
}
</style>