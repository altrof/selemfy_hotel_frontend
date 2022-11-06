<script>
import Slider from '@/components/_atoms/Slider/Slider.vue';
export default {
  name: "slider-app",
  components: {
    Slider
  }
};
</script>

<script setup>
import BookingForm from '@/components/_molecules/BookingForm/BookingForm.vue';
</script>

<template>
  <div data-testid="main-block" class="main-block">
    <BookingForm class="booking-form" />
    <!-- ToDo: Create own slider (or you can use external library, such as VueSlider)-->
    <div id="slider-app">
      <Slider />
      <!-- <img src="@/assets/img/slider-imgs/hero-1.jpg" /> -->
      <!-- img src="@/assets/img/slider-imgs/hero-2.jpg" /> -->
      <!-- <img src="@/assets/img/slider-imgs/hero-3.jpg" /> -->
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
}
</style>