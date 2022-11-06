<script setup>
import { storeToRefs } from 'pinia';
import BaseButton from '@/components/_atoms/BaseButton/BaseButton.vue';


const props = defineProps({
    fileName: String,
    dirName: String,
    productName: String,
    productDescription: String
})

function getImageUrl(fileName, dirName) {
  return new URL(`/src/assets/img/${dirName}/${fileName}`, import.meta.url)

}

let basketCount = 0
function changeBasketCount(changeBy) {
    basketCount += changeBy   
    console.log(basketCount)
}

</script>

<template>
    <div class="w-1/3 p-10 border-4 border-gray-200 rounded-lg m-2" >
        <div>
            <h1>{{productName}}</h1>
            <img class="rounded-lg border-2 border-gray-600" :src="getImageUrl(fileName, dirName)" alt="Champagne">
            <p class="italic">{{productDescription}}</p>
        </div>
        
        <div class="border-t-2 border-gray-400 ">
            <p>Currently in basket: {{basketCount}}</p>
            <div class="flex flex-wrap">
                <BaseButton @click-handler="changeBasketCount(1)" textContent="+"/>
                <BaseButton @click-handler="changeBasketCount(-1)" textContent="-"/>
            </div>
        </div>
    </div>

</template>