<template>
  <div class="max-container">
    <div class="title">
      东里义教通讯录
    </div>
    <div class="login-form">
      <van-cell-group>
        <van-field
          :value="form.name"
          label="姓名"
          left-icon="/static/icon-account.png"
          placeholder="请输入姓名"
          :border="false"
          title-width="2rem"
          @change="form.name = $event.detail"
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
        <van-cell
          class="cell"
          :value="form.enter_year !== '' ? form.enter_year : '请选择年级'"
          title="年级"
          icon="/static/icon-pw.png"
          title-width="2rem"
          @click="gradePickerShow = true"
        ></van-cell>
        <van-popup
          :show="gradePickerShow"
          position="bottom"
          @close="gradePickerShow = false"
          :safe-area-inset-bottom="true"
          :visible-item-count="6"
          :round="true"
        >
          <van-picker
            show-toolbar
            :columns="store.state.gradeOptions"
            @confirm="changeGrade"
            @cancel="gradePickerShow = false"
          >
          </van-picker>
        </van-popup>
        <van-field
          :value="form.phone"
          label="电话"
          left-icon="/static/icon-pw.png"
          placeholder="请输入电话"
          :border="false"
          title-width="2rem"
          @change="form.phone = $event.detail"
        />
      </van-cell-group>
      <my-big-button bg-color="#FF5733" @click="submitRegister">申请验证</my-big-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue"
import { useStore } from "vuex"
import api from "@/common/api"
import utils from "@/common/utils"

const store = useStore()
console.log('store', store)

const form = reactive({
  name: '张无',
  password: '12345678',
  enter_year: '2018第3届',
  phone: 13312345678
})
const onChange = (val) => {
  console.log(val)
}

const gradePickerShow = ref(false)
const changeGrade = (e) => {
  form.enter_year = e.detail.value
  gradePickerShow.value = false
}

const submitRegister = () => {
  const params = {
    ...form,
    enter_year: parseInt(form.enter_year),
    phone: parseInt(form.phone)
  }
  api.commonApi.register(params).then(res => {
    // utils.setStorage('userId', res.id)
    uni.navigateBack({
      success: () => {
        utils.useToast('申请成功', { icon: 'success' })
      }
    })
  })
}
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
    line-height: 0px;
    color: transparent;
    background: linear-gradient(180deg, #000000 0%, #000000 100%);
    -webkit-background-clip: text;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    margin-bottom: 100rpx;
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

    .cell {
      ::v-deep.van-cell__value {
        text-align: left;
        margin-right: 20rpx;
        padding: 0 0 0 20rpx;
      }
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
