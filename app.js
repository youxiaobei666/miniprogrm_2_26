
import {store} from './store/index'
// 获取以前的旧数据

const localRememberLIst = wx.getStorageSync('rememberList')

/**
 * 开始覆盖
 * 考虑第一次加载本地无数据(值为空字符串)的情况
 */
if (localRememberLIst === '') {
  wx.setStorageSync('rememberList', store.rememberList)
} else {
 store.coverRememberList(localRememberLIst) // 复原全部备忘录
 store.listLength = localRememberLIst.length // 覆盖备忘录个数
}

