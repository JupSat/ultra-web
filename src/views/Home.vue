<!--
 * @Description: 
 * @version: 
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 16:11:32
 * @LastEditors: JupSat
 * @LastEditTime: 2023-04-18 16:47:51
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
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
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
