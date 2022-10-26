<script setup>

  defineProps({
    tableData: Object
  })



</script>

<template>
    <table id="tableComponent">
      <thead>
          <tr>
            <th v-for="(item, key) in tableData" :key="item">{{key}}</th>
          </tr>
      </thead>
      <tbody v-for="(item, key, i) in tableData" :key="i">
        <tr >
          <td>{{item[i]}} </td>
          <td>{{item[i]}}</td>
          <td>{{item[i]}}</td>
        </tr>
        
      </tbody>

    </table>
</template>