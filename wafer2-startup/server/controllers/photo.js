

const all = async (ctx, next) => {
  if (ctx.state.$wxInfo.loginState) {
    ctx.state.data = [
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/33.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/34.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/35.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/36.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/37.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/38.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/1.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/2.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/3.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/4.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/5.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/6.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/7.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/8.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/9.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/10.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/11.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/12.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/13.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/14.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/15.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/16.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/17.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/18.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/19.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/20.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/21.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/22.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/23.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/24.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/25.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/26.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/27.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/28.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/29.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/30.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/31.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/32.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/39.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/40.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/41.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/42.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/43.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/44.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/45.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/46.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/47.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/48.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/49.png',
      'https://weddinginvitation-1257005404.cos.ap-beijing.myqcloud.com/50.png',
    ]
  }
}

module.exports = {
  all,
}
