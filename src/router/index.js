/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 16:05:25
 * @LastEditors: JupSat
 * @LastEditTime: 2023-05-08 22:07:17
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { useMasterStoreWithOut } from '@/pinia/modules/master'
const store = useMasterStoreWithOut()

const routes = [
  {
    path: '/',
    redirect: '/master-home',
  },
  {
    path: '/master-home',
    name: 'master-home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main'),
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () =>
  //     import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/master-home') {
    if (store.token) {
      next()
    } else {
      console.log('主应用 - 未登录 去登陆')
      next('/master-home')
    }
  } else {
    next()
  }
})

export default router
