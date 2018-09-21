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
    images: [],
    blesses: ['留下祝福会在弹幕看到哦-By:Tin哥']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    qcloud.request({
      // 要请求的地址
      url: config.service.photosUrl,
      method: 'GET',
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      success(result) {
        console.log('request success', result);        
        that.setData({
          images: result.data.data
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