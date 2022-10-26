<script>
export default {
  props: {
    data: String
  }
}
</script>

<template>
    <p>I am table component</p>
    <table id="tableComponent">
      <thead>
          <tr>
            <th>Chicken</th>
            <th>Cows</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data below Chicken</td>
          <td>Data below Cows</td>
        </tr>
        
      </tbody>

    </table>
</template>