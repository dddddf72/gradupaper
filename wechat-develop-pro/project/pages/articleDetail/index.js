const ArticleHttp = require('../../models/ArticleHttp')
const audio = wx.getBackgroundAudioManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: "",
    title: '',
    playstate: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var { id } = options
    var result = await ArticleHttp.getDetail(id);
    var { res, msg } = result.data
    wx.setNavigationBarTitle({
      title: msg
    })
    var playstate = this.data.playstate

    if (playstate == true) {
      var playurl = res[0].music.url;
      audio.title = res[0].music.title;
      audio.src = playurl;
      audio.play()
    } else if (playstate == "") {
      playstate = true;
      var playurl = res[0].music.url;
      audio.title = res[0].music.title;
      audio.src = playurl;
      audio.play()
    } else if (playstate == false) {
      audio.pause()
    }
    this.setData({
      item: res[0],
      title: msg,
      playstate
    })
  },
  // 处理音乐播放
  handleMusic() {
    var playstate = this.data.playstate
    if (playstate == false) {
      playstate = true;
      audio.play()
    } else {
      playstate = false;
      audio.pause()
    }
    this.setData({
      playstate
    })
  },
  /*监听收藏状态  */
  async onCollect() {
    var item = this.data.item
    var { collected, _id } = item
    if (collected) {
      item.collected = false;
      await ArticleHttp.setCollect({ id: _id, collected: false })
    } else {
      item.collected = true;
      await ArticleHttp.setCollect({ id: _id, collected: true })
    }
    this.setData({
      item
    })
  }
})