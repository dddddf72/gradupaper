//index.js
//先导入 再引入
const {getCatHttp} = require("../../models/http")
Page({
  data:{
    playlists:[]
  },
  onLoad:async function(){
     var res = await getCatHttp();
     var playlists = res.data.playlists;
     this.setData({
       playlists
     })
  },
  handleDelete(event){
     var id = event.detail;
     /* filter */
     var playlists = this.data.playlists;
     var res = playlists.filter(item=>item.id!=id);
     this.setData({
       playlists:res
     })
  }
})
