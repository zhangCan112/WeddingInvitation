

const all = async (ctx, next) => {
  if (ctx.state.$wxInfo.loginState) {
    ctx.state.data = [
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/WechatIMG708.jpeg',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/WechatIMG721.jpeg',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/WechatIMG437.jpeg',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/WechatIMG439.jpeg',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/WechatIMG471.jpeg',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/WechatIMG475.jpeg',
    ]
  }
}

module.exports = {
  all,
}
