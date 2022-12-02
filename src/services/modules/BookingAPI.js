import api from "../api";

const addBooking = (roomId, ownerId, otherIds, requestBody) => {
  return api().post(`/api/booking/public?roomId=${roomId}&ownerId=${ownerId}&otherId=${otherIds}`, {
    price: 100,
    checkInDate: "2042-10-16",
    checkOutDate: "2043-10-17",
    comments: "boo",
    lateCheckOut: true,
  });
};

export { addBooking };
