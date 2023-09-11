// pages/playlist/playlist.js
const { getPlaylistDetail, getMusicPlay } = require("../../models/playlistDetail")
const { handleNum, handleDtime } = require("../../models/fun")
// const audio = wx.getBackgroundAudioManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist: [],
    music: [],
    artist: [],
    playStates: {},
    prevId: "",
    States: {}
  },
  handleMusic(event) {
    var id = event.currentTarget.dataset.id;
    getMusicPlay(id).then(res => {
      let playUrl = res.data.data[0].url;
      // audio.title = "hello yesterday";

      let playStates = this.data.playStates;
      if (id != this.data.prevId) {
        playStates[id] = true;
        for (let key in playStates) {
          if (key != id) {
            playStates[key] = false;
          }
        }
        this.setData({
          playStates,
          prevId: id
        })
      }
      else {
        playStates[id] = !playStates[id];
        this.setData({
          playStates
        })
      }
      // if (playStates[id]) {
      //   audio.src = playUrl
      // } else {
      //   audio.stop();
      // }
    })
  },
  onLoad: function (options) {
    var { id } = options
    getPlaylistDetail(id).then(res => {
      var playlist = res.data.playlist;
      playlist.description = playlist.description.replace(/[\n]/g, "")
      playlist.playCount = handleNum(playlist.playCount);
      playlist.subscribedCount = handleNum(playlist.subscribedCount)
      playlist.commentCount = handleNum(playlist.commentCount)
      playlist.shareCount = handleNum(playlist.shareCount)
      var music = res.data.playlist.tracks;
      music.forEach(item => {
        var ar = item.ar;
        item.ar = { ar };
        if (item.ar.ar[0].name.length > 6) {
          item.ar.ar[0].name = item.ar.ar[0].name.slice(0, 5) + "...";
        }
        if (item.al.name.length > 5) {
          item.al.name = item.al.name.slice(0, 5) + "...";
        }
        item.dt = handleDtime(item.dt);
      })
      this.setData({
        playlist,
        music
      })
    })
  },
  onShow() {
    let States = wx.getStorageSync('States')
    this.setData({
      States
    })
  },

  handleclick(event) {
    var { url, id } = event.currentTarget.dataset;
    console.log(url)
    wx.setStorageSync('url', url)
    wx.navigateTo({
      url: `/pages/play/play?id=${id}`
    })
  }


})