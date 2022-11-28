import api from "../api";

const getAllRooms = () => {
    return api().get(`/api/rooms`);
  }

const getAvailableRooms = (startDate, endDate) => {
    return api().get(`/api/rooms/public/${startDate}/${endDate}`);
  }

export { getAllRooms, getAvailableRooms }