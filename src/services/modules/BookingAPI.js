import api from "../api";

const addBooking = () => {
  return api().post("/api/booking/public?roomId=1&ownerId=38610211234", {
    price: 100,
    checkInDate: "2035-10-16",
    checkOutDate: "2036-10-17",
    comments: "boo",
    lateCheckOut: true,
  });
};

export { addBooking };
