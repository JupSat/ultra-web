<!--
 * @Description: 
 * @version: 
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 16:11:32
 * @LastEditors: JupSat
 * @LastEditTime: 2023-04-26 16:28:01
-->
<template>
  <div class="app-home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="Example" name="first">
        <Example></Example>
      </el-tab-pane>
      <el-tab-pane label="Example2" name="second"
        ><Example2></Example2
      ></el-tab-pane>
      <el-tab-pane label="Hooks" name="third">
        <div>
          num1:<input v-model.number="num1" style="width: 100px" />
          <br />
          num2:<input v-model.number="num2" style="width: 100px" />
        </div>
        <span>加法等于:{{ addNum }}</span> <br />
        <span>减法等于:{{ subNum }}</span>
      </el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<script setup>
import { nextTick, ref } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import Example from './Example'
import Example2 from './Example2'
import useAdd from '@/hooks/useAdd.js' //引入自动hook
import { useSub } from '@/hooks/useSub.js' //引入自动hook

const num1 = ref(2)
const num2 = ref(1)
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)
//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { subNum, subFn } = useSub({ num1, num2 })
subFn(num1.value, num2.value)

const activeName = ref('first')

const handleClick = (event) => {
  console.log('event', event)
  nextTick()
}
</script>
<style scoped>
.app-home {
  margin-top: 50px;
  /* margin-left: 430px; */
}
.demo-tabs {
  width: 100%;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
