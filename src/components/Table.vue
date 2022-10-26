<script>
export default {
  props: {
    data: Array
  }
}
</script>

<template>
    <p>I am table component</p>
    <table id="tableComponent">
      <thead >
          <tr >
            <td v-for="item in data" :key="item">{{item}}</td>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data below Header1</td>
          <td>Data below Header2</td>
          <td>Data below Header3</td>
        </tr>
        
      </tbody>

    </table>
</template>