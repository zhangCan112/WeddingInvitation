// pages/welcome/welcome.js
var qcloud = require('../../vendor/wafer2-client-sdk/index');
// 引入配置
var config = require('../../config');
var until = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531317476369&di=836bbbd7f8ed2701d38e3efa8e8bc243&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01edaf5783aa0d0000018c1bb33912.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531317476369&di=1c6b197fce27ab81b1e3c4687a9af6d6&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01957356c48ca66ac7256cb0051188.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531317476368&di=2d0e1209e734ab275e9f8b3c803b02a7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018ce756026f216ac7251df8f3c713.jpg'
    ],
    blesses: ['留下祝福会在弹幕看到哦-By:Tin哥']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    qcloud.request({
      // 要请求的地址
      url: config.service.blessesUrl,
      method: 'GET',
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      success(result) {        
        console.log('request success', result);
        let blesses = result.data.data.map((info)=>{
          return `${info.name}：${info.bless}`
        })
        that.setData({
          blesses
        })
      },

      fail(error) {        
        console.log('request fail', error);
      },
      complete() {
        console.log('request complete');
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})