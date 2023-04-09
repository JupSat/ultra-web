/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 16:05:25
 * @LastEditors: JupSat
 * @LastEditTime: 2023-03-29 12:45:04
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    redirect: '/master-home',
  },
  {
    path: '/master-home',
    name: 'master-home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.token) {
      next()
    } else {
      console.log('主应用 - 未登录 去登陆')
      next('/login')
    }
  } else {
    next()
  }
})

export default router
