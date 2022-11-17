<script setup>
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
import BaseInputCalendar from "@/components/_atoms/BaseInputCalendar/BaseInputCalendar.vue";
import {storeToRefs} from "pinia";
import {useBookingStore} from "../../../stores/booking.js";

const booking = useBookingStore()
const { checkIn, checkOut, roomType } = storeToRefs(useBookingStore());
const bookingText = 'Check\n' + 'availability';


</script>
<template>
  <div class="main">
    <div class="booking-dates">
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
    <div class="booking-items">
      <div class="booking-items-amount">
      <div class="adults">
        <h1>Adults</h1>
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
          +
        </button>
      </div>
      </div>
      <div class="children">
        <h1>Children</h1>
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
      </div>
      </div>
      <div class="rooms">
        <h1>Room Type</h1>
        <div class="room-items">
          <select v-model="roomType">
            <option value="economy">Economy</option>
            <option value="regular">Regular</option>
            <option value="deluxe">Deluxe</option>
            <option value="king-size">King Size</option>
            <option value="any" selected>Any</option>
          </select>
      </div>
      </div>
    </div>
    <div class="booking-availability">
      <div class="booking-button-placeholder">
      <button
          @click="booking.logComponents()"
          class="booking-button">
          {{bookingText}}
      </button>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.booking-form {
  background-color: white;
  border: 1px solid black;
  flex-wrap: wrap;
}
.main {
}
.booking-dates {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin:0 20px 0 20px;

}
.booking-items{
  display: flex;
  flex-direction: column;
  align-content: center;
  margin:0 20px 0 20px;
}

.button {
  border:2px solid silver;
  border-radius:5px;
  background-color: #FFF;
  margin: 10px  10px;
  justify-content: space-between;
  display:inline-block;
  user-select: none;
}
.rooms {
  margin:0 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
}
.selector {
  border:2px solid silver;
  border-radius:5px;
  background-color: #FFF;
  margin:0 5px 0 5px;
  display:inline-block;
  user-select: none;
  align-content: center;
}
.selector div {
  display:inline-block;
  align-content: center;
  align-items: center;
}
.selector #button-placeholder input {
  width:50px;
  text-align:center;
  font-size:15px;
  padding:3px;
  border:none;
  align-items: center;
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

.booking-items-amount {
  display: flex;
  align-items: center;
}
.room-items {
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius:5px;
}


.booking-availability {
  display: flex;
  align-content: center;
  align-items: center;
  margin:0 20px 0 20px;
}
.booking-button-placeholder{
  display: flex;
  flex-wrap: wrap;
  align-items: center;

}
.booking-button {
  border:2px solid silver;
  border-radius:5px;
  background-color: #FFF;
  display:flex;
  user-select: none;
  margin:0 20px 0 20px;
  text-align: center;
  align-content: center;
  padding: 10px;
  white-space: normal;
  word-break: break-word;
}
.booking-button:hover {
  background-color:#DDD;
}
.booking-button:active {
  background-color:#c5c5c5;
}

</style>