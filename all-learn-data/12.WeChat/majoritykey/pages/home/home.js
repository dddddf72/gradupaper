// pages/home/home.js
const { getHomeHttp } = require("../../models/http")
Page({

  data: {
    playlists: []
  },
  onLoad: async function () {
    var res = await getHomeHttp();
    console.log(res)
    var playlists = []
    res.data.programs.forEach(item => {
      let { name, coverUrl, id } = item
      playlists.push({
        name,
        id,
        coverImgUrl: coverUrl
      })
    })
    this.setData({
      playlists
    })

  }

})