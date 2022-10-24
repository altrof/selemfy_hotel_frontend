<script setup>
import ResponseInfo from '@/components/ResponseInfo.vue'
import { useBackendTestHealthStore } from "@/stores/backendTestHealth";
import { storeToRefs } from 'pinia'

const { responseData, apiUrl } = storeToRefs(useBackendTestHealthStore());
</script>

<template>
  <ResponseInfo :response-data="responseData" :api-url="apiUrl" />
</template>
