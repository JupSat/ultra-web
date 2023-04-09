/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 15:14:06
 * @LastEditors: JupSat
 * @LastEditTime: 2023-04-09 11:24:31
 */
import { createStore } from 'vuex'

const tokenPlugin = (store) => {
  let token = localStorage.getItem('master-token')
  if (token) {
    store.commit('setToken', token)
  }
}

export default createStore({
  state: {
    token: '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('master-token', token)
    },
    loginOut(state) {
      state.token = ''
      localStorage.removeItem('master-token')
    },
  },
  actions: {},
  modules: {},
  plugins: [tokenPlugin],
})
