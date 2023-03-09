// components/cover/cover.js
Component({
  properties: {
    innerUrl: '',
    innerText: {
      type: String,
      value: 'innerText'
    },
    tempInfo: {
      type: String,
      value: "奶茶",
    },
    ifShow: {
      type: String,
      value: ''
    },
    ifUp: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    closeMask: function(){ // 关闭弹窗，移除类名
      this.setData({
        ifShow: '',
        ifUp: ''
      })
    }
  }
})



