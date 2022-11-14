import { defineStore } from "pinia";
import { ref } from "vue";
import PersonsAPI from "../services/modules/PersonAPI";

export const usePersonstore = defineStore("Persons", () => {
  const responseData = ref(null);

  PersonsAPI.getAllPersons().then((response) => {
    responseData.value = response;
  });

  return {
    responseData,
  };
});
