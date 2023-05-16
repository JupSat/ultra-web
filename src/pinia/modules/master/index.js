/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-05-04 12:34:32
 * @LastEditors: JupSat
 * @LastEditTime: 2023-05-08 22:05:04
 */
import { defineStore } from 'pinia'
import { store } from '@/pinia'

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

// 防止提示安装pinia
export function useMasterStoreWithOut() {
  return useMasterStore(store)
}
