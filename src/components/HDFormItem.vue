<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMsg">{{errorMsg}}</p>
  </div>
</template>

<script>
  import Schema from 'async-validator';
  export default {
    inject:['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    data() {
      return {
        errorMsg: ''
      }
    },
    methods: {
      validate() {
        // 检验规则
        const rules = this.form.rules[this.prop]
        // 检验值
        const value = this.form.model[this.prop]
        const desc = { [this.prop]: rules }
        const schema = new Schema(desc)
        return schema.validate({[this.prop]:value}, error => {
          if(error){
            this.errorMsg = error[0].message
          }else{
            this.errorMsg = ''
          }
        })
      }
    },
    mounted(){
      this.$on('validate',()=> {
        this.validate()
      })
    }
  }
</script>

<style scoped>

</style>