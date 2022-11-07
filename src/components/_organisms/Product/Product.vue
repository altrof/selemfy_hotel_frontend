<script setup>
import Basket from "@/components/_molecules/Basket/Basket.vue";
import ProductDescriptionBox from "@/components/_molecules/ProductDescriptionBox/ProductDescriptionBox.vue";

const props = defineProps({
  fileName: String,
  dirName: String,
  productName: String,
  productDescription: String,
  productPrice: Number,
});
</script>

<template>
  <div class="w-1/3 p-10 border-4 border-gray-200 rounded-lg m-2">
    <ProductDescriptionBox
      :name="productName"
      :description="productDescription"
      :price="productPrice"
      :file-name="fileName"
      :dir-name="dirName"
    />
    <Basket :product-name="productName" />
  </div>
</template>
