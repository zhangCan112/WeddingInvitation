// client/pages/bless/bless.js
// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');
// 引入配置
var config = require('../../config');
var until = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canOnScence: false,
    isLoading: false,
  },
  /**
   * 选择是否参加婚礼
   */
  switchMethod: function() {
    let canOnScence = !this.data.canOnScence
    this.setData({
      canOnScence
    })
  },
  /**
   * 提交信息
   */
  submit: function(e) {
    let params = e.detail.value
    let bless = params['bless']
    let name = params['name']
    let phone = params['phone']
    let guest_num = params['guest_num']
    if (!bless || bless.length == 0) {
      until.showToast('留下点祝福的话语吧！')
      return
    }
    if (this.data.canOnScence == true) { //到婚礼现场             
      if (!name || name.length == 0) {
        until.showToast('您忘记写姓名了！')
        return
      }
      if (!phone ||phone.length == 0) {
        until.showToast('您忘记留电话了！')
        return
      }
      if (!guest_num || !(parseInt(guest_num) > 0)) {
        until.showToast('告诉主人贵客有几位啊')
        return
      }
      this.postGuest(params)
      return
    }
    this.postBless(params)
  },
  /**
   * 提交宾客信息
   */
  postGuest: function(data) {

    if (this.data.isLoading == true) {
      return
    }

    this.setData({
      isLoading: true,
    })

    let that = this
    qcloud.request({
      // 要请求的地址
      url: config.service.guestUrl,
      method: 'POST',
      data: data,
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      success(result) {
        until.showSuccess('请求成功完成');
        console.log('request success', result);
      },

      fail(error) {
        until.showModel('请求失败', error);
        console.log('request fail', error);
      },
      complete() {
        console.log('request complete');
        that.setData({
          isLoading: false,
        })
      }
    });
  },
  /**
   * 提交祝福信息
   */
  postBless: function(data) {

    if (this.data.isLoading == true) {
      return
    }

    this.setData({
      isLoading: true,
    })

    let that = this
    qcloud.request({
      // 要请求的地址
      url: config.service.blessUrl,
      method: 'POST',
      data: data,
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      success(result) {
        until.showSuccess('请求成功完成');
        console.log('request success', result);
      },

      fail(error) {
        until.showModel('请求失败', error);
        console.log('request fail', error);
      },
      complete() {
        console.log('request complete');
        that.setData({
          isLoading: false,
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})