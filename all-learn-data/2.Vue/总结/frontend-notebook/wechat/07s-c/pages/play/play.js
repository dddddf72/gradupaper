// pages/play/play.js
const {getMusicPlayDetail} = require("../../models/playlistDetail");
//1.获取播放器
const audio =  wx.getBackgroundAudioManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      play:"",
      /* 定义音乐播放的状态,默认是true */
      playState:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var {id} = options;
     let imgUrl= wx.getStorageSync('url')
     getMusicPlayDetail(id).then(res=>{
        let playUrl = res.data.data[0].url;
        audio.title="hello world";
        audio.src=playUrl;

        let states = wx.getStorageSync('states');
        /* {1001:true} */
        if(states){
           states[id] = true;
           //{1001:true,1002:true}
           for(let key in states){
             if(key !=id){
               states[key] = false
             }
           }
           wx.setStorageSync('states',states)
        }else{
          let  states = {};
          states[id] = true;
          /* {1001:true} */
          wx.setStorageSync('states',states)
        }

        /* 判断一下是否有缓存 */
        this.setData({
          play:{
            id,
            imgUrl,
            playUrl
          }
        })
     })
     
  },
  handleMusic(){
    var id = this.data.play.id;
    var playState = this.data.playState;
    var states = wx.getStorageSync('states')
    if(playState){
      this.setData({
        playState:false
      })
      audio.pause();
      states[id] = false;
    }else{
      this.setData({
        playState:true
      })
      states[id] = true;
      audio.play();
    }
    wx.setStorageSync('states', states)
  }
})

/* 
states = {
  1001:true,
  1002:false
  1003:false
}
 */