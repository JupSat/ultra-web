/**
 * @author JupSat
 * @description 设置token
 * @param {*}
 * @return
 */
export function setToken(token) {
  return sessionStorage.setItem('token', token)
}

/**
 * @author JupSat
 * @description 获取token
 * @param {*}
 * @return
 */
export function getToken() {
  return sessionStorage.getItem('token')
}

/**
 * @author JupSat
 * @description 清除token
 * @param {*}
 * @return
 */
export function clearToken() {
  return sessionStorage.clear('token')
}
