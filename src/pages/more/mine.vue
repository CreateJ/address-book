<template>
  <div class="max-container">
    <view class="my-panel info-panel">
<!--      <van-field label="头像"></van-field>-->
      <van-field label="姓名" :value="myInfo.name"></van-field>
      <van-cell title="性别" :value="myInfo.gender === 1 ? '男' : '女'" @click="genderPickerShow = true"/>
      <van-popup
        :show="genderPickerShow"
        position="bottom"
        @close="genderPickerShow = false"
        :safe-area-inset-bottom="true"
        :round="true"
      >
        <van-picker
          :visible-item-count="6"
          show-toolbar
          value-key="label"
          :columns="genderColumns"
          @confirm="changeGender"
          @cancel="genderPickerShow = false"
        >
        </van-picker>
      </van-popup>
      <!--      <van-field label="性别"></van-field>-->
<!--      <van-field label="届别"></van-field>-->
      <van-cell title="届别" :value="enterYear" @click="gradePickerShow = true"/>
      <van-popup
        :show="gradePickerShow"
        position="bottom"
        @close="gradePickerShow = false"
        :safe-area-inset-bottom="true"
        :round="true"
      >
        <van-picker
          :visible-item-count="6"
          show-toolbar
          :columns="store.state.gradeOptions"
          @confirm="changeGrade"
          @cancel="gradePickerShow = false"
        >
        </van-picker>
      </van-popup>
      <van-field title-width="200rpx" label="毕业院校&专业" disabled right-icon="plus"
                 @click-icon="addSchool"></van-field>
      <van-field label="工作单位" :value="myInfo.work_unit"></van-field>
      <van-field label="常住地址" :value="myInfo.city.slice(7)"></van-field>
      <van-field label="电话" :value="myInfo.phone"></van-field>
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
import { mapGetters, mapState } from "@/store/vuex-utils"
import { computed, ref, watch } from "vue"

const store = useStore()
onLoad(() => {
  store.dispatch('getMyInfo')
})
const submit = () => {

}
const changePassword = () => {

}
const logout = () => {
  uni.removeStorage({ key: 'token' })
  uni.removeStorage({ key: 'userId' })
  uni.navigateTo({
    url: '/pages/login/login'
  })
}

const newSchool = {}

const addSchool = () => {
  console.log('add')
}

const { myInfo } = mapState()
const clickCell = (val) => {
  console.log(val)
}

const genderPickerShow = ref(false)
const genderColumns = [
  { label: '男', value: 1},
  { label: '女', value: 0}
]
const changeGender = (e) => {
  genderPickerShow.value = false
  console.log(e.detail.value.value)
}

const enterYear = computed(() => {
  return store.state.gradeOptions.find(i => i.includes(myInfo.value.enter_year)) || '未知'
})
const gradePickerShow = ref(false)
const changeGrade = (e) => {
  gradePickerShow.value = false
  console.log(parseInt(e.detail.value))
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

  .info-panel {
    ::v-deep .van-field__control {
      text-align: right;
    }
  }
}
</style>
