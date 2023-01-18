<template>
  <div class="max-container">
    <div class="title">
      东里义教通讯录
    </div>
    <div class="login-form">
      <van-cell-group>
        <van-field
          :value="form.phone"
          label="账号"
          left-icon="/static/icon-account.png"
          placeholder="请输入账号"
          :border="false"
          title-width="2rem"
          @change="form.phone = $event.detail"
        >
        </van-field>
        <van-field
          :value="form.password"
          type="password"
          label="密码"
          left-icon="/static/icon-pw.png"
          placeholder="请输入密码"
          :border="false"
          title-width="2rem"
          @change="form.password = $event.detail"
        />
      </van-cell-group>
      <my-big-button bg-color="#FF5733" @click="login">登录</my-big-button>
      <div class="register-box">
        <span>漏了我呀></span>
        <navigator class="navigator-link" type="link" url="/pages/register/register">点击申请</navigator>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, watch } from "vue"
import api from "@/common/api"
import utils from "@/common/utils"

const form = reactive({
  phone: '13924771913',
  password: '201713924771913'
})
const onChange = (val) => {
  console.log(val)
}

const login = () => {
  let params = { ...form, phone: parseInt(form.phone) }
  console.log(params)
  api.commonApi.login(params).then(res => {
    utils.setStorage('userId', res.id)
    uni.switchTab({
      url: '/pages/index/index',
      success: () => {
        utils.useToast('登录成功', { icon: 'success' })
      }
    })
  }).catch(err => {
    console.log('err', err)
  })
}

onMounted(() => {
  // login().then(res =>{
  //   console.log(res)
  // })
})

// watch(form, (val) => {
//   console.log(form.phone)
//   console.log(form.password)
// })
</script>

<style scoped lang="scss">
.max-container {
  height: 100vh;
  padding: 0 20rpx;
  border-top: 1px solid transparent;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  background: white;

  .title {
    flex: 1;
    font-size: 34.62px;
    font-weight: 500;
    letter-spacing: 0px;
    color: black;
    background-image: url("@/static/bg-login.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    margin-bottom: 200rpx;
    padding: 40rpx;
    overflow: hidden;
    background: white;
    border-radius: 20px;
    box-shadow: 0px -1.92px 1.92px 0px #0000001b, 0px 1.92px 1.92px 0px #0000001b;

    ::v-deep.van-cell-group.van-hairline--top-bottom {
      &::before, &::after {
        display: none
      }
    }

    ::v-deep.van-cell {
      padding: 20rpx;
      box-shadow: inset 0px -1.92px 3.85px 0px #0000002b, inset 0px 1.92px 3.85px 0px #0000002b;
      margin-bottom: 40rpx;
    }

    .register-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20rpx;
      color: #A6A6A6;
      font-size: 28rpx;
      color: black;

      .navigator-link {
        color: #2A82E4;
        margin-left: 10rpx;
      }
    }
  }
}
</style>
