import api from "../api";

const getAllRooms = () => {
    return api().get("/api/rooms");
  }

const getAvailableRooms = () => {
    return api().get("/api/rooms/public/2026-12-22/2026-12-24");
  }

export { getAllRooms, getAvailableRooms }