<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import MyProfileButton from "@/components/_atoms/MyProfileButton/MyProfileButton.vue";
import { useModalWindowStore } from "@/stores/modalWindow";
import LoginWindow from "@/components/_organisms/LoginWindow/LoginWindow.vue";

const loggedIn = false;
const { openModal } = useModalWindowStore();
</script>

<template>
  <LoginWindow />

  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton>
        <MyProfileButton />
      </MenuButton>
    </div>

    <div v-if="!loggedIn">
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-40 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border"
        >
          <div class="py-1">
            <MenuItem v-slot="{ active }" @click="openModal">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                >Log in..</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                >Sign up..</a
              >
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </div>
    <div v-else>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                >Account settings</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                >Support</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                >License</a
              >
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </div>
  </Menu>
</template>

<style lang="scss" scoped></style>
