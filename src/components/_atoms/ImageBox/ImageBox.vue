<script setup>

const props = defineProps({
    fileName: String,
    dirName: String,
    name: String
})

function getImageUrl(fileName, dirName) {
  return new URL(`/src/assets/img/${dirName}/${fileName}`, import.meta.url)

}
</script>

<template>
    <div>
        <h1>{{name}}</h1>
        <img
           class="my-3 rounded-lg border-2 border-gray-600"
           :src="getImageUrl(fileName, dirName)"
           :alt="name">
    </div>
</template>