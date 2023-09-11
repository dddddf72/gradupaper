const MovieHttp = require('../../models/MovieHttp')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.getMovieHttp()
  },
  async getMovieHttp() {
    var movie = {}
    var https = [{ 'top250': 'top250' }, { 'comingSoon': '即将上映' }, { 'inTheaters': '正在热映' }]
    for (var item of https) {
      var key = Object.keys(item)
      var result = await MovieHttp.getMovie(key);
      movie[key] = {
        res: result.data.res.slice(0, 3),
        title: item[key]
      }
    }
    this.setData({
      movie
    })
  },
  handleMore(event) {
    var { mkey, title } = event.currentTarget.dataset

    wx.navigateTo({
      url: `/pages/movieMore/index?m=${mkey}&title=${title}`
    })
  }

})