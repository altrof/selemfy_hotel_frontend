<script setup>
import ResponseInfo from "@/components/ResponseInfo.vue";
import { useRoomsStore } from "@/stores/rooms";
import { storeToRefs } from 'pinia';

const { responseData, apiUrl } = storeToRefs(useRoomsStore());
</script>

<template>
  <ResponseInfo :response-data="responseData" :api-url="apiUrl" />
</template>
