<script setup>
import Navbar from '@/components/_organisms/Navbar/Navbar.vue';
import Product from '@/components/_organisms/Product/Product.vue';
import ContentWrapper from '@/components/_molecules/ContentWrapper/ContentWrapper.vue'

const products = [
      {name: 'Parking', image: "parking.webp"}, 
      {name: 'Champagne', image: "champagne.jpeg"}, 
      {name: 'Shuttle', image: "shuttle.png"}
      ]
const imagesDir = "service-imgs"
</script>

<template>
  <Navbar />
  <ContentWrapper>
    <p>Special Offers</p>
    <div class="flex flex-wrap place-content-around" >
        <Product v-for="(product) in products" :key="product" :product-name="product.name" product-description="Enjoy this wonderful special offer on our behalf" :file-name="product.image" :dir-name="imagesDir"/>
    </div>
  </ContentWrapper>
</template>

<style scoped>


p {
  padding: 50px 0 50px 0;
}
</style>