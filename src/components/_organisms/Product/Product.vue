<script setup>
import { onMounted} from 'vue'
import { useMobileStore } from "@/stores/mobile";
import { storeToRefs } from 'pinia';

import Basket from '@/components/_molecules/Basket/Basket.vue';
import DescriptionBox from '@/components/_atoms/DescriptionBox/DescriptionBox.vue';
import ImageBox from '@/components/_atoms/ImageBox/ImageBox.vue';

const { mobile } = storeToRefs(useMobileStore())
const { checkScreen, updateScroll } = useMobileStore();

onMounted(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen();
});

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

defineProps({
    fileName: String,
    dirName: String,
    productName: String,
    productDescription: String,
    productPrice: Number
})

</script>

<template>
    <div v-show="!mobile" class="p-10 border-4 border-gray-200 rounded-lg m-2" >
            <ImageBox class="w-1/2 float-left" 
                :name="productName" 
                :file-name="fileName" 
                :dir-name="dirName" />
            <div class="w-1/2 float-right pt-10 pl-5">
                <DescriptionBox 
                :description="productDescription" 
                :price="productPrice" />
                <Basket :product-name="productName" />
            </div>
    </div>

    <div v-show="mobile" class="w-1/3 p-10 border-4 border-gray-200 rounded-lg m-2" >
        <ImageBox 
            :name="productName" 
            :file-name="fileName" 
            :dir-name="dirName"
            />
        <DescriptionBox 
            :description="productDescription" 
            :price="productPrice" />
        <Basket :product-name="productName" />
    </div>
</template>
