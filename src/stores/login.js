import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore("login", () => {
  const username = ref("");
  const password = ref("");

  function logInToAccount() {
    alert(
      "Check for existing account: \n" +
        "Email: " +
      username.value +
        "\n" +
        "Password: " +
        password.value
    );
  }

  return {
    username,
    password,
    logInToAccount,
  };
});
