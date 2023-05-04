/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-05-04 12:34:32
 * @LastEditors: JupSat
 * @LastEditTime: 2023-05-04 12:44:25
 */
import { defineStore } from 'pinia'

const tokenPlugin = (store) => {
  let token = localStorage.getItem('master-token')
  if (token) {
    store.commit('setToken', token)
  }
}

export const useMasterStore = defineStore('master', {
  state: () => {
    return {
      token: '',
    }
  },
  getters: {},
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('master-token', token)
    },
    loginOut(state) {
      this.token = ''
      localStorage.removeItem('master-token')
    },
  },
  plugins: [tokenPlugin],
})
