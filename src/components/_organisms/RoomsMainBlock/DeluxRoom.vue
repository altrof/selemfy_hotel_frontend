<script setup>

</script>

<template>
  <div class="grid-container pb-10 ">
    <div class="grid-child">
      <img src="@/assets/img/slider-imgs/hero-1.jpg" alt="Snow" style="width:100%">
    </div>
    <div class="grid-child">
      <img src="@/assets/img/slider-imgs/hero-2.jpg" alt="Forest" style="width:100%">
    </div>
  </div>

  <div class="grid-container pb-16">
    <div class="grid-child purple">
      <p>Our single rooms are located on the top floor of the building. Some rooms provide spectacular views of Toompea castle
        and Old town.  Bed size: 120 cm</p>
    </div>
    <div class="grid-child green">
      <p>
        <strong>Size:</strong>
        &nbsp;9-11 m2&nbsp;
      </p>
      <p><strong>Rooms feature:</strong>
        &nbsp;
        <span class="fa"></span>
        &nbsp;
        <span class="fa"></span>
        &nbsp;
        <span class="fa"></span>
      </p>
      <li>
        mini-bar, safe,&nbsp;hair dryer,&nbsp;flat-screen TV,&nbsp;writing table.</li>
    </div>

  </div>
  <div class="text-center pb-5">
    <router-link class="rounded-md text-xl px-16 py-3 book-now" to="/" tag="button">BOOK NOW</router-link>

  </div>
  <hr class="new1 pb-10">


  <div ></div>
</template>

<style lang="scss" scoped>

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px
}

hr.new1 {
  border-top: 1px solid black;
}

.book-now {
  align-items: center;
  justify-content: center;
  background-color: #e7e7e7;
  font-weight: 500;
  color: #000;
  list-style: none;
  text-decoration: none;
  border: 2px solid saddlebrown;
  &:hover {
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  }
}

</style>