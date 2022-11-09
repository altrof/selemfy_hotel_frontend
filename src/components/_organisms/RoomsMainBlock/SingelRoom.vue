<script setup>

</script>

<template>
  <hr class="new1">
  <div class="row">
    <div class="column">
      <img src="@/assets/img/slider-imgs/hero-1.jpg" alt="Snow" style="width:100%">
    </div>
    <div class="column">
      <img src="@/assets/img/slider-imgs/hero-2.jpg" alt="Forest" style="width:100%">
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 50%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
  padding-bottom: 30px;
}

hr.new1 {
  border-top: 1px solid black;
  padding-bottom: 20px;
}

</style>