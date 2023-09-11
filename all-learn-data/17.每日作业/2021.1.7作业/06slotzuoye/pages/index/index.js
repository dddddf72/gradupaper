const { newMusic, hotMusic, dj } = require("../../models/home")
const { titles, icons } = require("../../static/data")
Page({
  onLoad: async function () {
    var lists = {}
    let https = [newMusic, hotMusic, dj]

    for (let item of https) {
      let res = await item();

      lists[item.name] = {
        res: res.data.playlists.slice(0, 3),
        title: titles[item.name],
        iconUrl: icons[item.name]
      }
    }
    this.setData({
      lists
    })
  }
})


// const {getremenHttp,getzuixinHttp,getzhuboHttp} = require("../../models/http")

// Page({
//   data:{
//     head:[
//         {pic:"/images/remen.png",name:"热门歌曲"},
//         {pic:"/images/zuixin.png",name:"最新音乐"},
//         {pic:"/images/zhubo.png",name:"主播电台"},
//     ],
//     musics:[],
//     albums:[],
//     result:[]
//   },
//   onLoad: async function(){
//     var res1 = await getremenHttp();
//     var res2 = await getzuixinHttp();
//     var res3 = await getzhuboHttp();

//     var musics = res1.data.playlists.slice(0,3);
//     musics.forEach(item=>{
//       item["picUrl"] = item.coverImgUrl;
//     })
//     var albums = res2.data.albums.slice(0,3);
//     albums.forEach(item=>{
//       item["playCount"] = item.id;
//     })
//     var result = res3.data.result.slice(0,3);
//     result.forEach(item=>{
//       item["playCount"] = item.id;
//     })
//     this.setData({
//       musics,
//       albums,
//       result
//     })
//     console.log(albums);
//     console.log(musics);
//     console.log(result);
//   },
// })
