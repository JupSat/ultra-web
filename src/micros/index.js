/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 15:08:20
 * @LastEditors: JupSat
 * @LastEditTime: 2023-05-10 16:01:37
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useMasterStoreWithOut } from '@/pinia/modules/master'
import actions from './globalState'
import {
  start,
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
} from 'qiankun'
import apps from './apps'
const store = useMasterStoreWithOut()

// 微应用通信 定义全局状态，并返回通信方法
actions.setGlobalState({
  globalToken: '',
})

registerMicroApps(apps, {
  beforeLoad: (app) => {
    NProgress.start() // 加载微应用前，加载进度条
    console.log('before load', app.name)
    if (store.token) {
      //  微应用加载检查登录 已登录 子应用直接传参登录
      actions.setGlobalState({ globalToken: store.state.token })
    }

    return Promise.resolve()
  },
  beforeMount: [
    (app) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    },
  ],
  afterMount: (app) => {
    NProgress.done() // 加载微应用前，进度条加载完成
    console.log('after mount', app.name)
    return Promise.resolve()
  },
  afterUnmount: [
    (app) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    },
  ],
})

addGlobalUncaughtErrorHandler((event) => {
  console.error(event)
  const { message: msg } = event
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    console.error('微应用加载失败，请检查应用是否可运行')
  }
})

export default start
export { actions }
