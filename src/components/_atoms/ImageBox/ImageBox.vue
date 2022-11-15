<script setup>

const props = defineProps({
    fileName: String,
    dirName: String,
    name: String
})

// function getImageUrl(fileName, dirName) {
//   return new URL(`/src/assets/img/${dirName}/${fileName}`, import.meta.url)
//
// }
</script>

<template>
    <div>
        <h1>{{name}}</h1>

    </div>
</template>