/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 11:23:56
 * @LastEditors: JupSat
 * @LastEditTime: 2023-03-21 15:40:30
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import start from '@/micros';

const Vue = createApp(App);

Vue.use(store);
Vue.use(router);
Vue.use(ElementPlus, { size: 'small', zIndex: 3000 });
Vue.mount('#app-base');

start({ sandbox: { experimentalStyleIsolation: true } });
