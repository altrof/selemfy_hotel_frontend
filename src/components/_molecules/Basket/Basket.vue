<script setup>
import {useBasketStore} from "@/stores/basket";
import { storeToRefs } from 'pinia';

const { increment, decrement } = useBasketStore();
const { count } = storeToRefs(useBasketStore());

import BaseButton from '@/components/_atoms/BaseButton/BaseButton.vue';

const props = defineProps({
})

</script>

<template>        
    <div class="mt-5 border-t-2 border-gray-400 ">
        <p>Currently in basket: {{count}}</p>
        <div class="mt-3 flex flex-wrap place-content-around">
            <BaseButton @click-handler="increment" textContent="+"/>
            <BaseButton @click-handler="decrement" textContent="-"/>
        </div>
    </div>
</template>