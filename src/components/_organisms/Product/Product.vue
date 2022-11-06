<script setup>
import Basket from '@/components/_molecules/Basket/Basket.vue';

const props = defineProps({
    fileName: String,
    dirName: String,
    productName: String,
    productDescription: String
})

function getImageUrl(fileName, dirName) {
  return new URL(`/src/assets/img/${dirName}/${fileName}`, import.meta.url)

}
</script>

<template>
    <div class="w-1/3 p-10 border-4 border-gray-200 rounded-lg m-2" >
        <div>
            <h1>{{productName}}</h1>
            <img class="rounded-lg border-2 border-gray-600" :src="getImageUrl(fileName, dirName)" alt="Champagne">
            <p class="italic">{{productDescription}}</p>
        </div>
        <Basket />
    </div>
</template>