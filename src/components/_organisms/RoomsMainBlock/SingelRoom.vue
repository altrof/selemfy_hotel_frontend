<script setup>
import { ref } from "vue";
import VueEasyLightbox, { useEasyLightbox } from "vue-easy-lightbox";
import { useRoomsStore } from "@/stores/rooms";
import { storeToRefs } from "pinia";

const { visibleRef, indexRef, imgsRef } = useEasyLightbox({
  imgs: [],
  initIndex: 0,
});

const img = ref(null);

const showImg = (id) => {
  indexRef.value = id;
  img.value = imgsRef.value[id];
  visibleRef.value = true;
};

const { responseData } = storeToRefs(useRoomsStore());

const deluxRoomImages = [
  "src/assets/img/rooms-images/delux-room-images/delux-room-1.jpg",
  "src/assets/img/rooms-images/delux-room-images/delux-room-2.jpg",
  "src/assets/img/rooms-images/delux-room-images/delux-room-3.jpg",
  "src/assets/img/rooms-images/delux-room-images/delux-room-4.jpg",
  "src/assets/img/rooms-images/delux-room-images/delux-room-5.jpg",
];

const regularRoomImages = [
  "src/assets/img/rooms-images/regular-room-images/regular-room-1.jpg",
  "src/assets/img/rooms-images/regular-room-images/regular-room-2.jpg",
  "src/assets/img/rooms-images/regular-room-images/regular-room-3.jpg",
  "src/assets/img/rooms-images/regular-room-images/regular-room-4.jpg",
  "src/assets/img/rooms-images/regular-room-images/regular-room-5.jpg",
];

const economyRoomImages = [
  "src/assets/img/rooms-images/economy-room-images/economy-room-1.jpg",
  "src/assets/img/rooms-images/economy-room-images/economy-room-2.jpg",
  "src/assets/img/rooms-images/economy-room-images/economy-room-3.jpg",
  "src/assets/img/rooms-images/economy-room-images/economy-room-4.jpg",
];

const kingRoomImages = [
  "src/assets/img/rooms-images/king-room-images/king-room-1.jpg",
  "src/assets/img/rooms-images/king-room-images/king-room-2.jpg",
  "src/assets/img/rooms-images/king-room-images/king-room-3.jpg",
  "src/assets/img/rooms-images/king-room-images/king-room-4.jpg",
  "src/assets/img/rooms-images/king-room-images/king-room-5.jpg",
];

function switchBetweenImages(str) {
  if (str === "REGULAR") imgsRef.value = regularRoomImages;
  else if (str === "DELUX") imgsRef.value = deluxRoomImages;
  else if (str === "ECONOMY") imgsRef.value = economyRoomImages;
  else if (str === "KING") imgsRef.value = kingRoomImages;
  else imgsRef.value = deluxRoomImages;
}
</script>

<template>
  <div v-for="room in responseData">
    <div class="row pb-10">
      {{ switchBetweenImages(room.roomType) }}
      <div class="column">
        <img
          class="img-cat"
          :src="imgsRef[0]"
          alt="Room"
          style="width: 100%"
          @click="() => showImg(0)"
        />
      </div>
      <div class="column">
        <img
          class="img-cat"
          :src="imgsRef[3]"
          alt="Room"
          style="width: 100%"
          @click="() => showImg(3)"
        />
      </div>

      <vue-easy-lightbox
        :visible="visibleRef"
        :index="indexRef"
        :imgs="imgsRef"
        @hide="visibleRef = false"
      ></vue-easy-lightbox>
    </div>

    <div class="grid-container pb-16">
      <div class="grid-child purple">
        <p>
          sadasdasdasdsdsadasdasdsadasdasasasasa
          sasasasasasasasasasasasasasasasasasasasasasasasasasasasasas
        </p>
      </div>

      <div class="grid-child green">
        <p>
          <strong>Size:</strong>
          &nbsp;{{ room.size }} m2&nbsp;
        </p>
        <p>
          <strong>Rooms feature:</strong>
          &nbsp;
          <span class="fa"></span>
          &nbsp;
          <span class="fa"></span>
          &nbsp;
          <span class="fa"></span>
        </p>
        <li>mini-bar, safe, hair dryer, flat-screen TV, writing table.</li>
      </div>
    </div>

    <div class="text-center pb-16">
      <router-link
        class="rounded-md text-xl px-16 py-3 book-now"
        to="/"
        tag="button"
        >BOOK NOW</router-link
      >
    </div>

    <hr class="new1 pb-10" />

    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.row {
  display: flex;
}

.column {
  flex: 50%;
  padding: 5px;
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

.img-cat {
  width: 200px;
  margin-right: 20px;
}
</style>
