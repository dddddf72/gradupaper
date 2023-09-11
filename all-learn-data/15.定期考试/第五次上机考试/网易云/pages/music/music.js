// pages/music/music.js
const { newMusic, hotMusic, dj } = require("../../models/home")
const { titles, icons } = require("../../static/data")
Page({
  data: {
    result: []
  },
  onLoad: async function () {
    var result = {}
    var https = [newMusic, hotMusic, dj]
    for (let item of https) {
      var res = await item();
      result[item.name] = {
        res: res.data.playlists.slice(0, 3),
        title: titles[item.name],
        iconUrl: icons[item.name]
      }
      this.setData({ result })
    }
  }
})