<template>
  <div class="more-container">
    <div class="banner">
      <view class="banner-left">
        <img class="avatar" src="/static/logo.png" alt="">
      </view>
      <view class="banner-right">
        <div class="name">name</div>
        <div class="welcome-text">welcome</div>
      </view>
    </div>
    <div class="my-panel link-panel">
      <van-cell @click="linkTo(item.link)" :key="item.link" v-for="item in linkList" :icon="item.icon" :title="item.label">
        <template v-slot:right-icon>
          <image style="height: 30rpx;width: 30rpx" src="/static/icon-link.png"></image>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script setup>
const linkList = [
  {
    label: '我的信息',
    icon: '/static/icon-account.png',
    link: '/pages/more/mine'
  },
  {
    label: '东里义教简介',
    icon: '/static/icon-dlyj.png',
    link: '/pages/more/introduction'
  },
  {
    label: '意见反馈',
    icon: '/static/icon-proposal.png',
    link: '/pages/more/proposal'
  },
  {
    label: '关于小程序',
    icon: '/static/icon-about.png',
    link: '/pages/more/about'
  }
]

const linkTo = (link) => {
  console.log(link)
  uni.navigateTo({
    url: link
  })
}
</script>

<style scoped lang="scss">
@import url('@/common/common.scss');

.more-container {
  .banner {
    height: 250rpx;
    background: black;
    display: flex;

    > div {
      height: 100%
    }

    .banner-left {
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .avatar {
        height: 120rpx;
        width: 120rpx;
        margin-right: 20rpx;
        border-radius: 50%;
      }
    }

    .banner-right {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      color: white;

      .welcome-text {
        margin-top: 20rpx
      }
    }
  }
  .link-panel {

  }
}
</style>
