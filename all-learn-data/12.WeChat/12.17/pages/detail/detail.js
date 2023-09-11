// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musics:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this)
    console.log("onload")
    var self = this;
    var url = "http://192.168.4.18:3000/search?keywords=你&type=10"
    var reqTask = wx.request({
      url,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: res=>{
        console.log(res.data.result.albums)
        this.setData({
          musics:res.data.result.albums
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onready")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onshow")
  }
})