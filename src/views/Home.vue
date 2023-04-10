<!--
 * @Description: 
 * @version: 
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 16:11:32
 * @LastEditors: JupSat
 * @LastEditTime: 2023-04-10 17:14:58
-->
<template>
  <div class="app-home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Example></Example>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Example from './Example'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Example,
  },
}
</script>
<style scoped>
.app-home {
  margin-top: 50px;
  /* margin-left: 430px; */
}
</style>
