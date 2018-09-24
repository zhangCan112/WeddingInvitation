// client/pages/hotelNavigation/hotelNavigation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // controls: [{
    //   id: 1,
    //   iconPath: '/imageAsset/icon_location01.png ',
    //   position: {
    //     left: 0,
    //     top: 0,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }, {
    //     id: 2,
    //     iconPath: '/imageAsset/icon_location01.png ',
    //     position: {
    //       left: 0,
    //       top: 70,
    //       width: 50,
    //       height: 50
    //     },
    //     clickable: true
    //   }, {
    //     id: 3,
    //     iconPath: '/imageAsset/icon_location01.png ',
    //     position: {
    //       left: 0,
    //       top: 140,
    //       width: 50,
    //       height: 50
    //     },
    //     clickable: true
    //   }],
    markers: [],
    weddingMarker: {
      id: 'wedding',
      longitude: 107.229100,
      latitude: 34.352390,
      title: '宝鸡市君越酒店',
      width: 39,
      height: 47,
      iconPath: '/imageAsset/icon_location01.png',
      callout: {
        content: '10月1日欢迎您来参加我们的婚礼',
        fontSize: 14,
        color: '#FFFFFF',
        bgColor: '#5BCCED',
        borderRadius: 5,
        padding: 5,
        display: 'ALWAYS',
        textAlign: 'left'
      },
      label: {
        content: '宝鸡市君越酒店',
        fontSize: 14,
        color: '#black',
        textAlign: 'center',
        anchorX: -30
      }
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {    
    let markers = [this.data.weddingMarker]
    this.setData({
      markers
    })
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

  },
  /**
  * 用户气泡
  */
  markertap: function (e) {
    console.log(e)
    let selectedMarker = this.data.weddingMarker
    if(e.markerId == this.data.weddingMarker.id){
      selectedMarker = this.data.weddingMarker
    } else {

    }
    wx.openLocation({
      latitude: selectedMarker.latitude,
      longitude: selectedMarker.longitude,
      name: selectedMarker.title,
      address: selectedMarker.title,
      fail: ((error) => {
        wx.showModal({
          title: '失败',
          content: error.messgae,
        })
      })
    })
  },
  
})