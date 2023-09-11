// pages/test/test.js
Page({

  data: {
    num: 1
  },
  doadd() {
    var num = this.data.num
    num = num + 1;
    this.setData({
      num
    })
  }

})