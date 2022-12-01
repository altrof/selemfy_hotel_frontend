<script setup>
import { onBeforeMount, ref, computed, onMounted } from "vue";
import BaseInput from "@/components/_atoms/BaseInput/BaseInput.vue";
import BaseButton from "@/components/_atoms/BaseButton/BaseButton.vue";
import { usePersonstore } from "@/stores/person";
import countryAPI from "@/services/countryAPI.js";
import { VueTelInput } from "vue3-tel-input";

const { addPersonToBooking, getPersonDataFromDB, addPersonDataToDB } =
  usePersonstore();

const phone = ref(null);
const countries = ref([
  {
    name: "",
    flagEmoji: "",
    flagSvg: "",
    nameWithFlag: "",
  },
]);

const phoneNumberInput = {
  placeholder: "Phone number",
};

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

const onInput = (phoneText, phoneObject, input) => {
  if (phoneObject) {
    usePersonstore().phoneNumber = phoneObject.number;
  }
};
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
      <label class="block text-gray-700 text-sm font-bold mb-2">Country</label>
      <v-select
        :options="countries"
        label="nameWithFlag"
        class="w-44 pt-2"
        v-model="country"
      />
    </div>

    <div class="pt-2 pl-2 w-52">
      <label class="block text-gray-700 text-sm font-bold mb-2"
        >Phone number</label
      >
      <VueTelInput
        v-model="phone"
        class="h-9"
        :inputOptions="phoneNumberInput"
        @input="onInput"
      />
    </div>
    <BaseButton
      class="float-right"
      @click-handler="getPersonDataFromDB(idCode)"
      textContent="Check"
    />

    <BaseButton
      class="float-right"
      @click-handler="
        addPersonDataToDB(
          idCode,
          firstName,
          lastName,
          dateOfBirth,
          country,
          phone
        )
      "
      textContent="Add"
    />
  </div>
</template>
