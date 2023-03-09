import {
  store
} from '../../store/index'
import {
  toDay
} from '../../utils/getTime/index'


Page({
  /**
   * 页面的初始数据
   */
  data: {
    remList: '',
    toDay: '',
    ifShow: '',
    ifUp: '',
    editRem:'',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 备忘录总表
    this.setData({
      remList: store.rememberList,
      // 时间传子
      toDay: toDay,
      ifShow: store.ifShow,
      ifUp: store.ifUp,
      editRem: store.editRem
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})