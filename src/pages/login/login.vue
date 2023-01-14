<template>
  <div class="max-container">
    <div class="title">

    </div>
    <div class="login-form">
      <van-cell-group>
        <van-field
          :value="form.account"
          label="账号"
          left-icon="user-circle-o"
          placeholder="请输入用户名"
          :border="false"
          @change="form.account = $event.detail"
        />
        <van-field
          :value="form.password"
          type="password"
          label="密码"
          left-icon="closed-eye"
          placeholder="请输入密码"
          :border="false"
          @change="form.password = $event.detail"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup>
// export default {
//   name: "login",
//   data () {
//     return {
//       form: {
//         account: '',
//         password: ''
//       }
//     }
//   },
//   watch: {
//     form (val) {
//       console.log(val)
//     }
//   },
//   methods: {
//     onChange () {
//
//     }
//   }
// }
import { reactive, watch } from "vue"

const form = reactive({
  account: '',
  password: ''
})
const onChange = (val) => {
  console.log(val)
}

watch(form, (val) => {
  console.log(form.account)
  console.log(form.password)
})
</script>

<style scoped lang="scss">
.max-container {
  height: 100vh;
  padding: 0 20rpx;
  border-top: 1px solid transparent;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  background: grey;

  .title {
    flex: 1;
  }

  .login-form {
    margin-bottom: 100rpx;
    padding: 20rpx;
  }
}
</style>
