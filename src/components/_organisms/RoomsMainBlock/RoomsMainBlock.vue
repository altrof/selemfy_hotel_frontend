<script setup>

</script>

<template>
  <div data-testid="main-block" class="main-block" >
  </div>

  <div class="hero-image">
    <div class="hero-text">
      <h1 class="h1" >Rooms & Suits</h1>
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

.hero-image {
  background-image: url("@/assets/img/rooms-images/hero-1.jpg");
  height: 700px;
  background-position: center;
  background-size: cover;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 450px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.h1 {
  font-family: "Monotype Corsiva", serif;
  font-size: 100px;
  color: #d9d9d9;
  text-shadow: 1px  1px 3px black;
}
</style>