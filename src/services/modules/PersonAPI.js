import api from "../api";


const getAllPersons = () => {
    return api().get("/api/person");
  }

const getPersonByIdentityCode = (identityCode) => {
    return api().get(`/api/person/public/${identityCode}`)
  };

export { getAllPersons, getPersonByIdentityCode };
