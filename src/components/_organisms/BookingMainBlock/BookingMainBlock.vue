<script setup>
import BookingForm from '@/components/_molecules/BookingForm/BookingForm.vue';
const carouselSlides = ["src/assets/img/slider-imgs/hero-1.jpg",
                        "src/assets/img/slider-imgs/hero-2.jpg",
                        "src/assets/img/slider-imgs/hero-3.jpg"];
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide} from 'vue3-carousel'
</script>

<template>
  <div data-testid="main-block" class="main-block">
    <BookingForm class="booking-form" />
      <div>
        <carousel :autoplay="10000" :itemsToShow="1" :transition="700" :wrapAround="true" :pauseAutoplayOnHover="false">
          <slide v-for="slide in carouselSlides" :key="slide">
            <img :src="slide" alt="" />
          </slide>
        </carousel>
      </div>
  </div>
</template>

<style scoped>
.main-block {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

}

.booking-form {
  position: absolute;
  display: flex;
  padding: 10px;
  width: 70%;
  justify-content: center;
  z-index: 1;
}

</style>