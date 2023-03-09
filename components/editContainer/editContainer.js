import {
  store
} from '../../store/index'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ifShow: '',
    ifUp: '',
    editRem: '',
  },

  /**
   * 组件的初始数据
   */
  data: {
    weatherList: [{ // 只是选择器用
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
    }],
    weather: '',
    weathreUrl: '',
    date: '待选择',
    text: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    input: function (e) { // 内容输入事件
      console.log('shuru');
      this.setData({
        text: e.detail.value
      })
      console.log(this.data.text);

    },
    closeCover: function () { // 关闭
      this.setData({
          ifShow: '',
          ifUp: ''
        }),
        // 清除store
        store.acShow('')
      store.acUp('')
    },
    weatherChange: function (e) { // 天气
      console.log(e.detail.value);
      this.setData({
        weather: this.data.weatherList[e.detail.value].text,
        weatherUrl: this.data.weatherList[e.detail.value].icon
      })
      console.log(this.data.weather);
    },
    dateChange: function (e) { // 日期
      this.setData({
        date: e.detail.value
      })
    },
    /**
     * 提交
     */
    confirm: function (e) {
      console.log(this.properties.editRem);
      /** 
       *  获取这个被改的备忘录index 
       * */
      let index = this.properties.editRem.index
      console.log(index);

      /**
       * 获取日期
       */
      let date = '' // 获取日期
      if (this.data.date === '待选择') { // 如果没有选择，那就和以前一样
        date = this.properties.editRem.date
      } else {
        date = this.data.date
      }
      /**
       *  获取天气和索引
       */
      let weather = '' // 获取天气和索引
      let weatherUrl = ''
      if (this.data.weather === '') {
        weather = this.properties.editRem.weather // name
        weatherUrl = this.properties.editRem.weatherUrl
        console.log(weather);
      } else {
        weather = this.data.weather
        weatherUrl = this.data.weatherUrl
      }
      console.log(weatherUrl + weather);

      /**
       * 获取内容
       */
      let text = ''

      if (this.data.text == '') {
        text = this.properties.editRem.text
        console.log('kid');
      } else {
        text = this.data.text
      }
      // text = this.data.text
      console.log(text);
      /**
       * 制作临时对象 length === 5 
       */
      let tempObj = {
        index: index,
        date: date,
        text: text,
        weather: weather,
        weatherUrl: weatherUrl
      }
      console.log(tempObj);
      /**
       * 把新的对象传递给store
       */
      store.editRememberList(tempObj)
      // 刷新页面
      const pages = getCurrentPages()
      const perPage = pages[pages.length - 1]
      perPage.onLoad()
      // 提示
      wx.showModal({
        title: '确认要提交这次修改吗？',
        content: '修改后可在下面列表查看哦',
        complete: (res) => {
          if (res.cancel) {
          }
          if (res.confirm) {
            this.closeCover()
          }
        }
      })
    }

  }
})