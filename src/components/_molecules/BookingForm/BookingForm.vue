<script setup>
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
import BaseInputCalendar from "@/components/_atoms/BaseInputCalendar/BaseInputCalendar.vue";
import {storeToRefs} from "pinia";
import {useBookingStore} from "../../../stores/booking.js";

const booking = useBookingStore()
const { checkIn, checkOut, roomType } = storeToRefs(useBookingStore());

</script>
<template>
  <div>
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
    <div class="middle">
      <div class="amount">
        Adults
      </div>
      <div class="selector">
        <button
            @click="booking.decreaseAmountAdults()"
            class="button">
          -
        </button>
        <div id="button-placeholder">
          {{booking.amountAdults}}
        </div>
        <button
            @click="booking.increaseAmountAdults()"
            class="button">
          -
        </button>
      </div>
      <div class="amount">
        Children
      </div>

      <div class="selector">
      <button
          @click="booking.decreaseAmountChildren()"
          class="button">
          -
      </button>
      <div id="button-placeholder">
        {{booking.amountChildren}}
      </div>
    <button
        @click="booking.increaseAmountChildren()"
        class="button">
        +
    </button>
      </div>
      Room type
      <div class="rooms">
        <select v-model="roomType">
          <option value="economy">Economy</option>
          <option value="regular">Regular</option>
          <option value="deluxe">Deluxe</option>
          <option value="king-size">King Size</option>
          <option value="any" selected>Any</option>
        </select>
      </div>
    </div>
    <div class="right">
    <button
        @click="booking.logComponents()"
        class="booking-button">
        Check availability </button>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.booking-form {
  background-color: white;
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
.booking-button {
  border:2px solid silver;
  border-radius:5px;
  background-color: #FFF;
  display:inline-block;
  user-select: none;
  margin:0 20px 0 20px;
  width: 50%;
  text-align: center;
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