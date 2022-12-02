import { defineStore } from "pinia";
import { ref } from "vue";
import {
  getAllPersons,
  getPersonByIdentityCode,
  addPerson,
} from "../services/modules/PersonAPI";

export const usePersonstore = defineStore("person", () => {
  const responseData = ref(null);
  const peopleInBooking = ref({});
  const firstName = ref(null);
  const lastName = ref(null);
  const dateOfBirth = ref(null);
  const country = ref(null);
  const phoneNumber = ref(null);
  const inputDisabled = ref(false);


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

  function addPersonToBooking(
    idCode,
    firstName,
    lastName,
    dateOfBirth,
    country,
    phoneNumber
  ) {
    const currentPerson = {
      idCode,
      firstName,
      lastName,
      dateOfBirth,
      country,
      phoneNumber,
    };
    peopleInBooking.value[idCode] = currentPerson;

    let alertMessage = `Added ${currentPerson.firstName} ${currentPerson.lastName}
            \n So far we have booked the following people:\n`;
    for (let idCode of Object.keys(peopleInBooking.value)) {
      alertMessage += `${peopleInBooking.value[idCode].firstName} ${peopleInBooking.value[idCode].lastName}\n`;
    }
    alert(alertMessage);
  }

  return {
    responseData,
    peopleInBooking,
    countNumberOfPeopleInBooking,
    phoneNumber,
    firstName,
    lastName,
    dateOfBirth,
    country,
    phoneNumber,
    inputDisabled,
    addPersonToBooking,
    getPersonDataFromDB,
    addPersonDataToDB,
  };
});
