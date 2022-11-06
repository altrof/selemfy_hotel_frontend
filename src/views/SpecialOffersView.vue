<script setup>
import Navbar from '@/components/_organisms/Navbar/Navbar.vue';
import Product from '@/components/_organisms/Product/Product.vue';
import ContentWrapper from '@/components/_molecules/ContentWrapper/ContentWrapper.vue'

const imagesDir = "service-imgs"
const parkingImage = "parking.webp"
const champagneImage = "champagne.jpeg"
</script>

<template>
  <Navbar />
  <ContentWrapper>
    <p>Special Offers</p>
    <div class="flex flex-wrap place-content-around">
        <Product :fileName="parkingImage" :dirName="imagesDir"/>
        <Product :fileName="champagneImage" :dirName="imagesDir"/>
        <Product :fileName="champagneImage" :dirName="imagesDir"/>
        <Product :fileName="champagneImage" :dirName="imagesDir"/>
        <Product :fileName="champagneImage" :dirName="imagesDir"/>
        <Product :fileName="champagneImage" :dirName="imagesDir"/>
        <Product :fileName="champagneImage" :dirName="imagesDir"/>
    </div>
  </ContentWrapper>
</template>

<style scoped>


p {
  padding: 50px 0 50px 0;
}
</style>