<script setup>
import Navbar from "@/components/_organisms/Navbar/Navbar.vue";
import ContentWrapper from '@/components/_molecules/ContentWrapper/ContentWrapper.vue';
import LoremIpsum from "@/components/_atoms/LoremIpsum/LoremIpsum.vue";
import RoomsMainBlock from "@/components/_organisms/RoomsMainBlock/RoomsMainBlock.vue";
import SingelRoom from "@/components/_organisms/RoomsMainBlock/SingelRoom.vue";
import DeluxRoom from "@/components/_organisms/RoomsMainBlock/DeluxRoom.vue";

const text = "TEST";
</script>

<template>
  <slot>
    <Navbar />
  </slot>

  <RoomsMainBlock class="main-block" />
  <ContentWrapper>
    <SingelRoom />
    <DeluxRoom />
    <LoremIpsum />
  </ContentWrapper>
</template>

<style scoped>
.main-block {
  padding-top: 100px;
}
</style>