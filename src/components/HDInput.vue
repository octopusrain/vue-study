<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
  export default {
    inject:["form"],
    inheritAttrs: false,
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: ''
      },
    },
    methods: {
      onInput(e) {
        this.$emit('input',e.target.value)
        // 通知父元素校验
        this.$parent.$emit('validate')
      }
    },
    mounted () {

    },
  }
</script>

<style scoped>

</style>