/**
 * @fileOverview 微信小程序的入口文件
 */

var qcloud = require('./vendor/wafer2-client-sdk/index');
var config = require('./config');

let page = Page
Page = function(options) {  
  options.onShareAppMessage = function(){
    return {
      title: '欢迎您参加张灿和豆小丽的婚礼',
      path: `/pages/welcome/welcome`,
      imageUrl: 'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/WechatIMG708.jpeg'
    }
  }
  page(options)
}


const innerAudioContext = wx.createInnerAudioContext()
App({  
  /**
   * 小程序初始化时执行，我们初始化客户端的登录地址，以支持所有的会话操作
   */
  onLaunch() {
    //设置登录url
    qcloud.setLoginUrl(config.service.loginUrl);   

    //添加音乐
    innerAudioContext.autoplay = true
    innerAudioContext.loop = true
    innerAudioContext.src = 'http://www.ytmp3.cn/down/35252.mp3'
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  onShow() {
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
  },
  onHide() {
    innerAudioContext.pause()
  }
});