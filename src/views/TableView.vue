<script setup>
import Table from '../components/Table.vue'
const testObject = 
    {
        'Animals': ['Cow', 'Chicken', 'Wolf'],
        'Plants': ['Cabbage', 'Apple', 'Oak'],
        'Misc': ['Rock', 'Nail', 'Window']
    }
</script>

<template>
    <Table :tableData ="testObject" />
</template>
