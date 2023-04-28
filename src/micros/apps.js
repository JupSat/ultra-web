/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 15:08:31
 * @LastEditors: JupSat
 * @LastEditTime: 2023-04-05 12:34:30
 */
import router from '@/router'
const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: 'vue-micro-app',
    entry: '//localhost:8082',
    container: '#micro-container',
    activeRule: '#/vue2-micro-app',
    props: {
      router: router,
    },
  },
  {
    name: 'vue-mgt-tpl',
    entry: '//localhost:8081', // '//www.jupsat.top',
    container: '#micro-container',
    activeRule: '#/vue-mgt-tpl',
    props: {
      router: router,
    },
  },
]
export default apps
