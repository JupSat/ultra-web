<template>
  <div style="text-align: center; padding-top: 130px">
    <div>接口超时处理</div>
    <el-button @click="testInterface">接口测试</el-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { loginApi } from '@/api/user'
import { message } from '@/utils/message'

const testInterface = (params) => {
  return Promise.race([testFn(params), timeoutFn(100)])
    .then((res) => {
      const msg = '信息：' + res ? res.msg : ''
      console.log(msg)
      message(msg, 'success')
    })
    .catch((err) => {
      console.log(err)
      message(err, 'warning')
    })
}

const formData = reactive({
  username: 'xxx',
  password: 'xxx',
  captcha: '',
})

const testFn = (params) => {
  const formData1 = formData
  return new Promise((resolve, reject) => {
    loginApi(formData1).then((res) => {
      if (res.code === 1) {
        reject(res.msg)
      }
      resolve(res.msg)
    })
  })
}

const timeoutFn = (ms) => {
  const msg = '接口超时'
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject(msg + ms + '毫秒')
    }, ms)
  })
}
</script>

<style></style>
