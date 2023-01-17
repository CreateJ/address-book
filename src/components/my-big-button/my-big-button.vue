<template>
  <button class="big-button" :style="`background-color:${bgColor}`" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue"
const emit = defineEmits(["click"])

const props = defineProps({
  bgColor: {
    type: String,
    default: '#fff'
  }
})

const handleClick = () => {
  emit('click')
}
</script>

<style scoped lang="scss">
.big-button {
  border: none;
  box-shadow: inset 0px -3px 3px 0px #00000033, inset 0px 3px 3px 0px #00000033;
  border-radius: 0;
  color: white;

  &::after {
    display: none;
  }
}
</style>
