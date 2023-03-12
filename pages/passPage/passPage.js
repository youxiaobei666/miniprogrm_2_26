// pages/passPage/passPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password: ''
  },
  setPassword: function(e){
    this.setData({
      password: e.detail.value
    })
  },
  toDoLogin: function () {
    console.log(this.data.password);
    // 判断
    if (this.data.password === '010203') {
      
      wx.switchTab({
        url: '/pages/home/home',
      })
    } else {
      wx.showModal({
        title: '密码错误',
        complete: (res) => {
          if (res.cancel) {

          }

          if (res.confirm) {

          }
        }
      })
      this.setData({
        password:''
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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