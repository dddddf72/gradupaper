// pages/feng/feng.js
const {getHttpCat} = require("../../models/http1")
Page({
  data:{
    playlists:[]
  },

  onLoad: function(options){
  this.getHttpData();
},

onReachBottom: function(){
  this.getHttpData()
},

getHttpData(){

  getHttpCat({
    offset:this.data.playlists.length,
    success:res=>{
      // this.handleHttpData(res)
      let playlists = [...this.data.playlists,...res.data.playlists]
      console.log(playlists)
  this.setData({
    playlists
  })
    }

  })

}
// handleHttpData(res){
//   // console.log(res.data.playlists)
//   // 本质是将data中的数组和http请求过来的数组合并成一个数组
  
// }
})