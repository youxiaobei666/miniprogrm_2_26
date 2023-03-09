import {store} from '../../store/index'

Component({
  properties: {
    remList:''
  },
  /**
   * 组件的初始数据
   */
  data: {
    // remList: [1,2,3] // 父组件传递
  },

  /**
   * 组件的方法列表
   */
  methods: {
    reDdit: function(e){
      const remIdStr = e.currentTarget.id // 获取索引
      const remId = Number(remIdStr) // 转数字
      const thisRem = store.rememberList[remId] // 获取要编辑的备忘录
      // 把要编辑的备忘录 储存在 store
      store.submitRem(thisRem)
      // 显示cover
      store.acShow('show')
      store.acUp('up')
      // 刷新页面，父元素才会重新传值,遮罩层才打开
      const pages = getCurrentPages()
      const perpage = pages[pages.length - 1];
      perpage.onLoad()
    },
    /**
     * 删除
     */
    delete: function(e){
      console.log(e);
      // 获取索引
      let index = e.currentTarget.id
      /**
       * 删除和提示
       */
      wx.showModal({
        title: '确定要删除吗？',
        content: '可能无法恢复哦，考虑考虑',
        complete: (res) => {
          if (res.confirm) {
            store.deleteRemember(index)
          }
        }
      })
     

    }
  }
})



