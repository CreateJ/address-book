<template>
  <div class="max-container">
    <view class="my-panel">
      <van-field label="头像"></van-field>
      <van-field label="姓名"></van-field>
      <van-field label="性别"></van-field>
      <van-field label="届别"></van-field>
      <van-field title-width="200rpx" label="毕业院校&专业" disabled right-icon="plus"
                 @click-icon="addSchool"></van-field>
      <van-field label="工作单位"></van-field>
      <van-field label="常住地址"></van-field>
      <van-field label="电话"></van-field>
    </view>
    <div class="my-button">
      <my-big-button class="button-item" bg-color="#00BAAD" @click="submit">保存更改</my-big-button>
      <my-big-button class="button-item" bg-color="#FF5733" @click="changePassword">修改密码</my-big-button>
      <my-big-button class="button-item" bg-color="#00000044" @click="logout">退出登录</my-big-button>
    </div>
  </div>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app"
import { useStore } from "vuex"
const store = useStore()
onLoad(() => {
  store.dispatch('getMyInfo')
})
const submit = () => {

}
const changePassword = () => {

}
const logout = () => {
  uni.removeStorage({key: 'token'})
  uni.removeStorage({key: 'userId'})
  uni.navigateTo({
    url: '/pages/login/login'
  })
}

const newSchool = {

}

const addSchool = () => {
  console.log('add')
}
</script>

<style scoped lang="scss">
.max-container {
  .my-button {
    padding: 20rpx;

    .button-item {
      ::v-deep .big-button {
        margin-bottom: 20rpx
      }
    }
  }
}
</style>
