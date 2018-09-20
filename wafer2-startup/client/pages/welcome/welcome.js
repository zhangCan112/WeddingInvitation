// client/pages/test/test.js
// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');

// 引入配置
var config = require('../../config');

//
var until = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: false,
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
  /**
 * 点击「登录」按钮，测试登录功能
 */
  getUserInfo: function (e) {

    let appinstance = getApp();
    if (e && e.detail && !e.detail.rawData) {            
      return;
    }

    if (this.data.isLoading == true) {
      return
    }

    this.setData({
      isLoading: true,
    })

    const session = qcloud.Session.get()

    if (session) {
      // 第二次登录
      // 或者本地已经有登录态
      // 可使用本函数更新登录态
      qcloud.loginWithCode({
        success: res => {
          this.setData({ userInfo: res, logged: true, isLoading: false, })          
          wx.reLaunch({
            url: '/pages/photo/photo',
          })
        },
        fail: err => {
          console.error(err)
          this.setData({
            isLoading: false,
          })
          until.showModel('登录错误', err.message)
        }
      })
    } else {
      // 首次登录
      qcloud.login({
        success: res => {
          this.setData({ userInfo: res, logged: true, isLoading: false, })   
          wx.reLaunch({
            url: '/pages/photo/photo',
          })       
        },
        fail: err => {
          console.error(err)
          this.setData({
            isLoading: false,
          })
          until.showModel('登录错误', err.message)
        }
      })
    }
  },
})