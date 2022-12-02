import { defineStore } from "pinia";
import { ref } from "vue";
import {
  getAllPersons,
  getPersonByIdentityCode,
  addPerson,
} from "../services/modules/PersonAPI";

export const usePersonstore = defineStore("person", () => {
  const responseData = ref(null);
  const peopleInBooking = ref({});;


  getAllPersons().then((response) => {
    responseData.value = response;
  });


  function countNumberOfPeopleInBooking(count) {
    for (let i = 1; i <=  count; i++) {
      peopleInBooking.value[i] = {}
    }
  }

  async function getPersonDataFromDB(identityCode, formNumber) {
    console.log(`Formnumber ${formNumber}`)
    getPersonByIdentityCode(identityCode).then((response) => {
      const responseData = response["data"];
      if (responseData !== null) {
        const currentPerson = {
          "idCode": responseData['identityCode'],
          "firstName": responseData['firstName'],
          "lastName": responseData['lastName'],
          "dateOfBirth": responseData['dateOfBirth'],
          "country": responseData['country'],
          "phoneNumber": responseData['phoneNumber'],
          "inputDisabled": true
        };
        peopleInBooking.value[formNumber] = currentPerson;
        
      } else {
        peopleInBooking.value[formNumber]["inputDisabled"] = false;
      }
    });
  }

  async function addPersonDataToDB(
    identityCode,
    firstName,
    lastName,
    dateOfBirth,
    country
  ) {
    addPerson(
      identityCode,
      firstName,
      lastName,
      dateOfBirth,
      country["name"],
      phoneNumber["value"]
    ).then((response) => {
      console.log(response);
    });
  }

  return {
    responseData,
    peopleInBooking,
    countNumberOfPeopleInBooking,
    getPersonDataFromDB,
    addPersonDataToDB,
  };
});
