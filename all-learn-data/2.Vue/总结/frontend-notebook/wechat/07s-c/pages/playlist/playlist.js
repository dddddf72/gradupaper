const {getPlaylistDetail} = require("../../models/playlistDetail");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlists:[],
    states:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var {id} = options;
      getPlaylistDetail(id).then(res=>{
        var tracks = res.data.playlist.tracks;
        this.setData({
          playlists:tracks
        })
      })
  },
  handleClick(event){
    /* 在地址栏中=,&都是特殊符号传值的时候会出问题 */
    var {id,url} = event.currentTarget.dataset;
    wx.setStorageSync('url', url)
    wx.navigateTo({
      url: `/pages/play/play?id=${id}`
    });
  },
  onShow(){
    let states = wx.getStorageSync('states');
    this.setData({
      states
    })
  }
})