import {
  observable,
  action
} from 'mobx-miniprogram'

export const store = observable({
  /**
   * 过往
   */
  noteBookList: [{
      id: 1,
      title: '逛博物馆',
      address: '江西省博物馆',
      imgUrl: 'https://pica.zhimg.com/80/v2-fd33032b6b4a098450e56c80b0473f72_r.jpg',
      type: '1',
      text: '江西省博物馆是非常大的，走的脚真的很累，但是呢里面还是非常好看的，印象最深刻的还是第二层的公元前的老物件，真的很惊艳，牵着宝儿的手一起探索历史真的超开心'
    },
    {
      id: 2,
      title: '我们俩',
      address: '南昌市',
      imgs: {
        img1Url: 'https://pic1.zhimg.com/80/v2-50c831744205a2a03bd46a60ce650d66_r.jpg',
        img2Url: 'https://picx.zhimg.com/80/v2-38ab98183898e14e32a5d027df1a732d_r.jpg'
      },
      type: '2',
      text: '我们的爱情，一点一滴的凝结至如今的深情，我很喜欢你，你也稀罕我，我们终于是要成为世界上最相爱的人，平平淡淡，但心中温暖'
    },
    {
      id: 3,
      title: '洪濑鸡爪',
      address: '彭泽县老家',
      imgUrl: 'https://pic4.zhimg.com/80/v2-75ec97cb58e154892a37a46a76745c45_r.jpg',
      type: '1',
      text: '洪濑鸡爪真的超级好吃，特别是在和宝贝在看剧的时候，真的是爽呆了，就是太辣了，每次吃完我们都是两嘴红红'
    },
    {
      id: 4,
      title: '宝贝的生日',
      address: '彭泽县老家',
      imgUrl: 'https://pica.zhimg.com/80/v2-d940a1532dd95dd161fb1d97514a579c_r.jpg',
      type: '1',
      text: '宝贝2022年的生日啊，是在我家过的呢，超级幸福，能和宝贝一起在我家过生日，真的是难能可贵的机会'
    },
    {
      id: 5,
      title: '操场散步',
      address: '南昌理工操场',
      imgUrl: 'https://picx.zhimg.com/80/v2-9797e2c88d998f98beb1856c039d4d41_r.jpg',
      type: '1',
      text: '学校的操场是我们经常去的地方，散步聊天都是不错的地方，我最大印象就是在月亮下和你一起散步聊家常，慢慢的，亲切了'
    },
    {
      id: 6,
      title: '俩憨憨',
      address: '彭泽县老家',
      imgs: {
        img1Url: 'https://pica.zhimg.com/80/v2-d1c3b069076c6e0ea304d022a92f4ebe_r.jpg',
        img2Url: 'https://pic4.zhimg.com/80/v2-66d2a2661984bbeb2040cbbf1d462451_r.jpg'
      },
      type: '2',
      text: '这照片多好看啊，虽然憨憨的，但是我超稀罕，很有爱不是吗，两只小可爱在一起秀恩爱，多安逸舒服啊'
    },
    {
      id: 7,
      title: '梅花',
      address: '彭泽梅玲公园',
      imgUrl: 'https://pica.zhimg.com/80/v2-2472a10e423416e6da88db4abdf92de2_r.jpg',
      type: '1',
      text: '梅花真的好看，在寒冷的冬天，但是我最多的感觉是，那梅花的红色像是冬天里的你，那么温暖而热烈'
    },
    {
      id: 8,
      title: '拍立得照片',
      address: '你的宿舍',
      imgUrl: 'https://pic2.zhimg.com/80/v2-14ca93be7bf956c888148c563d839aff_r.jpg',
      type: '1',
      text: '拍立得是个好东西啊，拍的很有怀旧感，当然我也是比较喜欢记录生活，比如我现在就在给宝贝做小程序，让宝贝看看我们的过去'
    },
    {
      id: 9,
      title: '平兰的手工花',
      address: '我的宿舍',
      imgUrl: 'https://pic4.zhimg.com/80/v2-b825ea661fff931794f494ab29d77961_r.jpg',
      type: '1',
      text: '有一天晚上，你上楼然后给我这束你亲手做的花，我真的很惊喜而开心激动，我拿着花回去的路上感觉非常有面子，真的辛苦了宝贝啦，我很开心，爱你哦❤️'
    },
    {
      id: 10,
      title: '空中花园',
      address: '铜锣湾商城',
      imgUrl: 'https://pica.zhimg.com/80/v2-db5916123532f695cf24eb08ceb9aae6_r.jpg',
      type: '1',
      text: '这是一个下午，你说你要去买好多好多饮料，我们就去了这个地方，我真的没想到，尽然上面还有一个小花园，还能摸到鹿，这是你给我拍的照片'
    },
    {
      id: 11,
      title: '我送花给你',
      address: '你宿舍楼下',
      imgUrl: 'https://pic2.zhimg.com/80/v2-f729c4adae96f6905a0172d0ace349d5_r.jpg',
      type: '1',
      text: '这是一个晚上，我在操场给你买的一束花，那时我们刚刚在一起没多久，我记得我还发了朋友圈，为你恋爱脑呢'
    },
    {
      id: 12,
      title: '我和娃娃',
      address: '南昌马兰圩公园',
      imgUrl: 'https://pic1.zhimg.com/80/v2-9d6299cb7f83866064bbeb4fc9b877e6_r.jpg',
      type: '1',
      text: '那天很热，我们拿着这么多的娃娃，哈哈，一起去马兰圩公园看花了，拍照，马兰圩，我很喜欢和你一起在那里看日落的'
    },
  ],

  rememberList: [{
      index: 0,
      date: '2000-12-23',
      text: '这是一个很重要的日子,是她的生日，一般来说我们会一起去南昌的好玩的地方玩耍，真的很开心，一年一次的生日，要吃蛋糕哦，要开心...',
      weather: '晴天',
      weatherUrl: '/public/weather/qinTian.png'
    },
    {
      index: 1,
      date: '2002-04-28',
      text: '这是我的生日哦，也是平凡的一天，马上她就要陪我度过第二次生日了，很期待下一次呢，不知道下一次会发生什么...',
      weather: '多云',
      weatherUrl: '/public/weather/duoYun.png'
    },
    {
      index: 2,
      date: '2022-03-15',
      text: '这是我们在一起的日子呢，周年纪念日，以后也会有很多的周年纪念哦，会一直一直在一起，还有十天就到了，期待啦...',
      weather: '阴天',
      weatherUrl: '/public/weather/yinTian.png'
    }
  ], // 这个是暂时的，必须存到本地
  listLength: '3', // 备忘录默认数量
  setListLength: action(function () {
    this.listLength++ // +1
  }),
  secretList: [{
      text: "其实我偷偷喜欢你很久啦，宝贝"
    },
    {
      text: "你在我心里一直都是最乖的女生，我一点都不觉得你凶"
    },
    {
      text: "其实有时也有点憨憨滴，真的很可爱，嘻嘻"
    },
    {
      text: "偶尔做梦梦到我欺负你哈哈，你肯定不知道，我可不是那么坏的人"
    },
    {
      text: "你真滴非常的香，比七里香还香，非常稀罕的味道，甜的，丝绸一样的味道"
    },
    {
      text: "我的急性子真的因为你改变了很多，我很感谢你，❤️"
    }
  ],
  appenRememberList: action(function (tempList) {
    this.rememberList.push(tempList) // 将新的备忘录push 进去
    // 同时也要把新的备忘录数量提交到 store
    this.setListLength()
    /** 
     * 添加完数据后本地存储数据
     */
    wx.setStorageSync('rememberList', this.rememberList)
  }),
  // 覆盖老数据
  coverRememberList: action(function (localRememberLIst) {
    this.rememberList = localRememberLIst
  }),

  /**
   * 更改备忘录
   * */
  editRememberList: action(function (obj) {
    let changedIndex = obj.index
    this.rememberList[changedIndex] = obj // 完成修改
    // 本地也要删除-采用覆盖的方式
    wx.setStorageSync('rememberList', this.rememberList)
    // 更新页面
    const pages = getCurrentPages()
    const perPage = pages[pages.length - 1]
    perPage.onLoad()
  }),
  /**
   * 删除备忘录
   */
  deleteRemember: action(function (index) {
    let tempIndex = Number(index) // 转为数字
    // 开始删除
    this.rememberList = this.rememberList.filter((item, index, array) => {
      return index !== tempIndex // 保留不是要删除的这个
    });

    // 本地也要删除-采用覆盖的方式
    wx.setStorageSync('rememberList', this.rememberList)

    // 更新页面
    const pages = getCurrentPages()
    const perPage = pages[pages.length - 1]
    perPage.onLoad()
  }),
  // 接受现实指令
  ifShow: '',
  ifUp: '',
  acShow: action(function (val) {
    this.ifShow = val

  }),
  acUp: action(function (val) {
    this.ifUp = val
  }),
  // 编辑内容里的内容
  editRem: '',
  submitRem: action(function (val) {
    this.editRem = val
  }),

})