// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: ""
  },
  handleClick() {
    wx.navigateTo({
      url: '/pages/city/city'
    });
  },
  onLoad() {
    setTimeout(() => {
      var city = app.globalData.currentCity;
      this.setData({
        city
      })
    }, 500)


  },
  onShow() {
    var city = app.globalData.currentCity;
    this.setData({
      city
    })
  }
})