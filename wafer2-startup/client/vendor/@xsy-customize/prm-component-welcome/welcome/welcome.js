// vendor/@xsy-customize/prm-component-welcome/welcome/welcome.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    indicatorDots:{
      type: Boolean,
      value: true
    },
    autoplay:{
      type: Boolean,
      value: false
    },
    interval:{
      type: Number,
      value: 3000
    },
    duration: {
      type: Number,
      value: 1000
    },
    imageUrls:{
      type: Array,
      value: []
    }
  },
  
  externalClasses: ['swiper-class'],
  /**
   * 组件的初始数据
   */
  data: {
    animationData:{}
  },

  ready: function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2, 2).rotate(45).step()
    this.setData({
      animationData: animation.export()
    })

    setInterval(function () {
      animation.translate(30).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
