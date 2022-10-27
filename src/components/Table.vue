<script setup>

  defineProps({
    tableData: Object
  })
</script>

<template>
    <table id="tableComponent" >
      <thead v-for="(item, key) in tableData" :key="key">
          <th>{{key}} </th>
          <td>{{item}}</td>   
      </thead>
    </table>
</template>