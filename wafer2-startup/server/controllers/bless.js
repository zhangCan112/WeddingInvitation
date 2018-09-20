const dbservice = require('../tools/weddingDbService')

// 保存祝福信息接口
const post = async (ctx, next) => {
    if (ctx.state.$wxInfo.loginState) {
        let userInfo = ctx.state.$wxInfo.userinfo
        let bless = ctx.request.body['bless']
       await dbservice.addBlessInfo(userInfo.openId, userInfo.nickName, bless)
    }
}

const all = async (ctx, next) => {
  let blesses = await dbservice.querryAllBlessInfo()
  ctx.state.data = blesses
}


module.exports = {
  post,
  all,
}
