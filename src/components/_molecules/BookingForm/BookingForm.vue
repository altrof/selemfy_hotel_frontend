<script setup>
import { ref } from 'vue'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
import BaseInputCalendar from "@/components/_atoms/BaseInputCalendar/BaseInputCalendar.vue";
import  {useAmountStore} from "@/stores/amount";

const amountCounter = useAmountStore()

// const checkIn = ref('YYYY/MM/DD')
// const checkOut = ref('YYYY/MM/DD')
// const adults = ref( 1 )
// const children = ref(0)
const rooms = ref(' Regular ', 'King', 'Suite', 'Any')


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
            @click="amountCounter.decreaseAmountAdults()"
            class="button">
          -
        </button>
        <div id="button-placeholder">
          {{amountCounter.amountAdults}}

        </div>
        <button
            @click="amountCounter.increaseAmountAdults()"
            class="button">
          +
        </button>
      </div>
      <div class="amount">
        Children
      </div>

      <div class="selector">
      <button
          @click="amountCounter.decreaseAmountChildren()"
          class="button">
          -
      </button>
      <div id="button-placeholder">
        {{amountCounter.amountChildren}}

      </div>
    <button
        @click="amountCounter.increaseAmountChildren()"
        class="button">
        +
    </button>
      </div>
      Room type
      <div class="rooms">
        <select v-model="rooms">
          <option value="economy">Economy</option>
          <option value="regular">Regular</option>
          <option value="deluxe">Deluxe</option>
          <option value="king-size">King Size</option>
          <option value="any" selected>Any</option>
          :selected="Any"
        </select>
      </div>
    </div>
    <button> Check availability</button>
  </div>

</template>

<style lang="scss" scoped>
.booking-form {
  background-color: white;
  border: 1px solid black;
}
.dates {
  margin: 20px;
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
  margin: 20px;
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