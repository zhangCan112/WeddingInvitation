// component/barrage/barrage.js
var doommList = [];
var i = 0; //用做唯一的wx:key
class Doomm {
  constructor(text, top, time, color) {
    this.text = text;
    this.top = top;
    this.time = time;
    this.color = color;
    this.display = true;
    let that = this;
    this.id = i++;
    setTimeout(function() {
      doommList.splice(doommList.indexOf(that), 1); //动画完成，从列表中移除这项
      page.setData({
        doommData: doommList
      })
    }, this.time * 1000) //定时器动画完成后执行。
  }
}

function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

var page = undefined;

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    barrageContents: {
      type: String,
      value: ['百年好合', '新婚快乐']
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    doommData: [],
    num: 0,    
  },

  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用
   */
  created: function() {
    page = this;
  },
  /**
   * 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
   */
  ready: function() {
    let that = this
    setInterval(function() {
      that.pushBarrage(that.data.barrageContents[that.data.num % that.data.barrageContents.length])
      let num = that.data.num + 1
      that.setData({ num })
    }, 200)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pushBarrage: function(text) {
      doommList.push(new Doomm(text, Math.ceil(Math.random() * 100), 2 + Math.ceil(Math.random() * 10), getRandomColor()));
      this.setData({
        doommData: doommList
      })
    },
  }
})