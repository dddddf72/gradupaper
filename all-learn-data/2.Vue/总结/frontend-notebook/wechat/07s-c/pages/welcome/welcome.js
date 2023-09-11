// 定义timer变量获取定时器
var timer = null;
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 3
  },
  onLoad() {
    this.reduceCount();
  },
  reduceCount() {
    var num = this.data.num;
    timer = setTimeout(() => {
      num--;
      if (num >= 0) {
        if (num == 0) {
          app.globalData.state = true;
          wx.switchTab({
            url: '/pages/index/index'
          })
        }
        this.setData({
          num
        })
        this.reduceCount();
      }
    }, 1000)
  },
  handleJump() {
    clearTimeout(timer)
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})