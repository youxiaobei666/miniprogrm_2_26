// 导入store
import {
  store
} from '../../store/index'


Component({
  properties:{
    date: ''
  },
  /**
   * 组件的初始数据
   */
  data: {
    upText: '',
    
    index: 4, // 这个索引才是整个备忘录的索引
    weatherIndex: 1, // 这个索引只负责展示对应图片
    weatherList: [{
      text: '阴天',
      icon: '/public/weather/yinTian.png'
    }, {
      text: '晴天',
      icon: '/public/weather/qinTian.png'
    }, {
      text: '多云',
      icon: '/public/weather/duoYun.png'
    }, {
      text: '小雨',
      icon: '/public/weather/xiaoYu.png'
    }, {
      text: '雷雨',
      icon: '/public/weather/leiYu.png'
    }, ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dateChange: function (e) {
      this.setData({
        date: e.detail.value
      })
    },
    weatherChange: function (e) {
      this.setData({
        weatherIndex: e.detail.value
      })
    },
    inputed: function (e) {
      this.setData({
        upText: e.detail.value
      });
    },
    // 上传动作
    upted: function () {
      wx.showModal({
        title: '确认添加这条备忘录吗？',
        content: '',
        complete: (res) => {
          if (res.confirm) {
            // ps,动态获取index,值得一提的是：数组rememberList的长度就是本次要上传的index值
            this.setData({
              index: store.rememberList.length // 由上次的列表长度直接获取下次的索引
            })
            // 获取数据
            {
              let index = this.data.index; //1
              let innerText = this.data.upText // 获取内容 //2
              let innerWeatherIndex = this.data.weatherIndex // 获取图片索引以传递天气 
              let innerWeather = this.data.weatherList[innerWeatherIndex].text // 获取天气 // 5
              let innerDate = this.data.date // 获取时间 //3
              let innerWeatherIcon = this.data.weatherList[innerWeatherIndex].icon // 获取图标地址 // 4
              var tempList = {
                index: index,
                date: innerDate,
                text: innerText,
                weather: innerWeather,
                weatherUrl: innerWeatherIcon
              }
            }
            // 传递给store
            store.appenRememberList(tempList)
            // 清空文本域
            this.setData({
              upText: ''
            })
            // 传递成功，给予用户提示
            wx.showModal({
              title: '添加成功！',
              content: '可在下面列表查看',
              complete: (res) => {
                if (res.cancel) {

                }

                if (res.confirm) {

                }
              }
            })
            // 获取当前页面
            const pages = getCurrentPages()
            const perpage = pages[pages.length - 1]
            // 执行刷新
            perpage.onLoad()
          }
        }
      })


    },
  }
})