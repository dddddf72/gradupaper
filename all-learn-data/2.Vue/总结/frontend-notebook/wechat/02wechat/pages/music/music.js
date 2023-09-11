// pages/music/music.js
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
  onLoad: function (options) {
      var url = "http://192.168.4.18:3000/top/playlist?cat=华语&limit=15";
      wx.request({
        url,
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          this.handleHttpData(result)
        }
      });
  },
  handleHttpData(res){
    /* 本质  就是将data中的数组和http请求过来的数组合并成一个数组 */
    let playlists = [...this.data.playlists,...res.data.playlists]
    this.setData({
      playlists
    })
  },
  /* 页面到达底部的时候会触发· */
  onReachBottom(){
    let offset = this.data.playlists.length;
    console.log(offset)
    let url = `http://192.168.4.18:3000/top/playlist?cat=华语&limit=15&offset=${offset}`;
    wx.request({
      url,
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
         this.handleHttpData(res)
      }
    });
    
  }
})