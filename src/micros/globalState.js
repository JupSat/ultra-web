/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-30 21:19:15
 * @LastEditors: JupSat
 * @LastEditTime: 2023-03-30 21:31:42
 */
import { initGlobalState } from 'qiankun';

export const initialState = {
  userInfo: null,
  globalConfig: null,
  router: null,
  currentRoute: {
    currentPage: '',
    currentModuleName: '',
  },
  globalToken: '',
};

export default initGlobalState(initialState);
