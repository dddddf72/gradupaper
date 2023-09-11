// pages/playlist/playlist.js
const { getplaylist } = require("../../models/playlistdetail")
Page({
  data: {
    result: "",
    playstate: {},
    previd: ""
  },
  onLoad: function (options) {
    var { id } = options
    console.log(id)
    getplaylist(id).then(res => {
      console.log(res)
      var result = res.data.playlist
      console.log(result.coverImgUrl)
      result.description = result.description.replace("\n", "")
      this.setData({
        result
      })
    })
  },
  clickplay(event) {

  },
  jumpplay(event) {
    var { id, url } = event.currentTarget.dataset;
    wx.setStorageSync('avatorurl', url)
    wx.navigateTo({
      url: `/pages/play/play?id=${id}`
    });
  }
})