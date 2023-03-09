// 获取store
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/index.js'
 
Page({
  data: {
    searchData: '',
    swiperList: [{
      id:1,
      imgUrl: 'https://pic2.zhimg.com/80/v2-1fad965abf97015d080dae8aa73f0535_qhd.jpg'
    },{
      id:2,
      imgUrl: 'https://pic3.zhimg.com/80/v2-0f4ac28c4484e90dd02449a8d5728736_qhd.jpg'
    },{
      id:3,
      imgUrl: 'https://picx.zhimg.com/80/v2-36f0bc38ea9a11d05bbbd267b62a7405_qhd.jpg'
    },{
      id:4,
      imgUrl: 'https://pic4.zhimg.com/80/v2-aa21df808f0117cb4bfe8bf0a59a8e5b_r.jpg'
    },{
      id:5,
      imgUrl: 'https://pic3.zhimg.com/80/v2-15219547197115903bddd56705be1c62_r.jpg'
    },{
      id:6,
      imgUrl: 'https://pic3.zhimg.com/80/v2-a57f0cd5c2c858b07bf8061abfda0e56_r.jpg'
    },{
      id:7,
      imgUrl: 'https://picx.zhimg.com/80/v2-6726e3591b2d53750e6bb36b0d2dc8a7_r.jpg'
    },{
      id:8,
      imgUrl: 'https://pic2.zhimg.com/80/v2-658bf80cda89b4ded7060b47bdf66c01_r.jpg'
    },], 
    tempInfo: '标题', // 需要传输的数据，标题
    innerText: '文本', // 需要传输的数据，标题
    // 数据源
    rowListData: [{
      id: 1,
      info: '奶茶',
      iconPath: '/public/icon/milkTea.png',
      text: '喜欢喝甜甜的奶茶，比如茶百道的果茶、古铭的杨枝甘露，书亦的招牌哇！'
    },
    {
      id: 2,
      info: '蛋糕',
      iconPath: '/public/icon/cake.png',
      text: '蛋糕主要是香芋夹心的，甜甜的，还有一点也很重要，就是得好看，我也给她买过生日蛋糕，不错哦，记得吃动物奶油，健康！'
    },
    {
      id: 3,
      info: '包子',
      iconPath: '/public/icon/bun.png',
      text: '说到包子，学校的荷花的卤肉包最好吃，我每天都给她带包子和肉包，还有9栋附近的肉包，比较多油，每次都漏到手上！'
    },
    {
      id: 4,
      info: '可乐',
      iconPath: '/public/icon/cola.png',
      text: '可乐主要是我比较喜欢喝，她不怎么喜欢，每次就喝一口，虽然喝可乐不太好，但是奈何是甜啊，以后我会多多注意的，少喝，对身体好！'
    },
    {
      id: 5,
      info: '草莓',
      iconPath: '/public/icon/strawberry.png',
      text: '草莓，颜值非常高的一种水果，又甜又好看谁不爱，就是价格贵了一点，我们在学校吃的最多的就是苹果🍎了，虽然不及草莓，但是有她在什么都是甜的！'
    }
    ],
    ifShow: '',
    ifUp: '',
    innerUrl: '',
    ifShowSecretCover: 'visible',
    rememberIndexRadom: '',
    flag : true,
    secretRadomIndex: ''
  },

  // rowlist 单个点击
  showInfo: function(e){
    // 获取一下id
    let id = e.currentTarget.id;
    // 注意数组下标与实际id 小1
    let info = this.data.rowListData[id-1].info
    let text = this.data.rowListData[id-1].text
    // id 与传值的对应,每次点击都得传 show 类明去自定义组件
    switch(id) {
      case "1" : this.setData({ tempInfo: info,ifShow: 'show', ifUp: 'up',innerUrl: 'https://pic4.zhimg.com/80/v2-e9bc40ce16eb72038eb5ab44b34259d1_r.jpg',innerText: text}); break;
      case "2" : this.setData({tempInfo: info,ifShow: 'show', ifUp: 'up',innerUrl: 'https://pic4.zhimg.com/80/v2-b87660b9cbfe374da57481c366d63ba9_r.jpg',innerText: text}); break;
      case "3" : this.setData({tempInfo: info,ifShow: 'show', ifUp: 'up',innerUrl: 'https://picx.zhimg.com/80/v2-3986ed0b76c71b05c2f62629ff7b78a5_r.jpg',innerText: text}); break;
      case "4" : this.setData({tempInfo: info,ifShow: 'show', ifUp: 'up',innerUrl: 'https://pica.zhimg.com/80/v2-f7b9562c1ff07036092878d4c9ccb368_r.jpg',innerText: text});  break;
      case "5" : this.setData({tempInfo: info,ifShow: 'show', ifUp: 'up',innerUrl: 'https://pica.zhimg.com/80/v2-9a97e3e9fa044e1a04fbffbb9802da3c_r.jpg',innerText: text});  break;
      default: console.log("无效的点击");
    }
  },
  // 输入框事件
  searchEvent: function (e) {
    // 输入框的值为： e.detail.value
    // 修改数据
    this.setData({
      searchData: e.detail.value
    })

  },
  // 显示秘密方法
  showSecret : function(){
    // 随机index
    const random = Math.floor(Math.random()*6)
    this.setData({
      secretRadomIndex: random
    })
    this.setData({
      ifShowSecretCover: 'hidden'
    })
    // 设置样式
    if(this.data.flag) {
      this.setData({
        ifShowSecretCover: 'hidden',
        flag: false
      })
    } else {
      this.setData({
        ifShowSecretCover: 'visible',
        flag: true
      })
    }
  },
  // 跳转过往
  toNoteBook: function(){
    wx.switchTab({
      url: '/pages/noteBook/noteBook',
    })
    
  },
  // 跳转备忘录
  toRemember: function(){
    wx.switchTab({
      url: '/pages/remember/remember',
    })
  },
  // 页面加载周期
  onLoad(options) {
    // 绑定store数据
    this.storeBindings = createStoreBindings(this,{
      store,
      fields: ['rememberList','secretList'],
    })
    // 请求轮播图数据
    // wx.request({
    //   url: 'http://www.youxiaobei.top:1226',
    //   success: (data) => {
    //     console.log(data);
    //     // 得到数据后修改 data.swiperList
    //     this.setData({
    //       swiperList: data.data
    //     })
    //     // 本地存储
    //     wx.setStorageSync('swiperList', data.data)
    //   }
    // })
    const random = Math.floor(Math.random()*3)
    this.setData({
      rememberIndexRadom: random
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