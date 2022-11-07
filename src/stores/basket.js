import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", () => {
  const basketState = ref({});

  function changeBasket(productName, changeAmount) {
    if (basketState.value.hasOwnProperty(productName)) {
      if (basketState.value[productName] + changeAmount >= 0) {
        basketState.value[productName] += changeAmount;
      }
    } else {
      basketState.value[productName] = changeAmount;
    }
  }

  return { basketState, changeBasket };
});
