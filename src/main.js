/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 11:23:56
 * @LastEditors: JupSat
 * @LastEditTime: 2023-03-29 12:42:32
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import start from '@/micros';

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .mount('#app-base');

start({ sandbox: { experimentalStyleIsolation: true } });
