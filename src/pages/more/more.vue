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
  </div>
</template>

<script>
export default {
  name: 'more'
}
</script>

<style scoped lang="scss">
@import url('@/common/common.scss');

.more-container {
  .banner {
    height: 250rpx;
    background: black;
    display: flex;

    >div {
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
}
</style>
