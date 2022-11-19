<script setup>
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
import BaseInputCalendar from "@/components/_atoms/BaseInputCalendar/BaseInputCalendar.vue";
import {storeToRefs} from "pinia";
import {useBookingStore} from "@/stores/booking.js"
import ButtonWithLoader from "@/components/_atoms/ButtonWithLoader/ButtonWithLoader.vue";
import IncrementDecrementField from "@/components/_atoms/IncrementDecrementField/IncrementDecrementField.vue";
import BaseSelector from "@/components/_atoms/BaseSelector/BaseSelector.vue";
import { onMounted, ref } from "vue";

const {
  increaseAmountAdults,
  decreaseAmountAdults,
  increaseAmountChildren,
  decreaseAmountChildren,
  checkScreen,
  checkRoomAvailability } = useBookingStore()

const {
  checkIn, checkOut,
  amountChildren,
  amountAdults,
  bookingFormMob } = storeToRefs(useBookingStore());

const roomTypeOptions = ['Any', 'Economy', 'Regular', 'Deluxe', 'Family']
const selectedRoomTypeOption = ref('Any');


onMounted(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen();
});
</script>

<template>
  <div v-if="!bookingFormMob" data-testid="booking-form" class="flex inline p-0">
    <div class="dates">
      <BaseInputCalendar
          v-model="checkIn"
          placeholder="Nights"
          autocomplete="on"
          input-type="date"
          label="Check in"
      />
      <BaseInputCalendar
          v-model="checkOut"
          placeholder="Nights"
          autocomplete="on"
          input-type="date"
          label="Check out"
      />
    </div>
    <div class="pl-3">
      <IncrementDecrementField
        class="w-32"
        button-style="bg-sky-900 hover:bg-sky-700 text-white"
        label-text="Adults"
        :amount="amountAdults"
        @increase="increaseAmountAdults()"
        @decrease="decreaseAmountAdults()"
      />
      <IncrementDecrementField
        class="pt-6"
        button-style="bg-sky-900 hover:bg-sky-700 text-white"
        label-text="Children"
        :amount="amountChildren"
        @increase="increaseAmountChildren()"
        @decrease="decreaseAmountChildren()"
      />
  </div>
    <div class="h-full pl-10">
      <BaseSelector
        label-text="Room"
        button-style="bg-sky-900 hover:bg-sky-700 text-white"
        :options="roomTypeOptions"
        :selected-option="selectedRoomTypeOption"
      />
      <ButtonWithLoader
          class="w-40 h-24 mt-2"
          button-style="bg-sky-900 hover:bg-sky-700 border-r-0"
          @click="checkRoomAvailability()"
          button-text="Check availability"
      />
    </div>
  </div>
  <div v-else data-testid="booking-form" class="flex-col w-72 items-center">
    <div class="dates">
      <BaseInputCalendar
        class="w-52"
        v-model="checkIn"
        placeholder="Nights"
        autocomplete="on"
        input-type="date"
        label="Check in"
      />
      <BaseInputCalendar
        class="w-52"
        v-model="checkOut"
        placeholder="Nights"
        autocomplete="on"
        input-type="date"
        label="Check out"
      />
    </div>
    <div>
      <IncrementDecrementField
        label-text="Adults"
        class="w-52"
        button-style="bg-sky-900 hover:bg-sky-700 text-white"
        :amount="amountAdults"
        @increase="increaseAmountAdults()"
        @decrease="decreaseAmountAdults()"
      />
      <IncrementDecrementField
        class="pt-6 w-52"
        button-style="bg-sky-900 hover:bg-sky-700 text-white"
        label-text="Children"
        :amount="amountChildren"
        @increase="increaseAmountChildren()"
        @decrease="decreaseAmountChildren()"
      />
    </div>
    <div class="h-full">
      <BaseSelector
        class="pt-4 w-52"
        label-text="Room"
        :options="roomTypeOptions"
        :selected-option="selectedRoomTypeOption"
      />
      <ButtonWithLoader
        class="w-52 h-24 mt-2 mb-6"
        button-style="bg-sky-900 hover:bg-sky-700 border-r-0"
        @click="checkRoomAvailability()"
        button-text="Check availability"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.booking-form {
  background-color: rgb(255, 255, 255, 0.85);
  border: 1px solid black;
}
.dates {
  margin:0 20px 0 20px;
}
.button {
  border:2px solid silver;
  border-radius:5px;
  background-color: #FFF;
  margin:0 10px 0 10px;
  display:inline-block;
  user-select: none;
}
.rooms {
  margin:0 20px 0 20px;
  alignment: bottom;
}

.selector {
  border:1px solid silver;
  border-radius:5px;
  background-color: #FFF;
  margin:0 5px 0 5px;
  display:inline-block;
  user-select: none;
  alignment: center;
}
.selector div {
  display:inline-block;
}
.selector #button-placeholder input {
  width:50px;
  text-align:center;
  font-size:15px;
  padding:3px;
  border:none;
}
.selector .button {
  padding:3px 10px 3px 10px;
  cursor:pointer;
  border-radius:5px;
}
.selector .button:hover {
  background-color:#DDD;
}
.selector .button:active {
  background-color:#c5c5c5;
}
.amount {
  alignment: center;
}


</style>