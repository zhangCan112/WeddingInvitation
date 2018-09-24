/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
// var host = 'https://fnkrizqg.qcloud.la';
//生产环境
var host = 'https://270964526.lovebean.xyz'

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,

    // 登录地址，用于建立会话
    loginUrl: `${host}/weapp/login`,

    // 测试的请求地址，用于测试会话
    requestUrl: `${host}/weapp/user`,
    // 上传图片接口
    uploadUrl: `${host}/weapp/upload`,
    //祝福信息接口（post）
    blessUrl: `${host}/weapp/bless`,
    //获取所有弹幕祝福信息
    blessesUrl: `${host}/weapp/blesses`,
    // 参加婚礼的宾客信息接口（post）
    guestUrl: `${host}/weapp/guest`,
    //相册（get）
    photosUrl: `${host}/weapp/photos`,
    
  }
};

module.exports = config;