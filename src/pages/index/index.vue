<template>
  <div class="max-container">
    <div class="search-box box">
      <van-field
        class="search"
        title-width="40"
        label="搜索"
        :value="name"
        placeholder="请输入联系人姓名"
        @change="changeSearchText"
      />
    </div>
    <div class="picker-box box">
      <van-picker :visible-item-count="3" :columns="gradeOptions"></van-picker>
    </div>
    <div class="user-list box">
      <div class="user" v-for="(user, keyIndex) in 20" :key="keyIndex">
        <div class="avatar-box">
          <img class="avatar" src="~@/static/logo.png" alt="">
        </div>
        <div class="name">张三</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { onLoad } from "@dcloudio/uni-app"
import { debounce } from "lodash"
import dayjs from "dayjs"

const name = ref('')
onLoad(() => {
  console.log('onload')
})
const changeSearchText = (e) => {
  getList(e)
}
const getList = debounce((e) => {
  console.log('获取list', 'name', e.detail)
}, 500)

const numberList = '十一二三四五六七八九'.split('')
const transNumber = (year) => {
  if (year <= 2013) return ''
  const left = year - 2013
  let res = ''
  if (left < 10) {
    res = numberList[left]
  } else if (left === 10) {
    res = numberList[0]
  } else if (left % 10 === 0) {
    res = numberList[left / 10] + numberList[0]
  } else if (left < 20) {
    const tempArr = (left + '').split('')
    res = `${numberList[0]}${numberList[tempArr[1]]}`
  } else {
    const tempArr = (left + '').split('')
    res = `${numberList[tempArr[0]]}${numberList[0]}${numberList[tempArr[1]]}`
  }
  return res
}
let gradeOptions = []
const generateGradeOptions = () => {
  console.log(dayjs().year())
  const currentYear = dayjs().year()
  for (let i = 2014; i <= currentYear; i++) {
    gradeOptions.push(`${i}年第${transNumber(i)}届`)
  }
  console.log(gradeOptions)
}
generateGradeOptions()
</script>

<style lang="scss" scoped>
.max-container {
  height: 100vh;
  padding: 0 20rpx;
  border-top: 1px solid transparent;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;

  .box {
    border: 2rpx solid grey;
    border-radius: 20rpx;
    margin-top: 20rpx
  }

  .search-box {
    display: flex;
    align-items: center;
    padding: 6rpx;

    .search {
      width: 100%;
    }
  }

  .picker-box {
    padding: 10rpx;
  }

  .user-list {
    flex: 1;
    padding: 20rpx;
    overflow: auto;
    margin-bottom: 20rpx;

    .user {
      border: 2rpx solid grey;
      border-radius: 10rpx;
      margin-top: 20rpx;
      display: flex;
      align-items: center;
      padding: 10rpx;

      &:first-child {
        margin-top: 0;
      }

      .avatar-box {
        width: 45%;
        .avatar {
          height: 80rpx;
          width: 80rpx;
          border-radius: 40rpx;
          float: right;
        }
      }

      .name {
        flex: 1;
        padding-left: 20rpx;
      }
    }
  }

}
</style>
