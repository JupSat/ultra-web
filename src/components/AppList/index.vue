<!--
 * @Description: 
 * @version: 
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-04-08 11:39:50
 * @LastEditors: JupSat
 * @LastEditTime: 2023-05-15 21:12:41
-->
<template>
  <el-icon :size="23" :color="color" @click="drawer = true">
    <Grid />
  </el-icon>

  <el-drawer
    v-model="drawer"
    :direction="direction"
    :before-close="handleClose"
  >
    <template #header>
      <h3>选择应用</h3>
    </template>
    <template #default>
      <div>
        <h3>Essential Links</h3>
        <ul>
          <li>
            <el-button type="text" size="26px" @click="showApp(1)"
              >子应用一</el-button
            >
          </li>
          <li>
            <el-button type="text" size="26px" @click="showApp(2)"
              >子应用二</el-button
            >
          </li>
        </ul>
      </div>
    </template>
  </el-drawer>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const drawer = ref(false)
const direction = ref('ttb')

const handleClose = () => {
  drawer.value = false
}
const emit = defineEmits(['showMenu'])
function showApp(id) {
  drawer.value = false
  emit('showMenu', id)
}
</script>

<style>
.el-drawer {
  height: 60% !important;
}

.el-drawer__header {
  margin-bottom: -45px !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
