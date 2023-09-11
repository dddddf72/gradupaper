// pages/more/more.js
const https = require("../../models/home");
const { transfromStar } = require("../../utils/index");
Page({
  data: {
      movie:[]
  },
  onLoad: function (options) {
    var {keyword,title} = options;
    wx.setNavigationBarTitle({
      title
    });
    var http = https[keyword];
    http().then(res=>{
      res.data.result.forEach(item=>{
        item["rate"] = transfromStar(item.raiting);
      })
      this.setData({
        movie:res.data.result
      })
      // console.log(this.data.movie)
    })
  }
})