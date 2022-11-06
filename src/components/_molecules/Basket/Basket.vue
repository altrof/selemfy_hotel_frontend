<script setup>
import BaseButton from '@/components/_atoms/BaseButton/BaseButton.vue';

const props = defineProps({
})

let basketCount = 0
function changeBasketCount(changeBy) {
    basketCount += changeBy   
    console.log(basketCount)
}
</script>

<template>        
    <div class="border-t-2 border-gray-400 ">
        <p>Currently in basket: {{basketCount}}</p>
        <div class="flex flex-wrap place-content-around">
            <BaseButton @click-handler="changeBasketCount(1)" textContent="+"/>
            <BaseButton @click-handler="changeBasketCount(-1)" textContent="-"/>
        </div>
    </div>
</template>