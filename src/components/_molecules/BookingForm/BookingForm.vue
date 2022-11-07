<script setup>
import { ref } from 'vue'
import BaseInput from "@/components/_atoms/BaseInput/BaseInput.vue";


const date = ref('Some date')
const duration = ref(' duration ')
const persons = ref(' persons ')
const room = ref(' room ')

</script>

<template>
  <div>
    <BaseInput
        v-model="date"
        label="date"
        placeholder="date"
        autocomplete="on"
    />
    <BaseInput
        v-model="duration"
        label="Nights"
        placeholder="Nights"
        autocomplete="on"
    />
    <BaseInput
        v-model="persons"
        label="Persons"
        placeholder="date"
        autocomplete="on"
    />
    <b-dropdown text="Button text via Prop">
      <b-dropdown-item href="#">An item</b-dropdown-item>
      <b-dropdown-item href="#">Another item</b-dropdown-item>
    </b-dropdown>
    <select
        v-model="room"
        label="Room Type"
        placeholder="Room Type"
        autocomplete="on"
    />


    <button> {{persons}}</button>
    <button> {{room}}</button>
  </div>
</template>

<style scoped>
.booking-form {
  background-color: white;
  border: 1px solid black;
}

</style>