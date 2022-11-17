import { defineStore } from 'pinia'

export const useBookingStore = defineStore({
  id: 'amount',

  state: () => ({
    amountAdults: 1,
    amountChildren: 0,
    checkIn: "",
    checkOut: "",
    roomType: "Any",
  }),
  actions: {
    increaseAmountAdults() {
      this.amountAdults++
    },
    increaseAmountChildren() {
      this.amountChildren++
    },
    decreaseAmountAdults() {
      if (this.amountAdults === 0) {
      } else {
        this.amountAdults--
      }
    },
    decreaseAmountChildren() {
      if (this.amountChildren === 0) {
      } else {
        this.amountChildren--
      }
    },

    logComponents() {
      alert("This is data: \n" +
          "Checkin: " + this.checkIn + "\n" +
          "Checkout: " + this.checkOut + "\n" +
          "Adults: " + this.amountAdults + "\n" +
          "Children: " + this.amountChildren + "\n" +
          "Room type: "+ this.roomType);
    }
  },
})

//bookingstore?
