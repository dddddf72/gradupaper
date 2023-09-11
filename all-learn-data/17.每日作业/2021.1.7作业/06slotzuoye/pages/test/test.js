// pages/test/test.js
var timer = null;
Page({

  data: {
    num: 3
  },
  onLoad: function (options) {
    this.countReduce();
  },
  countReduce() {
    // console.log(timer)
    var num = this.data.num;
    timer = setTimeout(() => {
      num--;
      if (num >= 0) {
        if (num == 0) {
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
        this.setData({
          num
        })

        this.countReduce();
      }
    }, 1000)
  },
  handleJump() {
    clearTimeout(timer)
    wx.switchTab({ url: '/pages/index/index' })
  }

})