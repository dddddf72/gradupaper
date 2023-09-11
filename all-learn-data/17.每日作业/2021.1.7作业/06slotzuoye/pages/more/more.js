// pages/more/more.js
const https = require("../../models/home")
Page({
  data: {
    musics: []
  },
  onLoad: function (options) {

    var { keyword, title } = options;
    wx.setNavigationBarTitle({
      title,
    });
    var http = https[keyword];
    http().then(res => {
      // console.log(res.data.playlists)
      var musics = res.data.playlists
      this.setData({
        musics
      })

    })

  },

})