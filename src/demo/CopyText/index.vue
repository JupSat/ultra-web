<template>
  <div style="text-align: center; padding-top: 30px">
    <h3>接口超时处理</h3>
    <el-input
      ref="inputRef"
      placeholder="请输入xxxfasdf发斯蒂芬"
      v-model="inputVal"
      @click="copyPlaceholderText"
    ></el-input>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputRef = ref(null)
    const inputVal = ref('')

    const copyPlaceholderText = () => {
      const inputElement = inputRef.value.$el.querySelector('.el-input__inner')
      const placeholderText = inputElement.getAttribute('placeholder')
      if (!inputVal.value) {
        inputVal.value = placeholderText
      }
    }

    return {
      inputVal,
      inputRef,
      copyPlaceholderText,
    }
  },
}
</script>
