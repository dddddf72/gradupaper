// pages/play/play.js
const { getMusicPlay } = require("../../models/playlistDetail")
const audio = wx.getBackgroundAudioManager();

Page({
  data: {
    play: "",
    States: {},
    playState: []
  },
  handleMusic1() {
    var id = this.data.play.id
    var playState = this.data.playState;
    var States = wx.getStorageSync('States');
    if (playState) {
      this.setData({
        playState: false
      })
      audio.pause()
      States[id] = false;
    } else {
      this.setData({
        playState: true
      })
      audio.play();
      States[id] = true;
    }
    wx.setStorageSync('States', States)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var { id } = options;
    console.log(id)

    let imgUrl = wx.getStorageSync('url')
    getMusicPlay(id).then(res => {
      console.log(res.data)
      let playUrl = res.data.data[0].url;
      console.log(playUrl)
      audio.title = "hello world";
      audio.src = playUrl;
      let States = wx.getStorageSync('States')
      if (States) {
        States[id] = true;

        for (let key in States) {
          if (key != id) {
            States[key] = false;
          }
        }
        wx.setStorageSync('States', States)
      } else {
        let States = {};
        States[id] = true;
        wx.setStorageSync('States', States)
        // {1001:true，1002：true}的数据结构
      }
      // 判断是否存在缓存
      this.setData({
        play: {
          id,
          imgUrl,
          playUrl
        }
      })
    })
  },

})
/* states={1001:true,1002:false,1003:false} */