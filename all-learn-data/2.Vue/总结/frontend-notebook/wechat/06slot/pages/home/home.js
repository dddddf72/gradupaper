// pages/home/home.js
const {getHomeHttp} = require("../../models/http")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlists:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
      var res = await getHomeHttp();
      var playlists= []
      res.data.programs.forEach(item=>{
         let {name,coverUrl,id} = item;
         playlists.push({
           name,
           id,
           coverImgUrl:coverUrl
         })
      })
      this.setData({
        playlists
      })
  } 
})