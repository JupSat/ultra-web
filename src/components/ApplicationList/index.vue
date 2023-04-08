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
      <h4>选择应用</h4>
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
            <el-button type="text" size="26px" @click="showApp(1)"
              >子应用二</el-button
            >
          </li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
          <li>
            <a href="https://vuejs.org" target="_blank" rel="noopener"
              >Core Docs</a
            >
          </li>
          <li>
            <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
              >Forum</a
            >
          </li>
          <li>
            <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
              >Community Chat</a
            >
          </li>
          <li>
            <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
              >Twitter</a
            >
          </li>
          <li>
            <a href="https://news.vuejs.org" target="_blank" rel="noopener"
              >News</a
            >
          </li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
          <li>
            <a href="https://router.vuejs.org" target="_blank" rel="noopener"
              >vue-router</a
            >
          </li>
          <li>
            <a href="https://vuex.vuejs.org" target="_blank" rel="noopener"
              >vuex</a
            >
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-devtools#vue-devtools"
              target="_blank"
              rel="noopener"
              >vue-devtools</a
            >
          </li>
          <li>
            <a
              href="https://vue-loader.vuejs.org"
              target="_blank"
              rel="noopener"
              >vue-loader</a
            >
          </li>
          <li>
            <a
              href="https://github.com/vuejs/awesome-vue"
              target="_blank"
              rel="noopener"
              >awesome-vue</a
            >
          </li>
        </ul>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { ElMessageBox } from 'element-plus';

const drawer = ref(false);
const direction = ref('ttb');
const radio1 = ref('Option 1');

const handleClose = () => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      drawer.value = false;
    })
    .catch(() => {
      // catch error
    });
};
function cancelClick() {
  drawer.value = false;
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer.value = false;
    })
    .catch(() => {
      // catch error
    });
}
const emit = defineEmits(['showMenu']);
function showApp(id) {
  drawer.value = false;
  emit('showMenu', id);
}
</script>

<style>
.el-drawer {
  height: 80% !important;
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
