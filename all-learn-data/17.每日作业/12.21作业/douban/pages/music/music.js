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
    var url ="http://192.168.4.18:3000/top/playlist?cat=华语&limit=15";
     wx.request({
      url,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
          this.handleHttpData(result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });

  },
  handleHttpData(res){
    // console.log(res.data.playlists)
    // 本质是将data中的数组和http请求过来的数组合并成一个数组
    let playlists = [...this.data.playlists,...res.data.playlists];
    this.setData({
      playlists,
    })
  },
  onReachBottom(){
    let offset = this.data.playlists.length;
    console.log(offset)
    let url =`http://192.168.4.18:3000/top/playlist?cat=华语&limit=15&offset=${offset}`;
    wx.request({
      url,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        // 方法1
          // console.log(result.data.playlists)
      // let playlists = res.data.playlists;
      // let prevData = this.data.playlists;
      // var result = prevData.concat(playlists);
      //   this.setData({
      //     playlists:result
      //   })
      // 方法2
      this.handleHttpData(res)
      },
    });
    // console.log("bottom")
  }

})