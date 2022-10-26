<script>
export default {
  props: {
    tableData: Object
  },

  created() {  
    const values = Object.keys(this.tableData)
    console.log(values) // siit edasi
  }
}


</script>

<template>
    <table id="tableComponent">
      <thead>
          <tr>
            <td v-for="(item, key) in tableData" :key="key">{{key}}</td>
          </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item">{{item}}
          <td v-for="field in tableData[item]" :key="field">{{item[field]}}</td>
          <td>Data below Header2</td>
          <td>Data below Header3</td>
        </tr>
        
      </tbody>

    </table>
</template>