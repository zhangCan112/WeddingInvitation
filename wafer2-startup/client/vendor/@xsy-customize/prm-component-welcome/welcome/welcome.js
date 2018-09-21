// vendor/@xsy-customize/prm-component-welcome/welcome/welcome.js

const random = require('./random.js')

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
      value: 4000
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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemChange: function(){
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease-in',   
        transformOrigin: random.transformOrigin(),            
      })
      
      this.animation = animation 
      animation = random.scale(animation)     
      animation = random.translate(animation)     
      animation = random.skew(animation)           
      animation.step()
      animation.rotate(0, 0)
        .scale(1)
        .translate(0, 0)
        .skew(0, 0)
        .step({ duration: 1000 })
      this.setData({
        animationData: animation.export()
      })           
    }
  }
})
