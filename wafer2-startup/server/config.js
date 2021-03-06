const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx5d389cfb027024bd',

    // 微信小程序 App Secret
    appSecret: '460c6480bd8a04a8cae359e3dac4f745',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'Zcdxl@1988',
      // pass: 'wx5d389cfb027024bd',
      // pass: 'NyKdW6hD',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 区域
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'wximg',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh',
    // 本地其他配置 ...
    serverHost: '',
    tunnelServerUrl: '',
    tunnelSignatureKey: '',
    // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
    qcloudAppId: '1257081248',
    qcloudSecretId: 'AKIDwmQM9kbOSK0WqzeudAWgePdmjV6VtoiQ',
    qcloudSecretKey: 'et0wgZLvJXfgepvuiKky4tcGmiZEh0Uo',
}

module.exports = process.env.NODE_ENV === 'local' ? Object.assign({}, CONF, require('./config.local')) : CONF;
