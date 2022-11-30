<script setup>
import BaseInput from "@/components/_atoms/BaseInput/BaseInput.vue";
import BaseButton from "@/components/_atoms/BaseButton/BaseButton.vue";
import { usePersonstore } from "@/stores/person";

const { 
  addPersonToBooking, 
  getPersonDataFromDB,
  addPersonDataToDB } = usePersonstore();
</script>

<template>
  <div class="p-10 border-4 border-gray-200 rounded-lg m-2">
    <BaseInput
      v-model="firstName"
      label="First Name"
      placeholder="John"
      autocomplete="on"
    />

    <BaseInput
      v-model="lastName"
      label="Last Name"
      placeholder="Smith"
      autocomplete="on"
    />

    <BaseInput
      v-model="idCode"
      label="Identiy Code"
      placeholder="61107121760"
      autocomplete="on"
    />

    <BaseInput
      v-model="dateOfBirth"
      label="Date of Birth"
      type="date"
      autocomplete="on"
    />

    <BaseButton
      class="float-right"
      @click-handler="getPersonDataFromDB(idCode)"
      textContent="Check"
    />

    <BaseButton
      class="float-right"
      @click-handler="addPersonDataToDB(idCode, firstName, lastName, dateOfBirth)"
      textContent="Add"
    />
  </div>
</template>
