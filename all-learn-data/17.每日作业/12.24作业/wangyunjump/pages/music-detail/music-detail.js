const {http,handleNum,handleDtime} = require("../../models/http")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      playlist:[],
      music:[],
      artist:[],
      playStates:{},
      prevId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {id} = options;
    let url = `:3000/playlist/detail?id=${id}`;
    http({
      url,
      success:res=>{
      //  console.log(res.data.playlist.creator)
       var playlist = res.data.playlist;
       playlist.description = playlist.description.replace(/[\n]/g,"")
       playlist.playCount = handleNum(playlist.playCount);
       playlist.subscribedCount = handleNum(playlist.subscribedCount)
       playlist.commentCount = handleNum(playlist.commentCount)
       playlist.shareCount = handleNum(playlist.shareCount)
      //  console.log(playlist.description)
      var music = res.data.playlist.tracks;
      music.forEach(item=>{
        var ar = item.ar;
        item.ar = {ar};
        if(item.ar.ar[0].name.length>6){
          item.ar.ar[0].name = item.ar.ar[0].name.slice(0,5)+"...";
        }
        if(item.al.name.length>5){
          item.al.name = item.al.name.slice(0,5)+"...";
        }
        item.dt = handleDtime(item.dt);
      })
       this.setData({
         playlist,
         music
       })
      }
    })
  },
  handleMusic(event){
    let id = event.currentTarget.dataset.id;
    // console.log(this.data.music)
    var playStates = this.data.playStates;
    if(id!=this.data.prevId){
      playStates[id]=true;
      for(let key in playStates){
        if(key != id){
          playStates[key]=false;
        }
      }
      this.setData({
        playStates,
        prevId:id
      })
    }

    //当前点击的id与之前点击的id相同时
    else{
      playStates[id]=!playStates[id];
      this.setData({
        playStates,
        prevId:id
      })
    }
  }
})