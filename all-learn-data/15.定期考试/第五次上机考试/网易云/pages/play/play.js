// pages/play/play.js
const { getplay } = require("../../models/playlistdetail")
Page({
  data: {
    result: {},
    playstate: {}
  },
  onLoad: function (options) {
    var { id } = options
    getplay(id).then(res => {
      console.log(res)
      var result = res.data.data
      result[0]["avatorUrl"] = wx.getStorageSync('avatorurl')
      console.log(result)
      this.setData({
        result
      })
    })
  }
})