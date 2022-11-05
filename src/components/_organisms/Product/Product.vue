<script setup>
const props = defineProps({
    fileName: String,
    dirName: String
})

function getImageUrl(fileName, dirName) {
  return new URL(`/src/assets/img/${dirName}/${fileName}`, import.meta.url)
}


</script>

<template>
    <img :src="getImageUrl(fileName, dirName)" alt="Champagne">
</template>