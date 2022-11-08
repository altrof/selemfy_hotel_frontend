<script setup>
import Basket from '@/components/_molecules/Basket/Basket.vue';
import ProductDescriptionBox from '@/components/_molecules/ProductDescriptionBox/ProductDescriptionBox.vue';
import { onMounted} from 'vue'
import { useMobileStore } from "@/stores/mobile";
import { storeToRefs } from 'pinia';

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
    <div v-show="!mobile" class="w-1/2 p-10 border-4 border-gray-200 rounded-lg m-2" >
        <ProductDescriptionBox 
            :name="productName" 
            :description="productDescription" 
            :price="productPrice" 
            :file-name="fileName" 
            :dir-name="dirName"/>
        <Basket :product-name="productName" />
    </div>

    <div v-show="mobile" class="w-1/3 p-10 border-4 border-gray-200 rounded-lg m-2" >
        <ProductDescriptionBox 
            :name="productName" 
            :description="productDescription" 
            :price="productPrice" 
            :file-name="fileName" 
            :dir-name="dirName"/>
        <Basket :product-name="productName" />
    </div>
</template>