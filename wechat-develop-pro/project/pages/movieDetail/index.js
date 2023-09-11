const MovieHttp = require('../../models/MovieHttp')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: [],
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var { id, m } = options;
    var str = await MovieHttp.addHistory({ id, m })
    var result = await MovieHttp.getDetail(id)
    result.data.res.forEach(item => {
      wx.setNavigationBarTitle({
        title: item.title
      })
    })
    this.setData({
      result: result.data.res,
      title: m
    })
  },
  async handleChange(event) {
    var m = event.currentTarget.dataset.title;
    console.log(m)
    var result = this.data.result
    var res = result[0]
    var { collected, _id } = res
    if (collected) {
      res.collected = false;
      await MovieHttp.setCollect({ id: _id, m, collected: false })
    } else {
      res.collected = true;
      await MovieHttp.setCollect({ id: _id, m, collected: true })
    }
    this.setData({ result })
  }
})