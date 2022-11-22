<script setup>
import { DialogTitle } from "@headlessui/vue";
import ModalWindow from "@/components/_molecules/ModalWindow/ModalWindow.vue";
import IconClose from "@/components/icons/IconClose.vue";
import BaseInput from "@/components/_atoms/BaseInput/BaseInput.vue";
import { useModalWindowStore } from "@/stores/modalWindow";
import { useLoginStore } from "@/stores/login";
import { storeToRefs } from "pinia";

const { closeModal } = useModalWindowStore();
const { logInToAccount } = useLoginStore();

const { email, password } = storeToRefs(useLoginStore());
</script>

<template>
  <ModalWindow>
    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
      Log in..
    </DialogTitle>
    <div class="mt-2">
      <BaseInput
        v-model="email"
        label="Email"
        placeholder="Email"
        autocomplete="on"
      />
    </div>

    <div class="mt-2">
      <BaseInput
        v-model="password"
        label="Password"
        placeholder="Password"
        type="password"
        autocomplete="on"
      />
    </div>

    <div class="mt-4 flex items-center justify-between">
      <button
        type="button"
        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        @click="logInToAccount"
      >
        Log in
      </button>

      <a
        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
    <div class="absolute flex top-3 right-5 cursor-pointer" @click="closeModal">
      <IconClose />
    </div>
  </ModalWindow>
</template>

<style scoped></style>
