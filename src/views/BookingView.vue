<script setup>
import Navbar from "@/components/_organisms/Navbar/Navbar.vue";
import ContentWrapper from "@/components/_molecules/ContentWrapper/ContentWrapper.vue";
import RoomSelection from "@/components/_organisms/RoomSelection/RoomSelection.vue";
</script>

<template>
  <Navbar />
  <ContentWrapper>
    <p>I am booking view</p>
    <RoomSelection />
  </ContentWrapper>
</template>

<style scoped>
p {
  padding: 50px 0 50px 0;
}
</style>
