

// 保存宾客信息接口
const post = async (ctx, next) => {
    if (ctx.state.$wxInfo.loginState) {
        let userInfo = ctx.state.$wxInfo.userinfo
        //name, phone, guest_num
        let name = ctx.request.body['name']
        let phone = ctx.request.body['phone']
        let guest_num = ctx.request.body['guest_num']
       await dbservice.saveGuestInfo(userInfo.openId, name, phone, guest_num)
    }
}

module.exports = {
  post,
}
