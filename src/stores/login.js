import {defineStore} from "pinia";
import {ref} from "vue";

export const useLoginStore = defineStore('login', () => {
    const email = ref('')
    const password = ref('')

    function logInToAccount() {
        alert("Check for existing account: \n" +
            "Email: " + email.value + "\n" +
            "Password: " + password.value);
    }

    return {
        email,
        password,
        logInToAccount
    }
})