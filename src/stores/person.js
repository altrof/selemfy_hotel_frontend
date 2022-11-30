import { defineStore } from "pinia";
import { ref } from "vue";
import { getAllPersons, getPersonByIdentityCode, addPerson } from "../services/modules/PersonAPI";

class Person {
  constructor(idCode, firstName, lastName, dateOfBirth, country) {
    this.idCode = idCode;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.country = country;
  }
}

export const usePersonstore = defineStore("person", () => {
  const responseData = ref(null);
  const peopleInBooking = ref({});

  getAllPersons().then((response) => {
    responseData.value = response;
  });

  async function getPersonDataFromDB(identityCode) {
    getPersonByIdentityCode(identityCode).then(
      (response) => { console.log(response['data']) }
      )
  }

  async function addPersonDataToDB(identityCode, firstName, lastName, dateOfBirth, country) {

    
    addPerson(identityCode, firstName, lastName, dateOfBirth, country['name']).then(
      (response) => { console.log(response) }
      )
  }

  function addPersonToBooking(idCode, firstName, lastName, dateOfBirth, country) {
    const currentPerson = new Person(idCode, firstName, lastName, dateOfBirth, country);
    peopleInBooking.value[idCode] = currentPerson;

    let alertMessage = `Added ${currentPerson.firstName} ${currentPerson.lastName}
            \n So far we have booked the following people:\n`;
    for (let idCode of Object.keys(peopleInBooking.value)) {
      alertMessage += `${peopleInBooking.value[idCode].firstName} ${peopleInBooking.value[idCode].lastName}\n`;
    }
    alert(alertMessage);
  }

  return { responseData, 
        peopleInBooking, 
        addPersonToBooking, 
        getPersonDataFromDB,
        addPersonDataToDB };
});
