var timer = null;
Page({
  data: {
    num: 3
  },
  onLoad() {
    this.countreduce()
  },
  countreduce() {
    var num = this.data.num;
    timer = setTimeout(() => {
      num--;
      if (num >= 0) {
        if (num == 0) {
          wx.switchTab({
            url: '/pages/article/article'
          })

        }
        this.setData({
          num
        })
        this.countreduce()
      }
    }, 1000);
  },
  handleClick() {
    clearTimeout(timer)
    wx.switchTab({
      url: '/pages/article/article'
    })
  }
})