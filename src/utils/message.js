/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-04-17 12:22:37
 * @LastEditors: JupSat
 * @LastEditTime: 2023-04-17 12:23:16
 */
import { ElMessage } from 'element-plus'

export function message(
  message = '',
  type = 'success',
  duration = 2000,
  grouping = false
) {
  ElMessage.closeAll()
  ElMessage({
    message,
    type,
    grouping,
    duration,
  })
}
