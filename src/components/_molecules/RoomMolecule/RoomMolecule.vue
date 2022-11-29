<script setup>
import { ref, inject } from "vue";
import VueEasyLightbox, { useEasyLightbox } from "vue-easy-lightbox";

const $image = inject('$image')

const props = defineProps({
  room: String,
  roomData: Object,
  styleImgsBlock: String,
  images: Array
});


const roomsViewData = [
        { roomType: 'REGULAR', roomSize: 20},
        { roomType: 'DELUXE', roomSize: 35},
        { roomType: 'ECONOMY', roomSize: 16},
        { roomType: 'KING', roomSize: 46},
    ]
const imgUrl = ref(null);

const imgArr = ref([]);

const { visibleRef, indexRef, imgsRef } = useEasyLightbox({
  imgs: [
    props.images
  ],
});

const showImg = (roomImgId) => {
  indexRef.value = roomImgId;
  imgArr.value = imgsRef.value[0];
  visibleRef.value = true;
};

</script>

<template>
    <div v-bind="$attrs">
      <hr class="new1 pb-10" />
      <h1 class="font">{{ room }}</h1>
      <div class="pb-10">
        <div class="grid grid-cols-2 gap-2">
          <img
            class="object-cover w-fit h-full cursor-pointer"
            :src="imgsRef[0][0]"
            @click="() => showImg(0)"
            alt="room"
          >
          <div class="grid grid-cols-2 grid-rows-2 gap-2">
            <div v-for="(roomImg, roomImgId) in imgsRef[0].slice(1)">
              <img
                class="object-cover w-full h-64 cursor-pointer"
                :src="roomImg"
                alt="Room"
                @click="() => showImg(roomImgId+1)"
              />
            </div>
          </div>
        </div>

        <vue-easy-lightbox
          :visible="visibleRef"
          :index="indexRef"
          :imgs="imgArr"
          :scroll-disabled="false"
          @hide="visibleRef = false"
        />
      </div>

      <div class="containerHead pb-16">
        <div class="item">
          <p>
            Our luxurious {{ room.toLowerCase() }} suite is the pinnacle of an
            amalgamation between traditional hospitality and modern amenities.
            If you were to spend a day doing absolutely nothing, taking in the
            majestic seascape outdoors, this suite would let you do just that
          </p>
        </div>
        <div class="item">
          <p>
            <strong>Size:</strong>
            &nbsp;{{ roomData.size }} m2&nbsp;
          </p>
          <p>
            <strong>Beds:</strong>
            &nbsp;{{ roomData.numberOfBeds }} &nbsp;
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
    </div>
</template>

<style lang="scss" scoped>

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
}

.column {
  float: left;
  width: 50%;
  padding: 10px;
}

.container {
  display: flex;
  align-content: stretch;
  justify-content: center;
  max-height: 700px;
  max-width: 800px;
}

.containerHead {
  display: flex;
  gap: 110px;
}

.item {
  flex-basis: 100%;
}

.font {
  font-family: "Monotype Corsiva", serif;
  font-size: 4vw;
  color: #d9d9d9;
  text-shadow: 1px 1px 1px black;
  text-align: center;
}
</style>
