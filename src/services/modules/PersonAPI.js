import api from "../api";


const getAllPersons = () => {
    return api().get("/api/person");
  }

const getPersonByIdentityCode = (identityCode) => {
    return api().get(`/api/person/public/${identityCode}`)
  };

  const addPerson = (identityCode, firstName, lastName, dateOfBirth) => {
    return api().post(`/api/person/public/`, {
      "identityCode": identityCode,
      "firstName":firstName,
      "lastName":lastName,
      "dateOfBirth":dateOfBirth,
      "country": "Estonia"
    });
  };

export { getAllPersons, getPersonByIdentityCode, addPerson };
