<script setup>
import Basket from '@/components/_molecules/Basket/Basket.vue';

const props = defineProps({
    fileName: String,
    dirName: String,
    name: String,
    description: String
})

function getImageUrl(fileName, dirName) {
  return new URL(`/src/assets/img/${dirName}/${fileName}`, import.meta.url)

}
</script>

<template>
    <div>
        <h1>{{name}}</h1>
        <img class="my-3 rounded-lg border-2 border-gray-600" :src="getImageUrl(fileName, dirName)" alt="Champagne">
        <p class="italic">{{description}}</p>
    </div>
</template>