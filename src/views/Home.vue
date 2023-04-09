<!--
 * @Description: 
 * @version: 
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 16:11:32
 * @LastEditors: JupSat
 * @LastEditTime: 2023-03-29 12:45:48
-->
<template>
  <div class="app-home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
<style scoped>
.app-home {
  margin-top: 180px;
  margin-left: 430px;
}
</style>
