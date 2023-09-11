const UserHttp = require('../../models/UserHttp')
Page({
  data: {
    isAuth: false,
    logo: "",
    username: "",
    movies: ''
  },
  onLoad: async function () {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              console.log(res.userInfo)
              var userInfo = res.userInfo;
              var { avatarUrl, nickName } = userInfo;
              this.setData({
                isAuth: true,
                logo: avatarUrl,
                username: nickName
              })
            }
          })

        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    var userInfo = e.detail.userInfo;
    // 只有点击确定授权之后才会获取用户信息
    if (userInfo) {
      console.log(userInfo)
      var { avatarUrl, nickName } = userInfo;
      this.setData({
        isAuth: true,
        logo: avatarUrl,
        username: nickName
      })
    }
  },
  async onChange(event) {
    let name = event.detail.name
    if (name == "getCollect") {
      var res = await UserHttp.getCollectMovie()
    } else {
      var res = await UserHttp.getHistoryMovie();
    }
    this.setData({ movies: res })
  },
  async getDefaultHttp() {
    let res = await UserHttp.getCollectMovie()
    this.setData({ movies: res })
  },
  onShow() {
    this.getDefaultHttp();
  }
})