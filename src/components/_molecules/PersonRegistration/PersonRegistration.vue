<script setup>
import BaseInput from '@/components/_atoms/BaseInput/BaseInput.vue'
import BaseButton from '@/components/_atoms/BaseButton/BaseButton.vue'
</script>

<template>
    <div class="p-10 border-4 border-gray-200 rounded-lg m-2">
        <BaseInput label="First Name" placeholder="John" autocomplete="on"/>
        <BaseInput label="Last Name" placeholder="Smith" autocomplete="on"/>
        <BaseInput label="Identiy Code" placeholder="61107121760" autocomplete="on"/>
        <BaseInput abel="Date of Birth" type="date" autocomplete="on"/>
        <BaseButton class="float-right" textContent="Add"/>
    </div>
</template>