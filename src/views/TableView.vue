<script setup>
import Table from '../components/Table.vue'
const testArray = ['Header1', 'Header2', 'Header3']
</script>

<template>
    <Table :data ="testArray" />
</template>
