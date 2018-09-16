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
      value: 2000
    },
    duration: {
      type: Number,
      value: 500
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
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})