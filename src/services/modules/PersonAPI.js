import api from "../api";

export default {
  getAllPersons() {
    return api().get("/api/person");
  },
};
