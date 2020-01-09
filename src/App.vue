<template>
  <div class="page-wrap">
    <div class="info1" ref="info1">
      <p class="tit">个人基本信息</p>
      <HDForm :model="data" :rules="rules" ref="hdForm" @on-focus="formFocus = true" @on-blur="formFocus = false">
        <HDFormItem label="手机号码" prop="phone">
          <HDInput
            v-model="data.phone"
            placeholder="请填写您的手机号"
            type="tel"
            disabled
          >
          </HDInput>
        </HDFormItem>
        <HDFormItem label="姓名" prop="name">
          <HDInput
            v-model="data.name"
            placeholder="请填写您的姓名"
            type="text"
          >
          </HDInput>
        </HDFormItem>
        <HDFormItem label="性别" prop="sex">
          <HDSelect v-model="data.sex">
            <option value selected disabled style="display:none;">请选择</option>
            <option :value="1">男</option>
            <option :value="2">女</option>
          </HDSelect>
        </HDFormItem>
        <HDFormItem label="出生日期" prop="birthday">
          <HDInput
            v-model="data.birthday"
            placeholder="请填写您的出生日期"
            type="date"
          >
          </HDInput>
        </HDFormItem>
        <HDFormItem label="微信号" prop="weixin">
          <HDInput
            v-model="data.weixin"
            placeholder="请填写您的微信"
            type="text"
          >
          </HDInput>
        </HDFormItem>
      </HDForm>
      <button class="hd-btn" @click="login">登陆</button>
    </div>
  </div>
</template>

<script>
import HDInput from './components/HDInput.vue'
import HDSelect from './components/HDSelect.vue'
import HDFormItem from './components/HDFormItem.vue'
import HDForm from './components/HDForm.vue'
import toast from './utils/toast'
export default {
  name: 'app',
  data() {
    return {
      formFocus:false,
      data: {
        phone: "18618322994",
        name: "",
        birthday: "1980-01-01",
        weixin: "",
        sex: ""
      },
      rules: {
        name: [{required: true, message: '用户名不能为空'}],
        phone: [{required: true, message: '手机号不能为空'}],
        sex: [{required: true, message: '请选择性别'}],
        birthday: [{required: true, message: '出生日期不能为空'}],
        weixin: [{required: true, message: '微信号不能为空'}],
      },
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    this.$nextTick(()=>{
    })

  },
  methods: {
    login() {
      this.$refs['hdForm'].validate(valid=>{
        if(valid){
          alert('登陆成功')
        }else{
          // eslint-disable-next-line no-console
          toast('用户基本信息不能为空')
          //alert('检验失败')
        }
      })
    },
  },
  components: {
    HDInput,
    HDFormItem,
    HDForm,
    HDSelect
  }
}
</script>
<style lang="scss" scoped>
  .page-wrap{
    width: 100%;
    height: 1823px;
    background-image: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/d6ba1c51dad889d4bd44e4c1974f76f3.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-bottom: 100px;
    background-color: rgb(243,229,212);
    box-sizing: border-box;
    .info1{
      width: 340px;
      margin: 0 auto;
    }
  }
  .tit{
    font-family: PingFangSC-Medium;
    padding: 25px 0px 20px 32px;
    background-size: 32px 25px;
    background-position: 0px center;
    background-repeat: no-repeat;
    height: 70px;
    line-height: 22px;
    color: rgb(166,122,58);
    font-size: 17px;
    background-image: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/a7cde2bcef72ab2fc88ab6f72aab41aa.png);
  }
  .hd-btn{
    width: 100%;
    height: 44px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgb(226,63,63);
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
</style>
