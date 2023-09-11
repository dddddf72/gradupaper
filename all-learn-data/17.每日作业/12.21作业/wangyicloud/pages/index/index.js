//index.js
//获取应用实例

const http = require("../../models/http")

Page({
  data:{
    result:"",
    //存所有item的播放状态
      playStates:{
      },
      //记录已经点击了的id
      prevId:"",
  },

  handleMusic(event){
    // console.log(event.currentTarget.dataset) 
    let playStates = this.data.playStates;
    let id = event.currentTarget.dataset.id
    
    //当前点击的id与之前点击的id不同时
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
    console.log(playStates)
  },
  
  // onShow:function(event){handleSubmit(event),bindinput(event)},
   handleSubmit(event){
    // console.log(event.detail.value)
    var keywords = event.detail.value.keywords;
    if(keywords==""){
      keywords = undefined;
    }
    http({
        keyword:keywords,
        success:(res)=>{
                res.data.result.albums.forEach(item=>{
                  // console.log(item.name)
                  if(item.name.length>10){
                  item.name = item.name.slice(0,9)+"...";
                  // console.log(item.name)
                 }
                if(item.artist.name.length>10){
                   item.artist.name = item.artist.name.slice(0,9)+"..."
                  //  console.log(item.artist.name)
                 }
                 this.setData({
                  result:res.data.result.albums,
              })
                })
        }
    })
  //获取数据的属性：event.detail.value
  },
  

bindinput(event){
    var keywords = event.detail.value;
    if(keywords==""){
      keywords = undefined;
    }
    // console.log(keywords)
    // http({
    //     keyword:keywords,
    //     success:(res)=>{
    //             res.data.result.albums.forEach(item=>{
    //               // console.log(item.name)
    //               if(item.name.length>10){
    //               item.name = item.name.slice(0,9)+"...";
    //               // console.log(item.name)
    //              }
    //             if(item.artist.name.length>10){
    //                item.artist.name = item.artist.name.slice(0,9)+"..."
    //               //  console.log(item.artist.name)
    //              }
    //              this.setData({
    //               result:res.data.result.albums,
    //           })
    //             })
    //     }
    // })
  }
 
})