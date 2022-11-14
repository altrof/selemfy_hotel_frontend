import { defineStore } from 'pinia'

//bookingstore?

export const useAmountStore = defineStore({
  id: 'amount',
  state: () => ({
    amountAdults: 1,
    amountChildren: 0,
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
    }
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return 'even'
      return 'odd'
    }
  }

})