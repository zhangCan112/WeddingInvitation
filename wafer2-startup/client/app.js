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
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
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