const MovieHttp = require('../../models/MovieHttp')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var { m, title } = options;
    wx.setNavigationBarTitle({
      title
    });
    var result = await MovieHttp.getMovie(m)
    var title = result.data.request.slice(4, result.data.request.length)

    console.log()
    this.setData({
      movies: result,
      title
    })
  },
})