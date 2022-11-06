<script setup>
const props = defineProps({
    textContent: String,
})

</script>

<template>
    <div class="hover:bg-blue-500 text-gray-700 
                hover:text-white px-5 border-2 border-gray-800 
                hover:border-transparent rounded
                mx-0.5">
        <button @click="$emit('clickHandler')">{{textContent}}</button>
    </div>
</template>