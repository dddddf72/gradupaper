const {inMovie,comeMovie,topMovie} = require("../../models/home")
const {titles} = require("../../static/data")
const {transfromStar} = require("../../utils/index")
Page({
  data:{
    lists:""
  },
  onLoad:async function(){
    let lists = {};
    let https = [inMovie,comeMovie,topMovie];
    for (let item of https){
      let res = await item();
        res.data.result.forEach(item=>{
          item["rate"] = transfromStar(item.raiting)
        })
        lists[item.name] = {
          res:res.data.result.slice(0,3),
          title:titles[item.name],
        }
    }
    console.log(lists)
    this.setData({
      lists
    })
  }
  
})
