const {newMusic,hotMusic,dj} = require("../../models/home")
const {titles,icons} = require("../../static/data");
const app = getApp();
Page({
  data:{
    lists:""
  },
   onLoad:async function(option){
      let lists = {};
      let https = [newMusic,hotMusic,dj];
      for(let item of https){
        let res = await item();
        lists[item.name] = {
           res:res.data.playlists.slice(0,3),
           title:titles[item.name],
           iconUrl:icons[item.name]
        }
      }
      this.setData({
        lists
      })
   }
})