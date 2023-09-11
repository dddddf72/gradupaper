// pages/home/home.js
const app = getApp();
Page({
  data: {
    city: ""
  },
  onLoad: function () {
    app.callback = () => {
      var city = wx.getStorageSync('locationCity')
      // console.log(city)
      this.setData({
        city
      })
    }

  },

  onShow() {
    var city = app.globalData.currentCity;
    this.setData({
      city
    })
  }
  ,
  handleClick() {
    wx.navigateTo({
      url: '/pages/city/city'
    })
  }

})
// A页面跳转到B页面（生命周期）
// A页面初次加载的时候会触发onLoad,onShow,onReady生命周期
//A页面跳转到B页面，触发同上，且A触发onHide生命周期函数最先触发
//B页面回传A页面的时候，B页面onUnload触发，A页面onShow触发