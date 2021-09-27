/*
 * @Author: wanghuihui
 * @Date: 2021-09-27 14:46:49
 * @LastEditors: wanghuihui
 * @LastEditTime: 2021-09-27 15:29:00
 * @Description: 用于存储用户信息
 */
import { createStore } from 'vuex'

const defaultState= {
    token: '',
}
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    SET_TOKEN: (state: typeof defaultState, token ) => {
      state.token = token
    },
  },
  actions: {
  },
  getters: {}
})