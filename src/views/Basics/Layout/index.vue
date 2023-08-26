<template>
  <div class="app-main">
    <div
      v-if="useMasterStore().token && !isDemoModal"
      class="app-nav"
      :style="{
        width: isCollapse ? '0' : '200px',
        padding: isCollapse ? '0' : '20px',
      }"
    >
      <template v-for="menu in menuList" :key="menu.name">
        <div
          v-if="!isCollapse"
          class="nav-a-btn"
          :class="{ 'router-active': menuActive === menu.path }"
          @click="menuChangeRouter(menu)"
        >
          {{ menu.btnName }}
        </div>
        <div class="collapse" :style="{ width: isCollapse ? '10px' : '200px' }">
          <span @click="changeCollapse">
            <el-affix>
              <el-icon size="16" :color="'#8f9bb3'">
                <DArrowLeft v-if="!isCollapse" />
                <DArrowRight v-else />
              </el-icon>
            </el-affix>
          </span>
        </div>
      </template>
    </div>
    <div class="app-content" v-if="!isDemoModal">
      <div class="app-header-content" v-show="appToken">
        <AppList @show-menu="showAppMenu" />
        <div>{{ crumbsRouter }}</div>
        <el-button type="primary" round @click="loginOut">退出登录</el-button>
      </div>
      <div class="app-container">
        <router-view></router-view>
        <!-- 新添加，微应用的容器 -->
        <div id="micro-container"></div>
      </div>
    </div>
    <div v-if="isDemoModal">
      <Timeout></Timeout>
    </div>
    <div class="test-demo">
      <el-button type="text" @click="testDemo">{{
        isDemoModal ? '返回主页' : '测试'
      }}</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, computed, watch, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { useStore } from 'vuex'
import { useMasterStore } from '@/pinia/modules/master'

import { actions } from '@/micros'
import AppList from '@/components/AppList'
import Timeout from '@/demo/Timeout'

const router = useRouter()
const route = useRoute()
// const store = useStore()

const isDemoModal = ref(false)
const testDemo = () => {
  isDemoModal.value = !isDemoModal.value
}

const routeList = [
  {
    name: 'home',
    path: '/master-home',
    btnName: '主项目-home',
    index: 1,
  },
  {
    name: 'tpl-home',
    path: '/vue-mgt-tpl/home',
    btnName: '子项目-home',
    index: 2,
  },
]

const state = reactive({
  menuList: routeList.filter((item) => item.index === 1),
  crumbsRouter: computed(() => {
    const item = state.menuList.find((item) => state.menuActive == item.name)
    return item ? item.btnName : ''
  }),
  // 从环境变量中取参数
  appId: process.env.VUE_APP_MICRO_ENTRY,
  appToken: computed(() => useMasterStore().token) || 'xxxxx',
  isShowMenu: false,
  isCollapse: false,
})

const changeCollapse = () => {
  state.isCollapse = !state.isCollapse
}

watch(
  () => route.path,
  (val, oval) => {
    console.log('监听路由变化', val, oval)
  }
)

onMounted(() => {
  actions.onGlobalStateChange((state) => {
    // state: 变更后的状态; prevState: 变更前的状态
    console.log('主应用观察者：状态改变', state)
    let token = state.globalToken
    useMasterStore().setToken(token)
  })
})

let menuChangeRouter = (row) => {
  state.menuActive = row.name
  // 路由跳转方式
  router.push({ path: row.path })
  // 跳转方法二
  //  window.history.pushState({}, '', '/#'+row.path)
}

let loginOut = () => {
  useMasterStore().setToken('')
  router.push('/master-home')
}

const showAppMenu = (appId) => {
  state.menuList = routeList.filter((item) => item.index === appId)
  if (!state.menuList.length) {
    state.menuList = routeList.filter((item) => item.index === 1)
  }
  // state.isShowMenu = appId ? true : false
}

const menuActive = computed(() => route.path)
const { menuList, crumbsRouter, appToken, isCollapse } = toRefs(state)
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
$leftWidth: 200px;
.app-main {
  background: #f6f7fc;
}
.app-nav {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: $leftWidth;
  height: calc(100% - 50px);
  margin-top: 50px;
  box-shadow: 2px 0px 10px 0px rgb(0, 47, 60, 0.2);
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  z-index: 9;

  .nav-a-btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f3f4f5;
    margin-bottom: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .router-active {
    color: #42b983;
    background: #deeefdde;
  }
}
.app-content {
  height: 100%;
  .app-header-content {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 8%);
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .app-container {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }
}
.collapse {
  height: 100%;
  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    height: 82px;
    text-align: right;
    top: 35%;
    right: -16px;
    border-radius: 0 5px 5px 0;
    // background-color: #fff !important;
    background-color: rgb(26, 23, 56) !important;
    cursor: pointer;
  }
}
.test-demo {
  display: flex;
  justify-content: flex-end;
}
</style>
