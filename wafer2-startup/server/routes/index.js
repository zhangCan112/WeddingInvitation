/**
 * ajax 服务路由集合
 */


const router = require('koa-router')({
    prefix: '/weapp'   // 定义所有路由的前缀都已 /weapp 开头
})
const controllers = require('../controllers')

const paramCheckMaker = require('../vendor/paramChecker')
const query = paramCheckMaker.query
const post = paramCheckMaker.post

// 从 sdk 中取出中间件
// 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

// --- 登录与授权 Demo --- //
// 登录接口 /weapp/login
router.get('/login', authorizationMiddleware, controllers.login)
// 用户信息接口（可以用来验证登录态） /weapp/user
router.get('/user', validationMiddleware, controllers.user)

// --- 图片上传 Demo --- //
// 图片上传接口，小程序端可以直接将 url 填入 wx.uploadFile 中 /weapp/upload
router.post('/upload', controllers.upload)

// --- 留下祝福信息 --- //
//bless 必填， name, phone, guest_num选填
router.post('/bless', validationMiddleware, post('bless'), controllers.bless.post)

// --- 获取所有弹幕祝福信息 --- //
router.get('/blesses', controllers.bless.all)

// --- 留下参加婚礼的宾客信息 --- //
//name, phone, guest_num必填
router.post('/guest', validationMiddleware, post('bless', 'name', 'phone', 'guest_num'),controllers.bless.post, controllers.guest.post)


module.exports = router
