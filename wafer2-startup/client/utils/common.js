

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


//解析url中的参数，返回为map
var getQuerryMapByUrl = (urlString) => {
  let urlComponents = urlString.split('?')
  return getQuerryMapByQuerryString(urlComponents.length > 1 ? urlComponents[1] : '')
}

//解析url查询参数串为查询参数map
var getQuerryMapByQuerryString = (query) => {
  var result = {};
  var queryArr = query.split("&");
  queryArr.forEach(function (item) {
    var key = item.split("=")[0];
    var value = item.split("=")[1];
    result[key] = value;
  });
  return result;
}


// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 100000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
})

// 显示普通提示
var showToast = text => wx.showToast({
  title: text,
  icon: 'none'
})

// 显示失败提示
var showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  })
}

//获取两个坐标点间的具体
//计算两点位置距离
var getDistance = (loc1, loc2) => {
  let lat1 = loc1.latitude || 0;
  let lng1 = loc1.longitude || 0;
  let lat2 = loc2.latitude || 0;
  let lng2 = loc2.longitude || 0;

  var rad1 = lat1 * Math.PI / 180.0;
  var rad2 = lat2 * Math.PI / 180.0;
  var a = rad1 - rad2;
  var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;

  var r = 6378137;
  var distance = r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)));

  return distance;
}

var getDistanceDesp = (loc1, loc2) => {

  let distance = getDistance(loc1, loc2)
  if (distance > 1000) {
    return `${Math.round(distance / 100) / 10}km`;
  }
  return `${Math.round(distance)}m`;
}

var commonShareAppMessage = () => {
  let scene = ''
  let globalData = getApp().globalData
  let userInfo = globalData.userinfo
  let g, t, e
  if (userInfo) {
    g = userInfo.recommendCode
    t = userInfo.parentAccountId
    e = userInfo.belongClerk
  } 
  if (t) {
    //转发的t&e 为了和二维码参数统一，统一做进制转换操作
    scene = `?t=${parseInt(t).toString(36)}`
    if (e) {
      scene = scene + '&e=' + parseInt(e).toString(36)
      if (g) {
        scene = scene + '&g=' + g
      }
    }
  }
  let param = ''
  if (scene.length > 0) {
    param = `?scene=${encodeURIComponent(scene)}`
  }
  //包含转发信息g:推广来源 t：所属门店 e：所属店员
  //?scene=${encodeURIComponent()}
  return {
    title: '会员易-优惠多多聚划算',
    path: `/pages/welcome/welcome${param}`,
    imageUrl: '/imageAsset/shareAppMessage.png'
  }
}

const filterEmoji = (inputStr) => {
  if (inputStr == null || inputStr == undefined || inputStr.length < 1) {
    return inputStr;
  }
  var regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
  return inputStr.replace(regStr, '*');
}


module.exports = {
  formatTime,
  formatDate,
  showBusy,
  showSuccess,
  showModel,
  showToast,
  getDistance,
  getDistanceDesp,
  getQuerryMapByQuerryString,
  getQuerryMapByUrl,
  commonShareAppMessage,
  filterEmoji,  
}