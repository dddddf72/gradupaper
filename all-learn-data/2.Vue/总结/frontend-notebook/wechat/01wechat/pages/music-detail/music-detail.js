// pages/music-detail/music-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      res:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { id } = options;
    let url = `http://192.168.4.18:3000/album?id=${id}`;
    wx.request({
      url,
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        let {description} = result.data.album;
        this.setData({
          res:description
        })
        
      }
    });
  }
})