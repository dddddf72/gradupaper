// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1
  },
  doAdd(){
    var num = this.data.num;
    num=num+1;
    this.setData({
      num
    })
  }
})