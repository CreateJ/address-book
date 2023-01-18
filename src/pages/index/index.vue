<template>
  <div class="max-container">
    <div class="search-box box">
      <van-field
        class="search"
        title-width="40"
        label="搜索"
        :value="params.name"
        placeholder="请输入联系人姓名"
        @change="changeSearchText"
        clearable
      />
    </div>
    <div class="picker-box box">
      <van-picker @change="changeYear" :visible-item-count="3" :columns="store.state.gradeOptions"></van-picker>
    </div>
    <scroll-view scroll-y="true" class="scroll-user-list" @scrolltolower="query">
      <div class="empty" v-if="!table.length">暂无数据或无权限</div>
      <div class="user" v-for="user in table" :key="user.id">
        <div class="avatar-box">
          <img class="avatar" src="~@/static/logo.png" alt="">
        </div>
        <div class="name">{{ user.name }}</div>
      </div>
    </scroll-view>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { onLoad, onShow } from "@dcloudio/uni-app"
import { useStore } from "vuex"
import api from "@/common/api"
import utils from "@/common/utils"
import { debounce } from "lodash"

const store = useStore()
console.log('store', store)


const table = ref([])

onShow(() => {
  reset()
})

const reset = () => {
  params.page = 0
  table.value = []
  const userId = utils.getStorageSync('userId')
  userId && query()
}
const params = {
  enter_year: 2014,
  page: 0,
  page_size: 10,
  name: ''
}

const query = () => {
  params.page++
  api.commonApi.getUserList(params).then(res => {
    if (res.user_list && res.user_list.length) {
      table.value.push(...res.user_list)
    }
  })
}
const changeYear = (e) => {
  params.enter_year = parseInt(e.detail.value)
  reset()
}

const changeSearchText = (e) => {
  params.name = e.detail
  console.log(params.name)
  debounce(reset, 1)
}

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
    border-radius: 20rpx;
    margin-top: 20rpx
  }

  .search-box {
    display: flex;
    align-items: center;
    padding: 6rpx;
    background: #00BAAD;
    border: none;

    ::v-deep.van-cell {
      background: #00BAAD;

      .van-field__label {
        color: white;
      }

      &::after {
        display: none
      }
    }

    .search {
      width: 100%;
    }
  }

  .picker-box {
    padding: 10rpx;
    background: #FF5733;
    border: none;

    ::v-deep.van-picker {
      background: #FF5733;

      .van-picker__mask {
        background: none;
      }

      .van-picker-column__item.van-picker-column__item--selected {
        color: white;
      }

      .van-picker-column__item {
        color: #A6A6A6;
      }
    }
  }

  .user {
    border-radius: 10rpx;
    margin: 20rpx 10rpx;
    display: flex;
    align-items: center;
    padding: 10rpx;
    box-shadow: 0px -4rpx 4rpx 0px #0000001b, 0px 4rpx 4rpx 0px #0000001b;


    &:last-child {
      margin-bottom: 30rpx;
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

  .scroll-user-list {
    flex: 1;
    overflow: auto;
    padding: 20rpx;
    margin-top: 20rpx;
    margin-bottom: 20rpx;
    box-shadow: 0px -1.92px 1.92px 0px #0000001b, 0px 1.92px 1.92px 0px #0000001b;
    border-radius: 20rpx;

    .empty {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: grey
    }
  }

}
</style>
