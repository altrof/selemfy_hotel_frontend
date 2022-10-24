<script setup>
import TheWelcome from '../components/TheWelcome.vue'

console.log(import.meta.env.VITE_API_URL)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
