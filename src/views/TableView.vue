<script setup>
import Table from '../components/Table.vue'
const testObject = 
    [{
      "size": 5,
      "floorId": 1,
      "roomNumber": 1,
      "numberOfBeds": 2,
      "roomType": "REGULAR",
    },
    {
      "size": 50,
      "floorId": 1,
      "roomNumber": 1,
      "numberOfBeds": 2,
      "roomType": "DELUXE"
    },
        {
      "size": 50,
      "floorId": 1,
      "roomNumber": 1,
      "numberOfBeds": 2,
      "roomType": "DELUXE"
    }]
</script>

<template>
    <Table :tableData ="testObject" />
</template>
