<script setup>
import "vue-hotel-datepicker/dist/vueHotelDatepicker.css";
import BaseInputCalendar from "@/components/_atoms/BaseInputCalendar/BaseInputCalendar.vue";
import { storeToRefs } from "pinia";
import { useBookingStore } from "@/stores/booking.js";
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
  checkRoomAvailability,
} = useBookingStore();

const { checkIn, checkOut, amountChildren, amountAdults, bookingFormMob } =
  storeToRefs(useBookingStore());

const roomTypeOptions = ["Any", "Economy", "Regular", "Deluxe", "Family"];
const selectedRoomTypeOption = ref("Any");

onMounted(() => {
  window.addEventListener("resize", checkScreen);
  checkScreen();
});
</script>

<template>
  <div
    v-if="!bookingFormMob"
    data-testid="booking-form"
    class="flex inline"
  >
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
        class="pt-3"
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
        class="w-40 h-20 mt-3"
        button-style="bg-sky-900 hover:bg-sky-700 border-r-0"
        @click="checkRoomAvailability()"
        button-text="Check availability"
      />
    </div>
  </div>

  <!--  If screen width <= 750 -->
  <div v-else data-testid="booking-form" class="flex-col w-72 place-items-center">
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
        class="pt-4 pb-4 w-52"
        label-text="Room"
        :options="roomTypeOptions"
        :selected-option="selectedRoomTypeOption"
      />
      <ButtonWithLoader
        class="w-52 h-24 mt-2 mb-2"
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
  margin: 0 20px 0 20px;
}

</style>
