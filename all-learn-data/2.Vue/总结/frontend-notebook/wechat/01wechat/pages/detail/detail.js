// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musics:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url = `http://192.168.4.18:3000/search?keywords=你&type=10`
    wx.request({
      url,
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      /* 回调函数写成function涉及到this指向的问题 */
      success: res => {
        console.log(this)
        console.log(res.data.result.albums)
        this.setData({
          musics:res.data.result.albums
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  }
})