<script setup>
import { onBeforeMount, ref, computed, onMounted } from "vue";
import BaseInput from "@/components/_atoms/BaseInput/BaseInput.vue";
import BaseButton from "@/components/_atoms/BaseButton/BaseButton.vue";
import { usePersonstore } from "@/stores/person";
import countryAPI from "@/services/countryAPI.js";


const { 
  addPersonToBooking, 
  getPersonDataFromDB,
  addPersonDataToDB } = usePersonstore();


  const countries = ref([
  {
    name: "",
    flagEmoji: "",
    flagSvg: "",
    nameWithFlag: "",
  },
]);

onBeforeMount(async () => {
  await countryAPI.getAllCountries().then((response) => {
    response.map((el) =>
      countries.value.push({
        nameWithFlag: el.flag + " " + el.name.common,
        name: el.name.common,
        flagEmoji: el.flag,
        flagSvg: el.flags.svg,
      })
    );
  });
});

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

            <div class="pl-2 mr-4">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Country</label
              >
              <v-select
                :options="countries"
                label="nameWithFlag"
                class="w-44 pt-2"
                v-model="country"
              />
            </div>

    <BaseButton
      class="float-right"
      @click-handler="getPersonDataFromDB(idCode)"
      textContent="Check"
    />

    <BaseButton
      class="float-right"
      @click-handler="addPersonDataToDB(idCode, firstName, lastName, dateOfBirth, country)"
      textContent="Add"
    />
  </div>
</template>
