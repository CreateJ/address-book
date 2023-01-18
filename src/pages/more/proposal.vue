<template>
  <div class="max-container">
    <div class="my-panel">
      <textarea @input="proposalChange" placeholder="请在此处输入您的建议" :maxlength="200"/>
      <div class="text-left">还可输入{{ leftCount }}字</div>
    </div>
    <div class="my-button">
      <my-big-button bg-color="#FF5733" @click="submit">提交</my-big-button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import utils from "@/common/utils"

const message = ref('')
const proposalChange = (e) => {
  console.log(e.detail.value)
  message.value = e.detail.value
}
const leftCount = computed(() => {
  return 200 - message.value.length
})

const submit = () => {
  if(message.value.length) {

  } else {
    utils.useToast('请输入意见再提交！', {icon: 'none'})
  }
}

</script>

<style scoped lang="scss">
.max-container {
  padding: 20rpx;

  .my-button {
    padding: 20rpx;
  }


  .text-left {
    text-align: right;
    color: grey
  }
}
</style>
