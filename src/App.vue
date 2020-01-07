<template>
  <div id="app">
    <HDForm :model="userInfo" :rules="rules" ref="hdForm">
      <HDFormItem label="用户名:" prop="name">
        <HDInput v-model="userInfo.name" placeholder="请输入用户名"></HDInput>
      </HDFormItem>
      <HDFormItem label="密码:" prop="password">
        <HDInput type="password" v-model="userInfo.password" placeholder="请输入密码"></HDInput>
      </HDFormItem>
      <HDFormItem>
        <button @click="login">登陆</button>
      </HDFormItem>
    </HDForm>
  </div>
</template>

<script>
import HDInput from './components/HDInput.vue'
import HDFormItem from './components/HDFormItem.vue'
import HDForm from './components/HDForm.vue'

export default {
  name: 'app',
  data() {
    return {
      userInfo: {
        name: '',
        password: ''
      },
      rules: {
        name: [{required: true, message: '用户名不能为空'}],
        password: [{required: true, message: '密码不能为空'}],
      }
    }
  },
  methods: {
    login() {
      this.$refs['hdForm'].validate(valid=>{
        if(valid){
          alert('登陆成功')
        }else{
          alert('检验失败')
        }
      })
    }
  },
  components: {
    HDInput,
    HDFormItem,
    HDForm
  }
}
</script>
