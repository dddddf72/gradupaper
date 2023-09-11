const {
  getHttpCat
} = require("../../models/http")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHttpData();
  },
  onReachBottom: function () {
    this.getHttpData()
  },
  getHttpData() {
    getHttpCat({
      offset: this.data.playlists.length,
      success: res => {
        let playlists = [...this.data.playlists, ...res.data.playlists]
        this.setData({
          playlists
        })
      }
    })
  }
})