<template>
  <div>
    <transition-group name='fade' tag='div'>
      <div v-for="i in [currentIndex]" :key='i'>
        <img :src="currentImg" alt=""/>
      </div>
    </transition-group>
    <a class="prev" @click="prev" href='#'>&#10094;</a>
    <a class="next" @click="next" href='#'>&#10095;</a>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      images: [
        "src/assets/img/slider-imgs/hero-1.jpg",
        "src/assets/img/slider-imgs/hero-2.jpg",
        "src/assets/img/slider-imgs/hero-3.jpg"
      ],
      timer: null,
      currentIndex: 0,
    }
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },


    next: function() {
      this.currentIndex += 1
    },
    prev: function() {
      this.currentIndex -= 1
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }

}
</script>

<style scoped>
/* removing style fixes the problem but looks bad (no fade transition) */
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
  overflow: hidden;
  visibility: visible;
  position: relative;
  opacity: 1;
  z-index: 1;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  opacity: 0;
}
</style>