const {handleTitle,TransformStar} = require("../../utils/index")
Page({
data:{
  movies:[]
},
  onLoad:function(options){
    // http请求要封装
    var reqTask = wx.request({
      url: 'http://192.168.4.18:8000/',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
          this.handleHttpData(result.data.result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  handleHttpData(res){
    //  console.log(res)
      res.forEach(item=>{
        item["title"]=handleTitle(item["title"])
        item["raiting"]=TransformStar(item["raiting"])
        var raiting = item.raiting;
        this.setData({
          movies:res
        })
      })
      
      // console.log(this.data.movies[0].title)
      // console.log(res)
  }
  
  
})