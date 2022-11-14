<template>
  <div class="basic-button">
    <div class="basic-button minus" v-on:click="bplus()">
      -
    </div>
    <div id="field_container">
      <input type="number" v-model="newValue" disabled />
    </div>
    <div class="basic-button plus" v-on:click="bminus()">
      +
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: 0,
      type: Number
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: undefined,
      type: Number
    }
  },

  data () {
    return {
      newValue: 0
    }
  },

  methods: {
    getNotificationClass (notification) {
      return `alert alert-${notification.type}`
    },
    bplus: function () {
      if (this.max === undefined || (this.newValue < this.max)) {
        this.newValue = this.newValue + 1
        this.$emit('input', this.newValue)
      }
    },
    bminus: function () {
      if ((this.newValue) > this.min) {
        this.newValue = this.newValue - 1
        this.$emit('input', this.newValue)
      }
    }
  },
  watch: {
    value: {
      handler: function (newVal, oldVal) {
        this.newValue = newVal
      }
    }
  },
  created: function () {
    this.newValue = this.value
  }
}
</script>
<style lang="scss" scoped>
.basic-button {
  border:1px solid silver;
  border-radius:5px;
  background-color: #FFF;
  margin:0 5px 0 5px;
  display:inline-block;
  user-select: none;
}
.basic-button div {
  display:inline-block;
}
.basic-button #field_container input {
  width:50px;
  text-align:center;
  font-size:15px;
  padding:3px;
  border:none;
}
.basic-button .basic-button {
  padding:3px 10px 3px 10px;
  cursor:pointer;
  border-radius:5px;
}
.basic-button .basic-button:hover {
  background-color:#DDD;
}
.basic-button .basic-button:active {
  background-color:#c5c5c5;
}
</style>