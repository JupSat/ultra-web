/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 11:23:56
 * @LastEditors: JupSat
 * @LastEditTime: 2023-04-08 11:31:31
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import start from '@/micros'
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(Icons)) {
  app.component(key, component)
}

app
  .use(store)
  .use(router)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .mount('#app-base')

start({ sandbox: { experimentalStyleIsolation: true } })
