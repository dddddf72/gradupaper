// pages/http/http.js
const http = require("../../models/http.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    albums: "",
    /* 记录已经点击了的id */
    prevId: "",
    /* 存所有item播放的状态 */
    playStates: {
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http({
      keyword: "你",
      success: res => {
        let albums = res.data.result.albums
        this.setData({
          albums
        })
      }
    })
  },
  handleClick(event) {
    let id = event.currentTarget.dataset.id;
    let playStates = this.data.playStates;
    /* 当前项目id和点击之后的id值不同的情况 */
    if(id != this.data.prevId){
      playStates[id] = true;
      for(let key in playStates){
        if(key != id){
          playStates[key] = false;
        }
      }
      this.setData({
        playStates,
        prevId:id
      })
    }else{
      /*当前项目id和点击之后的id值相同的情况  */
      playStates[id] = !playStates[id];
      console.log(playStates)
      this.setData({
        playStates
      })
    }
  },
  handleToggle(event){
    let {id} = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/music-detail/music-detail?id=${id}`
    });
    /* location.href */
  }
})