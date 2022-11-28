import api from "../api";

export default {
  getAllRooms() {
    return api().get("api/rooms/public/2026-12-22/2026-12-24");
  },
};
//http://localhost:8080/api/rooms/public/2026-12-22/2026-12-24
/*
getAllRooms() {
  return api().get("/api/rooms");
},
};*/